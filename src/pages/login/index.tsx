import React, { useState } from "react";
import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native'

export default function Login (){

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(true);
    const [loading, setLoading] = useState(false);
    const emailRegistred = 'tmazleo';
    const passRegistred = 'sesseh-nyjzoq-Cokxa1'

    async function getLogin(){
        try {
            setLoading(true);
            if(!email || !password) {
                return setTimeout(()=>{
                    Alert.alert('Atenção!','Os campos devem ser preenchidos!')
                    setLoading(false)
                },2000)
            }
            setTimeout(()=>{
                if(email == emailRegistred && password == passRegistred){
                    navigation.reset({routes:[{name:'BottomRoutes'}]})
                }else{
                    Alert.alert('Usuário não cadastrado!')
                }
                setLoading(false)
            },2000)
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain"/>
                <Text style={style.text}>Bem vindo!</Text>
            </View>
            <View style={style.boxMid}>
                <Input 
                    value={email}
                    title="e-mail"
                    iconRightName="email"
                    IconRight={MaterialIcons}
                    onChangeText={setEmail}
                />
                <Input 
                    value={password}
                    title="senha"
                    iconRightName={showPass?"eye-closed":"eye"}
                    IconRight={Octicons}
                    onChangeText={setPassword}
                    secureTextEntry={showPass}
                    onIconRightPress={() => setShowPass(!showPass)}
                />
            </View>
            <View style={style.boxBot}>
                <Button text="entrar" loading={loading} onPress={()=>getLogin()}/>
            </View>
            <Text style={style.textBot}>Não tem conta? <Text style={{color:themes.colors.primary}}>Crie agora!</Text></Text>
            
        </View>
    )
}