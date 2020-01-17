import React,{useState,useEffect} from 'react';
import {View,AsyncStorage,KeyboardAvoidingView,Platform,Image,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'

import api from '../services/api'

import logo from '../assets/logo.png'


export default function Login({navigation}){
    const [email,setEmail] = useState('')
    const [techs,setTechs] = useState('')

    useEffect(()=>{
        AsyncStorage.getItem('user').then(user =>{
            if(user){
                navigation.navigate('List')
            }
        })
    },[])

    async function handleSubmit(){
        const response = await api.post('/sessions',{
            email
        })

        const { _id } = response.data

        await AsyncStorage.setItem('user',_id)
        await AsyncStorage.setItem('techs',techs)

        navigation.navigate('List')
    }

    return (
    <KeyboardAvoidingView  enabled={Platform.OS == 'ios'} behavior={Platform.OS === "ios" ? "padding" : null} style={style.container}>
        <Image  source={logo}/>
        <View style={style.form}>
            <Text style={style.label}>SEU E-MAIL *</Text>
            <TextInput
                style={style.input}
                placeholder="Seu E-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={text => setEmail(text)}></TextInput>
        </View>
        <View style={style.form}>
            <Text style={style.label}>TECNOLOGIAS *</Text>
            <TextInput
                style={style.input}
                placeholder="Tecnoloigas de interesse "
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="words"
                autoCorrect={false}
                value={techs}
                onChangeText={text => setTechs(text)}></TextInput>

            <TouchableOpacity onPress={handleSubmit} style={style.button}>
                <Text  style={style.buttonText}>Encontrar Spots</Text>
            </TouchableOpacity>
        </View>  
              
    </KeyboardAvoidingView>
    )
}
            



const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },

    label:{
        fontWeight:'bold',
        color:"#444",
        marginBottom:8
    },
    form:{
        alignSelf:'stretch',
        paddingHorizontal:30,
        marginTop:5
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        paddingHorizontal:20,
        fontSize:16,
        color:'#444',
        height: 44,
        marginBottom:20,
        borderRadius:2
    },
    button:{
        height:42,
        backgroundColor: '#f05a5b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2
    },

    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16
    }
})