import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
    },
    header: {
        width: '100%',
        height: Dimensions.get('window').height/5,
        backgroundColor: themes.colors.primary,
        justifyContent: 'center',
        paddingLeft: 20
    },
    greeting: {
        fontSize:20,
        color:'#fff',
    },
    boxInput: {
        width: '80%'
    },
    boxList: {
        flex: 1,
        width: '100%',
    },
    card: {
        width: '100%',
        height: 60,
        marginTop: 6,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: themes.colors.lightgray
    },
    rowCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowCardLeft: {
        flexDirection: 'row',
        width: '70%',
        alignItems: 'center',
        gap: 10
    },
    descriptionCard: {
        color: themes.colors.gray
    },
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})