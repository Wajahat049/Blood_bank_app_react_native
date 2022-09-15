import * as React from 'react';
import { View, Text, Button, TextInput, Image, } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import {Picker} from "@react-native-picker/picker";


function SignUp(props) {
  const [blood, setblood] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const save_data=()=>{
    let user={
        name, email , pass , phone, blood
    }
    database().ref(`/users/${user.name}`).update({user});
    props.navigation.navigate("Login");
  }
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
      <View>
        <Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold',backgroundColor: "red", width:360, textAlign:'center', margin:15 }}>SIGNUP</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 5 }}>
        <TextInput value={name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{borderWidth:3,borderColor:"red",width:"80%", margin:5}}>
        <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder="Email"/>
      </View>
      <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 5 }}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>
      <View style={{borderWidth:3,borderColor:"red",width:"80%", margin:5}}>
        <TextInput value={phone} onChangeText={(e)=>setPhone(e)} placeholder="Contact Number"/>
      </View>
      <View  style={{borderWidth:3,borderColor:"red",width:"80%", margin:5}}>
      <Picker
        selectedValue={blood}
        style={{ height: 50, width: 280,}}
        onValueChange={(itemValue) => setblood(itemValue)}
      >
      <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B-" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
      </Picker>
    </View>
      <View style={{margin:10, width:150}}>
      <Button color = "red" onPress={()=>save_data()} title="Signup"></Button>
      </View>
      <View>
      <Image source={require('../images/icon.jpg')} 
      style={{margin:10, height:150, width:200 }}
      />
      </View>
    </View>
  );
}

export default SignUp