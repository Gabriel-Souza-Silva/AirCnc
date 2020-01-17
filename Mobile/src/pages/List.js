import React,{useEffect,useState} from 'react'
import {AsyncStorage,View,Text,Image,StyleSheet} from 'react-native'
import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List({navigation}){

    const [techs,setTechs] = useState([])

    useEffect(()=>{
        AsyncStorage.getItem('techs').then(async function (storagedTechs) {
            if(storagedTechs){
                const techArray = storagedTechs.split(',').map(tech=> tech.trim())
                console.log(techArray)
                setTechs(techArray)
            }else{
                await AsyncStorage.removeItem('user')

                navigation.navigate('Login')
            }
            
        })
    },[])

    return (
        <View  style={style.container}>
            <Image source={logo} style={style.logo}></Image>

            {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
            
        </View>
    )
}



const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    
    logo:{
        height: 32,
        resizeMode:"contain",
        alignSelf: "center",
        marginTop:10
    }
})