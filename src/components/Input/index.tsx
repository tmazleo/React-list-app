import React, { forwardRef, LegacyRef } from "react";
import { TextInput, View, Text, TextInputProps, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import { style } from "./styles";
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
    height?: number,
    labelStyle?: StyleProp<TextStyle>
}

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {

    const { IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, height, labelStyle, ...rest } = Props

    const calculateSizeWidth = () => {
        if(IconLeft && IconRight) {
            return '60%'
        }else if(IconLeft || IconRight) {
            return '70%'
        }else {
            return '90%'
        }
    }

    return (
        <View>
            {title&&<Text style={[style.inputTitle, labelStyle]}>{title}</Text>}

            <View style={[style.inputBox,{height:height||40}]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress}>
                        <IconLeft name={iconLeftName as any} size={30} color={themes.colors.gray} style={style.icon} />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[style.inputInsert,{width:calculateSizeWidth(), height: '100%'}]}
                    {...rest}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress}>
                        <IconRight name={iconRightName as any} size={30} color={themes.colors.gray} style={style.icon} />
                    </TouchableOpacity>
                )}

                
            </View>
        </View>
    )
})