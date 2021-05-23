import React from 'react'
import { Modal, Picker, View, Text, TouchableOpacity } from 'react-native'
import { uniqueArray } from '../../../utils/helpers'
import styles from './style'

export default function AlbumsFilter({ albums, isModal, setModal, filter, setFilter }) {
    let users = uniqueArray(albums, 'userId')

    return (
        <Modal visible={isModal} transparent>
            <View style={styles.filterContainer}>
                <Text style={styles.title} onPress={()=>setModal(false)}>Filter Albums</Text>

                <View style={styles.filterView}>
                    <Picker
                        selectedValue={filter}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => {setFilter(itemValue); setModal(false)}}
                    >
                        <Picker.Item label="Select User" value="" />
                        {
                            users.map((album, index) => (
                                <Picker.Item key={index} label={album.name} value={album.userId} />
                            ))
                        }
                    </Picker>
                </View>

                <TouchableOpacity onPress={()=>setModal(false)}>
                    <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
