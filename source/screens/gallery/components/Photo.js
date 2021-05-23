import React from 'react'
import styles from './style'
import { View, Image, Text } from 'react-native'

export default function Photo({ photo }) {
    return (
        <View style={styles.photoContainer}>
            <Image source={{ uri: photo.url }} style={styles.photo} />
            <Text style={styles.photoTitle}>{photo.title}</Text>
        </View>
    )
}
