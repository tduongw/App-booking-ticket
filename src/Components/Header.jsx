import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Entypo } from '@expo/vector-icons';
import { useColor } from '../Utils/Color';
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Store } from '../Context/Wrapper';

const Header = () => {
  const {data,setdata}=useContext(Store)
  return (
    <View
        style={{
            paddingHorizontal:20,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingTop:10,
        }}>
    <View style={{flexDirection:'row',alignItems:'center',}}>
        <Entypo 
        name="location-pin" size={35} color={useColor.primary} />
        <Text 
        style={{fontSize:18,color:useColor.primary, fontWeight:'600'}}>{data!=null?data:'Select City Here'}</Text>

    </View>
         <Ionicons onPress={()=>{
            AsyncStorage.removeItem("login")

         }     
        } name="ios-search" size={28} color={useColor.primary} />  
    </View>
  )
}

export default Header