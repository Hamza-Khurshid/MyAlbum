import React from 'react';
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
                    title: '         Photo Album App', 
                    headerStyle: { backgroundColor: "#2C4058" },
                    headerTitleStyle: { color: "white", alignSelf: 'center' },
                }}
            />
            <Stack.Screen 
                name="Gallery"
                component={GalleryScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}