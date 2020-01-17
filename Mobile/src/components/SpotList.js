import React, {useState, useEffect} from 'react'
import {View,Text,StyleSheet} from 'react-native'

import api from '../services/api'

export default function SpotList({tech}){

    const [spots, setSpot] = useState([])

    useEffect(()=>{
        async function loadSpot(){
            const response = await api.get('/spots',{
                params: {tech}
            })
            console.log(tech)
            console.log(response.data)
            setSpot(response.data)
        }

        loadSpot()
    },[])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        marginTop: 30,
    },

    title:{
        fontSize:20,
        color:'#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },

    bold:{
        fontWeight: 'bold',
    }
})
