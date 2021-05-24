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
import { uniqueArray } from '../../utils/helpers'

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
            
            <FlatList
                data={albums}
                renderItem={({ item }) => (
                  <Album album={item} />  
                )}
                style={{ paddingTop: 10 }}
                keyExtractor={(item) => item.id.toString()}
            />

            <AlbumsFilter
                filter={filter}
                setFilter={setFilter}
                isModal={isFilterModal}
                setModal={setFilterModal}
                albums={uniqueArray(albumsBackup)}
            />

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
