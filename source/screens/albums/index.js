import React from 'react'
import {
    View, 
    FlatList,
    ActivityIndicator,
} from 'react-native'
import Album from './components/Album'
import { useAlbums } from './useAlbums'
import styles from './style'

export default function Albums() {
    const [
        albums,
        isLoading,
     ] = useAlbums();

    return (
        <View>
            
            {/* Albums list */}
            <FlatList
                data={albums}
                renderItem={({ item }) => (
                  <Album album={item} />  
                )}
                keyExtractor={(item) => item.id.toString()}
            />

            {/* Loading overlay */}
            {
                isLoading ?
                    <View style={styles.loadingView}>
                        <ActivityIndicator color='black' />
                    </View>
                :
                    null
            }
        </View>
    )
}
