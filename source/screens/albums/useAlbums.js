import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAlbums = () => {
    const [albums, setAlbums] = useState([])
    const [isLoading, setLoading] = useState(true)

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

    return [
        albums,
        isLoading,
    ];
}