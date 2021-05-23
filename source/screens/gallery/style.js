import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    loadingView: {
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: '#ccc',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
    },
    smallListContainer: {
        paddingHorizontal: 10
    },
    smallListStyle: {
        bottom: 20,
        position: 'absolute',
    }
})