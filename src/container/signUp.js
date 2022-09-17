import * as React from 'react';
import { View, Text, Button, TextInput, Image, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';


function SignUp(props) {
  const [blood, setblood] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const save_data = () => {
    let user = {
      name, email, pass, phone, blood
    }
    var id = email.split("@")
    database().ref(`/users/${id[0]}`).update({ name, email, pass, phone, blood });
    props.navigation.navigate("Login");
    setName("")
    setEmail("")
    setPass("")
    setPhone("")
    setblood("")

  }


  const setBloodType = (blood) => {
    setblood(blood)
    setModalVisible(false)
  }

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <View style={{ backgroundColor: "red", width: "90%", margin: 20, borderTopLeftRadius: 60, borderBottomRightRadius: 60, padding: 5, marginBottom: 40 }}>
          <Text style={{ fontSize: 45, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>SIGNUP</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 5 }}>
          <TextInput value={name} onChangeText={(e) => setName(e)} placeholder="Name" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 5 }}>
          <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder="Email" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 5 }}>
          <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 5 }}>
          <TextInput value={phone} onChangeText={(e) => setPhone(e)} placeholder="Contact Number" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 5 }}>
          <Button color="red" onPress={() => setModalVisible(!modalVisible)} title={blood == "" ? "Select Blood Type" : blood}></Button>
        </View>
        <View style={{ margin: 10, width: 150 }}>
          <Button color="red" onPress={() => save_data()} title="Signup"></Button>
        </View>
        <View>
          <Image source={require('../images/icon.jpg')}
            style={{ margin: 10, height: 150, width: 200 }}
          />
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
              style={[styles.button, styles.buttonClose]}
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
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
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
  }
});

export default SignUp