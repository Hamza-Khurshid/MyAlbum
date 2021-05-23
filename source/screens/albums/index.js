import React from 'react'
import {
    View, 
    FlatList,
    Dimensions, 
    RefreshControl, 
    ActivityIndicator,
} from 'react-native'
import Album from './components/Album'
import { useAlbums } from './useAlbums'

export default function Albums() {
    const [
        albums,
        isLoading,
     ] = useAlbums();

    return (
        <View>
            <FlatList
                data={albums}
                renderItem={({ item }) => (
                  <Album album={item} />  
                )}
                keyExtractor={(item) => item.id.toString()}
            />

            {
                isLoading ?
                    <View style={{ height: Dimensions.get('window').height, backgroundColor: '#ccc', width: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator color='black' />
                    </View>
                :
                    null
            }
        </View>
    )
}
