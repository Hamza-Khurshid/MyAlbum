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
        onListEndReached,
    ] = useAlbums();

    return (
        <View>
            
            <FlatList
                data={albums}
                renderItem={({ item }) => (
                  <Album album={item} />  
                )}
                style={{ paddingTop: 10 }}
                onEndReachedThreshold={0.5}
                onEndReached={onListEndReached}
                keyExtractor={(item) => item.id.toString()}
                ListFooterComponent={isLoading ? <ActivityIndicator color="black" style={{ margin: 15 }} /> : null}
            />

            <AlbumsFilter
                filter={filter}
                setFilter={setFilter}
                isModal={isFilterModal}
                setModal={setFilterModal}
                albums={uniqueArray(albumsBackup, 'userId')}
            />

            {
                isLoading && albums.length === 0 ?
                    <View style={styles.loadingView}>
                        <ActivityIndicator color='black' />
                    </View>
                :
                    null
            }
        </View>
    )
}
