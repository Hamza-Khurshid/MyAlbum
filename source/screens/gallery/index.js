import { Dimensions, View, FlatList, ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useGallery } from './useGallery'
import styles from './style'
import React from 'react'
import Photo from './components/Photo'
import SmallPhoto from './components/SmallPhoto'

const { width } = Dimensions.get('window')

export default function Gallery() {
    const routes = useRoute()
    const album  = routes?.params?.album || {};

    const [
        photos,
        isLoading,
        bgListRef,
        smListRef,
        activeIndex,
        setActivePos
    ] = useGallery(album?.id || '')

    return (
        <View>

            {/* Big photo slider */}
            <FlatList
                horizontal
                data={photos}
                pagingEnabled
                ref={bgListRef}
                renderItem={({ item }) => (
                  <Photo photo={item} />
                )}
                onMomentumScrollEnd={event => {
                    setActivePos(Math.floor(event.nativeEvent.contentOffset.x/width))
                }}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
            />

            {/* Small photo slider */}
            <FlatList
                horizontal
                data={photos}
                ref={smListRef}
                style={styles.smallListStyle}
                renderItem={({ item, index }) => (
                    <SmallPhoto 
                        photo={item}
                        index={index}
                        activeIndex={activeIndex}
                        setActivePos={setActivePos}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.smallListContainer}
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
