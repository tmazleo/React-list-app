import React, { forwardRef } from "react";
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text } from 'react-native'
import { style } from "./styles";

type Props = TouchableHighlightProps & {
    text: string,
    loading?: boolean
}

export function Button({...rest}:Props) {
    return(
        <TouchableOpacity style={style.button} {...rest} activeOpacity={0.8}>
            {rest.loading?<ActivityIndicator/>:<Text style={style.textButton}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}

