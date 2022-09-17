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
  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");
  var check;
  const retrieve_data=()=>{
    var id = email.split("@")
    let user={
        email,pass
  }
    database()
  .ref(`/users/${id[0]}/`)
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.exists());
    check=snapshot.val()
    if (snapshot.exists()){
      if(snapshot.val().pass==pass){
      console.log("Successfully login");
      storeData(user)
      ToastAndroid.show("Successfully Login!", ToastAndroid.SHORT);
      props.navigation.navigate("Main");
      }
      else{
        ToastAndroid.show("Wrong Password!", ToastAndroid.SHORT);
      }
    }
    else{
      console.log("Please Signup first");
      ToastAndroid.show("Please Signup first !", ToastAndroid.LONG);
      props.navigation.navigate("SignUp");
    }
  });

  
  // database()
  // .ref('/donors/')
  // .once('value')
  // .then(snapshot => {
  //   console.log('User data: ', snapshot.val());
  //   const donorCheck=snapshot.val()
  //   if (user.Name in donorCheck){
  //     console.log("Loger and donor")
  //     LogerDonor(user.Name);
  //   }
  //   else{
  //     console.log("Loger and but not donor")
  //     LogerDonor("");
  //   }
  // });
  // const LogerDonor = async (logerdonor) => {
  //   try {
  //     const jsonValue = JSON.stringify(logerdonor)
  //     await AsyncStorage.setItem('@LOGERDONOR', jsonValue)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  }
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
      <View style={{backgroundColor: "red",width:"90%", margin:20,borderTopLeftRadius:60,borderBottomRightRadius:60,padding:5,marginBottom:40}}>
        <Text style={{ fontSize: 45, color: 'white', fontWeight: 'bold', textAlign:'center' }}>LOGIN</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 20 }}>
        <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder="Email" />
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