import React, { createContext, useRef, useContext, useEffect, useState } from "react";
import { Alert, Dimensions, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Input } from "../components/Input";
import { Flag } from "../components/Flag";
import { themes } from "../global/themes";
import CustomDateTimePicker from "../components/CustomDateTimePicker";

export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any): any => {
    const modalizeRef = useRef<Modalize>(null);


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selected, setSelected] = useState('urgente');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);


    const onOpen = () => {
        modalizeRef?.current?.open()
    }
    const onClose = () => {
        modalizeRef?.current?.close()
    }

    const flags = [
        { caption: 'urgente', color: themes.colors.red },
        { caption: 'opcional', color: themes.colors.blueLight }
    ];
    useEffect(() => {
        onOpen();
    }, []);

    const _renderFlags = () => {
        return (
            flags.map((item, index) => (
                <TouchableOpacity key={index}>
                    <Flag caption={item.caption} color={item.color} selected />
                </TouchableOpacity>
            ))
        );
    };

    const handleDataChange = (date: Date) => {
        setSelectedDate(date);
    }
    const handleTimeChange = (date: Date) => {
        setSelectedTime(date);
    }

    const _container = () => {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => onClose()}><MaterialIcons name="close" size={30} /></TouchableOpacity>
                    <Text style={styles.title}>Criar tarefa</Text>
                    <TouchableOpacity><AntDesign name="check" size={30} /></TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Input title="Titulo:" labelStyle={styles.label} value={title} onChangeText={setTitle} />
                    <Input title="decrição:" labelStyle={styles.label} height={100} multiline numberOfLines={5} value={description} onChangeText={setDescription} />

                    <View style={{ width: '40%' }}>
                        <View style={{ flexDirection: 'row', gap: 10, width: '100%' }}>
                            <TouchableOpacity onPress={()=>setShowDatePicker(true)} style={{width:200}}>
                                <Input title="data limite" labelStyle={styles.label} editable={false} value={selectedDate.toLocaleDateString()} onPress={() => setShowDatePicker(true)} />

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setShowTimePicker(true)} style={{width:120}}>
                                <Input title="hora limite" labelStyle={styles.label} editable={false} value={selectedTime.toLocaleTimeString()} onPress={() => setShowTimePicker(true)} />

                            </TouchableOpacity>
                        </View>
                        {/* <Input title="limite de tempo:" labelStyle={styles.label}/> */}
                        <CustomDateTimePicker onDateChange={handleDataChange} setShow={setShowDatePicker} show={showDatePicker} type={'date'} />
                        <CustomDateTimePicker onDateChange={handleTimeChange} setShow={setShowTimePicker} show={showTimePicker} type={'time'} />
                    </View>
                    <View style={styles.containerFlag}>
                        <Text style={styles.label}>Flags:</Text>
                        <View style={styles.rowFlag}>{_renderFlags()}</View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <AuthContextList.Provider value={{ onOpen }}>
            {props.children}
            <Modalize
                ref={modalizeRef}
                modalHeight={Dimensions.get('window').height / 1.3}
            >
                {_container()}
            </Modalize>
        </AuthContextList.Provider>
    );
};

export const useAuth = () => useContext(AuthContextList);

export const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    header: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    content: {
        width: '100%',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerFlag: {
        width: '100%',
        padding: 10
    },
    label: {
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'none'
    },
    rowFlag: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    }
});