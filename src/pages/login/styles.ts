import {Dimensions, StyleSheet} from 'react-native';
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        height:Dimensions.get("window").height/3,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMid:{
        height:Dimensions.get("window").height/4,
        width:'80%',
    },
    boxBot:{
        height:Dimensions.get("window").height/3,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo:{
        width: 80,
        height: 80,
        borderRadius: 10
    },
    text:{
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18

    },
    textBot:{
        fontSize: 16,
        color: themes.colors.gray
    }
})