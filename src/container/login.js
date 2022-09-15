import * as React from 'react';
import { View, Text, Button, TextInput, Image, ToastAndroid } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'



function Login(props) {
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@USER', jsonValue)
    } catch (e) {
      console.log("error")
      // saving error
    }
  }
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  var check;
  const retrieve_data=()=>{
    let user={
        name,pass
  }
    database()
  .ref('/users/')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
    check=snapshot.val()
    if (user.name in check){
      console.log("Successfully login");
      storeData(user)
      ToastAndroid.show("Successfully Login !", ToastAndroid.SHORT);
      props.navigation.navigate("Main");
    }
    else{
      console.log("Please Signup first");
      ToastAndroid.show("Please Signup first !", ToastAndroid.LONG);
      props.navigation.navigate("SignUp");
    }
  });

  
  database()
  .ref('/donors/')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
    const donorCheck=snapshot.val()
    if (user.Name in donorCheck){
      console.log("Loger and donor")
      LogerDonor(user.Name);
    }
    else{
      console.log("Loger and but not donor")
      LogerDonor("");
    }
  });
  const LogerDonor = async (logerdonor) => {
    try {
      const jsonValue = JSON.stringify(logerdonor)
      await AsyncStorage.setItem('@LOGERDONOR', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  }
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
      <View>
        <Text style={{ fontSize: 52, color: 'white', fontWeight: 'bold', backgroundColor:'red', width:360, textAlign:'center', margin:30 }}>LOGIN</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 20 }}>
        <TextInput value={name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 20 }}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>
      <View style={{ margin: 20, width: 150,}}>
        <Button color="red" onPress={()=>retrieve_data()} title="Login"></Button>
      </View>
      <View>
      <Image source={require('../images/icon.jpg')} 
      style={{margin:20, height:200, width:200 }}
      />
      </View>
    </View>
  );
}

export default Login