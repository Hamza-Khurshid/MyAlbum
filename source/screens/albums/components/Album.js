import React from 'react'
import styles from './style'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import EMAIL from '../../../assets/icons/email.png'
import USER from '../../../assets/icons/user.png'
import WEB from '../../../assets/icons/web.png'

export default function Album({ album }) {
    return (
        <View style={[styles.albumContainer]}>
            <TouchableOpacity style={{ activeOpacity: 0.9 }}>
                <View style={styles.albumContentContainer}>
                    
                    <Text style={styles.albumTitle}>{album.title}</Text>

                    <Text style={styles.userName}>
                        <Image
                            source={USER}
                            style={{ height: 16, width: 16 }}
                        />
                        {'  ' + album.name}
                    </Text>
                    <View style={styles.emailWebView}>
                        <Text style={{ color: 'black' }}>
                            <Image
                                source={EMAIL}
                                style={{ height: 14, width: 14 }}
                            />
                            {'  ' + album.email}
                        </Text>
                        <Text style={{ color: 'black' }}>
                            <Image
                                source={WEB}
                                style={{ height: 14, width: 14 }}
                            />
                            {'  ' + album.website}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}
