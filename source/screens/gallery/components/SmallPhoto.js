import React from 'react'
import styles from './style'
import { Image, TouchableOpacity } from 'react-native'

export default function SmallPhoto({ photo, index, activeIndex, setActivePos }) {
    return (
        <TouchableOpacity onPress={()=>setActivePos(index)}>
            <Image
                source={{ uri: photo.url }}
                style={[styles.smallPhoto, activeIndex === index ? styles.activePhoto : {}]}
            />
        </TouchableOpacity>
    )
}
