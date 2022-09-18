import { Image, Text, View } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from "@react-native-firebase/database";



function Profile(props) {
  const [Info, setInfo] = useState("")

  useEffect(() => {

    const getuserDonor = async () => {
      const jsonValue = await AsyncStorage.getItem('@DONOR');
      global.userDonor = JSON.parse(jsonValue)
      console.log("jsonValue", global.userDonor)

    }
    getuserDonor()

    database().ref("/donors/" + global.userDonor.email.split("@")[0]).once('value').then(snapshot => {
      setInfo(snapshot.val())
      console.log("Profile Info", snapshot.val())
    });

  }, [])


  if (Info == null || Info.email == null) {
    return (
      <View style={{ backgroundColor: 'red', width: "100%" }}>
        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15, padding: 10 }}>
          please become a donor first
        </Text>
      </View>)
  }
  else {

    return (

      <View style={{ backgroundColor: 'red' }}>
        <Image source={require("../images/background.png")} style={{ width: "100%", height: 200, }} />
        <Image source={require("../images/ProfileIcon.png")} style={{ width: "60%", height: 200, marginLeft: 70, }} />
        <View style={{ backgroundColor: 'red' }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Name : {Info.name}</Text>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Blood : {Info.blood}</Text>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Health Condition : {Info.health}</Text>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Email : {Info.email}</Text>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Contact : {Info.phone}</Text>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Gender : {Info.gender}</Text>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Address : {Info.address}</Text>
        </View>
      </View>
    );
  };
}

export default Profile
