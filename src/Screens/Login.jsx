import { View, Text,Image, Button,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useColor } from '../Utils/Color';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Touchable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const nav = useNavigation()
  return (
    
            <SafeAreaView
              style={{
                 flex:1,
                 paddingHorizontal:10,
                 backgroundColor:useColor.primary,
                
             }}>
                <View style={{alignItems:'center',gap:10,justifyContent:'center',height:responsiveHeight(30)}}>
                         <Image 
                          style={{width:'100%',height:'100%',resizeMode:'contain'}}
                          source={{uri:'https://mir-s3-cdn-cf.behance.net/projects/404/4fabff156214799.Y3JvcCw5ODEsNzY4LDIxLDA.png'}}/>
                        
                </View>
                <View style={{height:responsiveHeight(30),flexDirection:'column',gap:10,justifyContent:"space-around",}}>
                <View style={{ 
                        
                        alignItems:'stretch',
                        backgroundColor:'#E3E3E3',
                        paddingHorizontal:10,
                        marginHorizontal:10,
                        borderRadius:10,
                        borderColor:'white',
                         height:60}}>
                        
                        <TextInput style={{
                            fontWeight:'600',
                            fontSize:17,
                            height:60}} placeholder="Nhập số điện thoại" />
                    </View>

                    <View style={{ 
                        alignItems:'stretch',
                        backgroundColor:'#E3E3E3',
                        paddingHorizontal:10,
                        marginHorizontal:10,
                        borderRadius:10,
                        borderColor:'white',
                        borderWidth:2,
                        height:60,
                        }}>
                        
                        <TextInput style={{
                            fontWeight:'600',
                            fontSize:17,
                            height:60}} placeholder="Nhập mật khẩu" secureTextEntry={true} />
                    </View>
                    </View>
                                
                    <TouchableOpacity 
                    onPress={()=>{
                      nav.navigate('SelectCity')

                    }}
                    style={{ 
                        alignItems:'center', 
                        justifyContent:'center',
                        paddingHorizontal:10,
                        marginHorizontal:10,
                        borderWidth:2,
                        backgroundColor:'black',
                        height:60,
                        marginTop:40,
                        borderRadius:20,}}>
                        <Text style={{
                            
                            color:'white',fontSize:22,fontWeight:'700',
                            }}>Login</Text>

                    </TouchableOpacity>
        <View 
        style={{
          marginTop:20,
        height:60,gap:10,
        justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',marginHorizontal:15}}>
          <BouncyCheckbox
          size={25}
          fillColor="black"
          unfillColor="#FFFFFF"
          text="Remember Me"
          iconStyle={{ borderColor: "black" }}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{color:'white',fontWeight:'400',}}>
        </BouncyCheckbox> 
        <TouchableOpacity>
          <Text style={{color:'white',fontWeight:'500'}}>Forgot Passsword?</Text>
          </TouchableOpacity>
           
          </View>
      
          </View>         

          <View style={{flexDirection:'row',marginHorizontal:20,justifyContent:'center'}}>
            <Text style={{color:'white',fontWeight:'500',fontSize:16}}>New to BookMyShow?</Text>
            <TouchableOpacity
            onPress={()=>{{
              
            }}}>
               <Text style={{color:'yellow',fontWeight:'500',fontSize:16}}> Sign Up Now</Text>
               </TouchableOpacity>
            </View>  
                          
      

                
            </SafeAreaView>
               
                  
                
                

       
  )
}

export default Login