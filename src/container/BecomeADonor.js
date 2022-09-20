import * as React from 'react';
import {
  View, Text, Button, TextInput, ScrollView, Modal, StyleSheet, TouchableOpacity, Image, Pressable,
  StatusBar
} from 'react-native';
import database from "@react-native-firebase/database";
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
import { ImageBackground } from 'react-native';



function BecomeDonor(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [health, setHealth] = useState("");
  const [address, setAddress] = useState("");
  const [blood, setblood] = useState("");


  const [modalVisible, setModalVisible] = useState(false);
  const [ifDonor, setIfDonor] = useState(false);



  console.log("log",props.logerDonor)

  useEffect(()=>{
    var id;
    const getuserDonor = async () => {
      const jsonValue = await AsyncStorage.getItem('@USER');
      var val = JSON.parse(jsonValue)
      id = val.email.split("@")[0]
      console.log("jsonValue", id)

    }
    getuserDonor().then(()=>{
      database().ref(`/donors/${id}`).once('value').then(snapshot => {
        setIfDonor(snapshot.exists())
        // console.log("Profile Info", snapshot.val())
    })})

  },[])

  const save_data = () => {

    let donor = {
      name, gender, email, phone, address, blood, health
    }

    var emailSplit = email.split("@")[0]
    console.log("email", emailSplit)

    database().ref(`/donors/${emailSplit}`).update({
      name, gender, email, phone, address, blood, health
    })

    const storeData = async (donor) => {
      console.log("donor", donor)
      try {
        const jsonValue = JSON.stringify(donor)
        await AsyncStorage.setItem('@DONOR', jsonValue)
      } catch (e) {
        console.log(e)
      }
    }
    storeData(donor);
    ToastAndroid.show("You are now a donor", ToastAndroid.SHORT)
    props.navigation.navigate("Profile");
  }

  const setBloodType = (blood) => {
    setblood(blood)
    setModalVisible(false)
  }



  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor='red' barStyle="light-content" />
        <View style={styles.header}>
          <Text style={[styles.text_header, { textAlign: "center" }]}>BECOME A DONOR</Text>
        </View>
        <View
          style={styles.footer}
        >
          <ImageBackground source={require("../images/bgBecomeADonor.png")} style={{ width: "100%", }}>
            <ScrollView>

              <Text style={{ fontSize: 18, color: 'red', marginBottom: 10, textAlign: "center" }}> {(ifDonor) ? "You are already a donor. Your donor information will be updated" : ""}</Text>

              <View style={styles.inputStyle}>
                <TextInput value={name} onChangeText={(e) => setName(e)} placeholder="Name" />
              </View>
              <View style={styles.inputStyle}>
                <TextInput value={gender} onChangeText={(e) => setGender(e)} placeholder="Gender" />
              </View>
              <View style={styles.inputStyle}>
                <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder="Email" />
              </View>
              <View style={styles.inputStyle}>
                <TextInput keyboardType={"number-pad"} value={phone} onChangeText={(e) => setPhone(e)} placeholder="Phone Number" />
              </View>
              <View style={styles.inputStyle}>
                <TextInput value={address} onChangeText={(e) => setAddress(e)} placeholder="Address" />
              </View>
              <View style={styles.inputStyle}>
                <TextInput value={health} onChangeText={(e) => setHealth(e)} placeholder="Health" />
              </View>

              <View style={styles.inputStyle}>
                <Button color="red" onPress={() => setModalVisible(!modalVisible)} title={blood == "" ? "Select Blood Type" : blood}></Button>
              </View>

              <View>
                <View style={{ marginTop: 20, width: 150, marginLeft: 5, marginBottom: 20 }}>
                  <Button color="red" style={{ fontSize: 30 }} onPress={() => save_data()} title="Save"></Button>
                </View>
              </View>

              {/* </View> */}

            </ScrollView>
          </ImageBackground>
        </View>
      </View>






      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setBloodType("A+")} style={styles.opacityType}>
                <Image resizeMode='stretch' style={styles.BloodType} source={require("../images/A+.jpeg")} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setBloodType("B+")} style={styles.opacityType}>
                <Image resizeMode='stretch' style={styles.BloodType} source={require("../images/B+.jpeg")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setBloodType("AB+")} style={styles.opacityType}>
                <Image resizeMode='stretch' style={styles.BloodType} source={require("../images/AB+.jpeg")} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setBloodType("O+")} style={styles.opacityType}>
                <Image resizeMode='stretch' style={styles.BloodType} source={require("../images/O+.jpeg")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setBloodType("A-")} style={styles.opacityType}>
                <Image resizeMode='stretch' style={styles.BloodType} source={require("../images/A-.jpeg")} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setBloodType("B-")} style={styles.opacityType}>
                <Image resizeMode='stretch' style={styles.BloodType} source={require("../images/B-.jpeg")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setBloodType("AB-")} style={styles.opacityType}>
                <Image resizeMode='stretch' style={styles.BloodType} source={require("../images/AB-.jpeg")} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setBloodType("O-")} style={styles.opacityType}>
                <Image resizeMode='stretch' style={styles.BloodType} source={require("../images/O-.jpeg")} />
              </TouchableOpacity>
            </View>

            <Pressable
              style={[styles.buttonModal, styles.buttonCloseModal]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 2,
    borderColor: "red",
    width: "95%",
    margin: 5,
    borderRadius: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonCloseModal: {
    backgroundColor: "red",
    marginTop: 20
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  opacityType: {
    width: "33%", margin: 15, borderRadius: 10, borderColor: "red", borderWidth: 1, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  BloodType: {
    height: 50, width: "90%", borderRadius: 10, margin: 5
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    textAlign: "center"
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
    fontSize: 30
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
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  color_textPrivate: {
    color: 'grey'
  }
});

export default BecomeDonor;
