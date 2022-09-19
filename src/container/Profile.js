import { Image, Text, View, StyleSheet, StatusBar, ImageBackground, ScrollView } from 'react-native';
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
      console.log("jsonValue", global.userDonor.email.split("@")[0])

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
          Please become a donor first
        </Text>
      </View>)
  }
  else {
    return (
      <>
        <View style={styles.container}>
          <StatusBar backgroundColor='red' barStyle="light-content" />
          <View style={styles.header}>
            <Image source={require("../images/DonorProfile.png")} style={{ width: "50%", height: 160, marginLeft: 80, }} />
            <Text style={[styles.text_header, { textAlign: "center" }]}> {Info.name} </Text>
          </View>
          <View
            style={styles.footer}
          >
            <ImageBackground source={require("../images/bgBecomeADonor.png")} style={{ width: "100%", height: 380 }}>

              <ScrollView style={{ marginLeft: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <Image source={require("../images/bloodDrop.png")} style={{ width: 25, height: 35, }} />
                  <Text style={{ color: 'black', fontSize: 20, margin: 10, marginLeft: 15, }}>{Info.blood} Group</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Image source={require("../images/phoneIcon.png")} style={{ width: 30, height: 33, }} />
                  <Text style={{ color: 'black', fontSize: 20, margin: 5, marginLeft: 10, marginBottom: 5 }}>{Info.phone}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Image source={require("../images/emailIcon.png")} style={{ width: 32, height: 33, marginTop: 5 }} />
                  <Text style={{ color: 'black', fontSize: 20, margin: 10, marginLeft: 10, }}>{Info.email}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Image source={require("../images/addressIcon.png")} style={{ width: 30, height: 30, marginTop: 5 }} />
                  <Text style={{ color: 'black', fontSize: 20, margin: 10, marginLeft: 10, }}>{Info.address}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Image source={require("../images/genderIcon.jpg")} style={{ width: 30, height: 30, marginTop: 5 }} />
                  <Text style={{ color: 'black', fontSize: 20, margin: 10, marginLeft: 10, }}>{Info.gender}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Image source={require("../images/healthIcon.png")} style={{ width: 32, height: 30, marginTop: 5 }} />
                  <Text style={{ color: 'black', fontSize: 20, margin: 10, marginLeft: 10, }}>{Info.health}</Text>
                </View>

              </ScrollView>
            </ImageBackground>
          </View>
        </View>
      </>

      // <View style={{ backgroundColor: 'red' }}>
      //   <Image source={require("../images/background.png")} style={{ width: "100%", height: 200, }} />
      //   <Image source={require("../images/ProfileIcon.png")} style={{ width: "60%", height: 200, marginLeft: 70, }} />
      //   <View style={{ backgroundColor: 'red' }}>
      //     <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Name : {Info.name}</Text>
      //     <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Blood : {Info.blood}</Text>
      //     <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Health Condition : {Info.health}</Text>
      //     <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Email : {Info.email}</Text>
      //     <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Contact : {Info.phone}</Text>
      //     <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Gender : {Info.gender}</Text>
      //     <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Address : {Info.address}</Text>
      //   </View>
      // </View>


    );
  };
}

export default Profile;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    textAlign: "center",
    marginTop: 170
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5,
  },
  text_footer: {
    color: '#1f1f14',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 20
  },
});
