import React from 'react'
import styles from './style'
import { View, Image, Text } from 'react-native'

export default function Photo({ photo, album }) {
    return (
        <View style={styles.photoContainer}>
            <Image source={{ uri: photo.url }} style={styles.photo} />
            <Text style={styles.photoTitle}>{photo.title}</Text>
            <Text style={styles.albumTitle}>{album}</Text>
        </View>
    )
}
