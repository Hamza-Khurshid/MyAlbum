import React from 'react'
import {
    View,
    FlatList,
    ActivityIndicator,
} from 'react-native'
import styles from './style'
import Album from './components/Album'
import { useAlbums } from './useAlbums'
import AlbumsFilter from './components/AlbumsFilter'

export default function Albums() {
    const [
        albums,
        isLoading,
        filter,
        setFilter,
        albumsBackup,
        isFilterModal,
        setFilterModal,
    ] = useAlbums();

    return (
        <View>
            
            {/* Albums list */}
            <FlatList
                data={albums}
                renderItem={({ item }) => (
                  <Album album={item} />  
                )}
                style={{ paddingTop: 10 }}
                keyExtractor={(item) => item.id.toString()}
            />

            {/* Albums Filter Modal */}
            <AlbumsFilter
                filter={filter}
                albums={albumsBackup}
                setFilter={setFilter}
                isModal={isFilterModal}
                setModal={setFilterModal}
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
