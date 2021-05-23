import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    albumContainer: {
        width: '100%',
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    albumContentContainer: {
        padding: 6,
        padding: 8,
        elevation: 5,
        borderRadius: 5,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    userName: { 
        fontSize: 16, 
        marginTop: 14,
        color: 'black',
    },
    albumTitle: {
        fontSize: 16,
        color: 'black',
        textAlign: "left",        
        fontWeight: 'bold'
    },
    emailWebView: {
        flexDirection: "row", 
        justifyContent: 'space-between' 
    }
})