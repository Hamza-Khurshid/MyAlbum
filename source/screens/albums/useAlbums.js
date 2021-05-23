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

    const fetchData = () => {
        if(albums.length === 0) {
            setLoading(true)

            axios
                .get('https://jsonplaceholder.typicode.com/albums')
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
    
                            setAlbums(allAlbums)
                            setAlbumsBackup(allAlbums)
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
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if(filter === "") {
            setAlbums([...albumsBackup])
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
    ];
}