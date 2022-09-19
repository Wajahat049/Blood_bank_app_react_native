import {
    Image, Text, View, StyleSheet, StatusBar, ImageBackground, ScrollView, TextInput,
    Button,
    Modal,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from "@react-native-firebase/database";
import { Picker } from '@react-native-picker/picker';



function BloodRequest() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [blood, setblood] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState();

    const [modalVisible, setModalVisible] = useState(false);

    const d = new Date();
    // console.log("date", `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`)

    const setBloodType = (blood) => {
        setblood(blood)
        setModalVisible(false)
    }

    useEffect(() => {
        var id;
        const getuserDonor = async () => {
            const jsonValue = await AsyncStorage.getItem('@USER');
            var val = JSON.parse(jsonValue)
            setEmail(val.email)
            id = val.email.split("@")[0]
            console.log("jsonValue", id)
            setId(id)

        }
        getuserDonor()
    })

    const sendReq = () => {
        database().ref(`/requests`).push().set({ id, name, status: "Pending", gender, email, hospital: selectedLanguage, phone, blood, date: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}` })
        console.log("send request")
    }


    return (
        <>

            <ScrollView style={{ backgroundColor: "white", }}>

                <View style={{ margin: 15, }}>
                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>Hello <Text style={{ color: "red" }}> {id} !</Text> </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>Are you looking for blood? </Text>
                </View>


                <View style={{ borderWidth: 3, borderColor: "red", width: "92%", margin: 10, flexDirection: "row" }}>
                    <Image source={require("../images/proIcon.png")} style={{ width: 30, height: 30, margin: 8 }} />
                    <TextInput value={name} onChangeText={(e) => setName(e)} placeholder="Patient Name" />
                </View>

                <View style={{ borderWidth: 3, borderColor: "red", width: "92%", margin: 10, flexDirection: "row" }}>
                    <Image source={require("../images/phoneIcon.png")} style={{ width: 30, height: 30, margin: 8 }} />
                    <TextInput keyboardType={"number-pad"} value={phone} onChangeText={(e) => setPhone(e)} placeholder="Phone Number" />
                </View>

                <View style={{ borderWidth: 3, borderColor: "red", width: "92%", margin: 10, flexDirection: "row" }}>
                    <Image source={require("../images/genderIcon.jpg")} style={{ width: 27, height: 27, margin: 8 }} />
                    <TextInput value={gender} onChangeText={(e) => setGender(e)} placeholder="Gender" />
                </View>

                <View style={{ margin: 10, flexDirection: "row" }}>
                    <Image source={require("../images/addressIcon.png")} style={{ width: 30, height: 30, margin: 8 }} />
                    <Text style={{ color: "gray", marginTop: 15 }}>Select Hospital</Text>
                </View>
                <Picker
                    dropdownIconColor='red'
                    style={{
                        width: "92%", marginLeft: 15, marginTop: -20
                    }}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Burhani Hospital" value="Burhani Hospital" />
                    <Picker.Item label="Aga Khan University Hospital" value="Aga Khan University Hospital" />
                    <Picker.Item label="Hussaini Hospital" value="Hussaini Hospital" />

                </Picker>

                <View style={{ borderWidth: 3, borderColor: "red", width: "92%", margin: 10, marginTop: 15 }}>
                    <Button color="red" onPress={() => setModalVisible(!modalVisible)} title={blood == "" ? "Select Blood Group" : blood}></Button>
                </View>

                <View style={{ mborderWidth: 3, borderColor: "red", width: "92%", margin: 10, marginTop: 15 }}>
                    <Button color="red" onPress={() => sendReq()} title="Send Request"></Button>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../images/icon.jpg')}
                        style={{ height: 170, width: 170 }}
                    />
                </View>

            </ScrollView>

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

export default BloodRequest;



const styles = StyleSheet.create({
    SelectBar: {
        borderWidth: 3,
        borderColor: "red",
        width: "92%",
        margin: 10,
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
    },

});
