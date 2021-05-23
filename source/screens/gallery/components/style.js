import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    photoContainer: {
        width,
        height: height-60
    },
    photo: {
        ...StyleSheet.absoluteFillObject
    },
    photoTitle: {
        bottom: 200,
        width: '100%',
        fontSize: 16,
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