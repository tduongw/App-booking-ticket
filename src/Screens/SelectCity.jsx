import { View, Text,FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColor } from '../Utils/Color'
import { cities } from '../Utils/Data'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Store } from '../Context/Wrapper';




const SelectCity = () => {
const [isSelected, setisSelected] = useState()
const [isClicked, setisClicked] = useState(true)
const [City, setCity] = useState()
const {data,setdata}=useContext(Store)




const nav = useNavigation()
  return (
    <SafeAreaView 
      style={{
        flex:1,
        backgroundColor:useColor.white,
        paddingHorizontal:15,
        paddingTop:35
             }}>
      <Text
      style={{fontSize:25,color:useColor.secondary,fontWeight:'bold'}}
            >Select City
      </Text>

      <View>
      <FlatList 
        style={{marginTop:40}}
          numColumns={3}
          data={cities}
          renderItem={({item,index})=> (
            <TouchableOpacity 
              onPress={()=>{
                setisSelected(index)
                setisClicked(false)
                setdata(item)
                }}
            
            style={{
                borderWidth:isSelected==index?2:1,
                borderColor:isSelected==index?useColor.primary: useColor.grey,
                marginLeft:20,
                marginBottom:20,
                paddingHorizontal:18,
                paddingVertical:9,
                borderRadius:20,
              
          }}>
          <Text style={{
              fontWeight:'400',
              color:isSelected==index?useColor.primary: useColor.grey,
              fontSize: 16,            
              }}
              > 
              
           {item}</Text>

        </TouchableOpacity>

                   ) } 
      />

      </View>
      
      <View style={{flex:0.9,justifyContent:"flex-end"}}>

        <TouchableOpacity
          disabled={isClicked} 
          onPress={()=>{
            AsyncStorage.setItem("login",'On')
            nav.navigate('Home')
          }}
          style={{
        
              backgroundColor:isClicked==false? useColor.primary:'#E3E3E3',
              marginHorizontal:40,
              height:55,borderRadius:20,
              justifyContent:'center',
              alignItems:'center',
              }}>
              <Text style={{fontWeight:'bold',color:isClicked==false? 'white':'grey'}}>Get Started</Text>
            </TouchableOpacity>

      </View>
      

    </SafeAreaView>
  )
}

export default SelectCity;