import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    button:{
        backgroundColor: themes.colors.primary,
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        boxShadow: '0 2px 4px gray'
    },
    textButton:{
        fontSize: 14,
        color: themes.colors.secundary,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})