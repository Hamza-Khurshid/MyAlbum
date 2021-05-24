import React, { 
    useEffect, 
    useState, 
    useLayoutEffect 
} from 'react'
import axios from 'axios'
import {
    Image,
    TouchableOpacity, 
 } from 'react-native'
 import { useNavigation } from '@react-navigation/native'
 import FILTER_ICON from '../../assets/icons/filter.png'

export const useAlbums = () => {
    const navigation = useNavigation()
    const [albums, setAlbums] = useState([])
    const [albumsBackup, setAlbumsBackup] = useState([])
    const [filter, setFilter] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [isFilterModal, setFilterModal] = useState(false)
    const [page, setPage] = useState(0)

    const fetchData = () => {
        setLoading(true)

        axios
            .get(`https://jsonplaceholder.typicode.com/albums?_start=${page*10}&_limit=${10}`)
            .then(res => {

                if(res?.data) {
                    let albumsData = res.data;

                    let promises = albumsData.map(async (album) => (
                        await axios.get(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
                    ))
                    
                    Promise.all(promises).then((proms) => {
                        let allAlbums = [];
            
                        proms.forEach((userProm, index) => {
                            if(userProm?.data) {
                                let user = userProm.data;
                                
                                allAlbums.push({
                                    ...albumsData[index],
                                    name: user.name,
                                    email: user.email,
                                    website: user.website
                                })
                            }
                        })

                        setAlbums([...albums, ...allAlbums])
                        setAlbumsBackup([...albums, ...allAlbums])
                        setLoading(false)
                    }).catch((error) => {
                        setLoading(false)
                        console.log("Error making users requests:" + error);
                    })

                } else {
                    setLoading(false)
                }
            })
            .catch(error => {
                setLoading(false)
            })
    }
    
    useEffect(() => {
        fetchData()
    }, [page])

    const onListEndReached = () => {
        if(!isLoading && page <= 9) {
            setPage(p => p+1)
        }
    }

    useEffect(() => {
        if(filter === "") {
            setAlbums([...albumsBackup])
            setPage(0)
        } else {
            let newAlbums = [...albumsBackup].filter(album => album.userId === filter)
            setAlbums(newAlbums)
        }
    }, [filter])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }} onPress={()=>setFilterModal(true)}>
                    <Image source={FILTER_ICON} style={{ height: 25, width: 25 }} /> 
                </TouchableOpacity>
            )
        })
    }, [navigation])

    return [
        albums,
        isLoading,
        filter,
        setFilter,
        albumsBackup,
        isFilterModal,
        setFilterModal,
        onListEndReached,
    ];
}