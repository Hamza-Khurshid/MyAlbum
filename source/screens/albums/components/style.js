import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    albumContainer: {
        width: '100%',
        marginBottom: 10,
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
    },

    // Album Filter styles
    filterContainer: {
        padding: 8,
        elevation: 2,
        borderRadius: 20,
        height: height/2,
        marginTop: 'auto',
        marginHorizontal: 10,
        marginBottom: 'auto',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 22,
        marginTop: 6,
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
    },
    filterView: {
        width: '80%',
        borderWidth: 1,
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeText: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
    }
})