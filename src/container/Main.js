import { View } from 'react-native';
import React, { Component } from 'react';
import { Image, Button, Text, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



function Main(props) {
  return (

    <ScrollView style={{ backgroundColor: "white" }}>

      <View>
        <Image source={require("../images/bottombanner.png")} style={{ width: "100%", height: 50, }} />
        <Text style={{ fontSize: 48, color: '#cd0404', fontWeight: 'bold', width: "100%", textAlign: 'center', }}>BLOOD BANK</Text>
        <Image source={require("../images/banner.png")} style={{ width: "80%", height: 120,alignSelf:"center"}} />
        <Image source={require("../images/topBanner.png")} style={{ width: "100%", height: 50, marginBottom: 15 }} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.cardBox} onPress={() => props.navigation.navigate("Search")}>
          <Image source={require("../images/FindDonor.png")} style={styles.cardImg} />
          <Text style={styles.cardText}>FIND A DONOR</Text>
        </TouchableOpacity >

        <TouchableOpacity
          style={styles.cardBox}
          onPress={() => props.navigation.navigate("BloodBanks")}>
          <Image source={require("../images/BloodBankImg.png")} style={styles.cardImg} />
          <Text style={styles.cardText}>BLODD BANK</Text>
        </TouchableOpacity>
      </View>


      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.cardBox}
          onPress={() => props.navigation.navigate("Profile")}>
          <Image source={require("../images/ProfileIcon.png")} style={styles.cardImg} />
          <Text style={styles.cardText}>DONOR PROFILE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardBox}
          onPress={() => props.navigation.navigate("BecomeADonor")}>
          <Image source={require("../images/BeADonor.png")} style={styles.cardImg} />
          <Text style={styles.cardText}>BECOME A DONOR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Main;


const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  cardImg: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  cardText: {
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "red"
  }
})