import axios from 'axios'
import { Dimensions } from 'react-native'
import { useEffect, useState, useRef } from 'react'

const { width } = Dimensions.get('window')

export const useGallery = (albumId) => {
    const [photos, setPhotos] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    const bgListRef = useRef()
    const smListRef = useRef()
    const [activeIndex, setActiveIndex] = useState(0)

    const setActivePos = (position) => {
        setActiveIndex(position)

        // Setting big photo
        bgListRef?.current?.scrollToOffset({
            offset: position * width,
            animated: true
        })

        // Setting small photo
        if(position * 50 > width/2) {
            smListRef?.current?.scrollToOffset({
                offset: position * 90 - width/2 + 40,
                animated: true
            })
        } else {
            smListRef?.current?.scrollToOffset({
                offset: 0,
                animated: true
            })
        }
    }

    const fetchData = () => {
        if(photos.length === 0) {
            setLoading(true)

            axios
                .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
                .then(res => {
                    if(res?.data) {
                        setPhotos(res.data)
                        setLoading(false)
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
        photos,
        isLoading,
        bgListRef,
        smListRef,
        activeIndex,
        setActivePos
    ];
}