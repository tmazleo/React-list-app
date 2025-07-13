import React, { forwardRef, useContext } from "react";
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text, View } from 'react-native'
import { style } from "./styles";
import { AntDesign, Entypo, MaterialIcons, } from '@expo/vector-icons';
import { themes } from "../../global/themes";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AuthContextList } from "../../context/authContext_list";


export default ({ state, navigation }: BottomTabBarProps) => {

    const {onOpen} = useContext<any>(AuthContextList)

    const go = (ScreenName:string) => {
        navigation.navigate(ScreenName)
    }


    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>go("List")}>
                <AntDesign name="bars"
                    style={{ opacity: state.index === 0 ? 1 : 0.5, color: themes.colors.primary, fontSize: 32 }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onOpen()} style={style.tabItemButton} activeOpacity={.9}>
                <View style={{ width: '100%', left: 10, top: 4 }}>
                    <Entypo name="plus" size={40} style={{ color: '#fff' }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', width: '100%', right: 10, bottom: 10 }}>
                    <MaterialIcons name="edit" size={30} style={{ color: '#fff' }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={()=>go("User")}>
                <AntDesign
                    name="user"
                    style={{ opacity: state.index === 1 ? 1 : 0.5, color: themes.colors.primary, fontSize: 32 }}
                />
            </TouchableOpacity>
        </View>
    )
}

