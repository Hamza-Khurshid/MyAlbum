import React from 'react';
import FILTER_ICON from '../assets/icons/filter.png';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumScreen from '../screens/albums';
import GalleryScreen from '../screens/gallery';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Album"
                component={AlbumScreen}
                options={{ 
                    title: 'Photo Album App', 
                    headerTitleStyle: { alignSelf: 'center' },
                }}
            />
            <Stack.Screen 
                name="Gallery"
                component={GalleryScreen}
                options={
                    ({ route }) => ({ 
                        title: route.params.album.title, 
                    })
                }
            />
        </Stack.Navigator>
    );
}