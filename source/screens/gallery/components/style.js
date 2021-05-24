import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    photoContainer: {
        width,
        height,
    },
    photo: {
        ...StyleSheet.absoluteFillObject
    },
    albumTitle: {
        top: 40,
        color: "white",
        width: '100%',
        fontSize: 22,
        paddingHorizontal: 10,
        textAlign: 'center',
        position: 'absolute',
    },
    photoTitle: {
        bottom: 200,
        width: '100%',
        fontSize: 16,
        color: "white",
        textAlign: 'center',
        position: 'absolute',
    },
    smallPhoto: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
    },
    activePhoto: {
        borderWidth: 2,
        borderColor: "white",
    },
})