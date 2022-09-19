import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function BloodBanks(props) {



  return (
    <ScrollView style={{ flex: 1, }}>

      <View style={{ backgroundColor: "red", width: "90%", margin: 20, borderTopLeftRadius: 60, borderBottomRightRadius: 60, padding: 5, marginBottom: 40 }}>
        <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold', textAlign: 'center', }}>Blood Banks</Text>
      </View>

      <TouchableOpacity style={[styles.cardBox, {marginTop: -10}]}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.cardImg} source={require("../images/bloodDrop.png")} />
          <Text style={styles.cardHeading}>Blood Bank</Text>
        </View>
        <Text style={[styles.cardText, { marginTop: 10 }]}>Name:    <Text style={{ color: "red" }}>Burhani Blood Bank</Text> </Text>
        <Text style={styles.cardText}>Phone:    <Text style={{ color: "red" }}>(021) 36644490</Text> </Text>
        <Text style={styles.cardText}>Address:  <Text style={{ color: "red" }}>Block F North Nazimabad </Text> </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardBox}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.cardImg} source={require("../images/bloodDrop.png")} />
          <Text style={styles.cardHeading}>Blood Bank</Text>
        </View>
        <Text style={[styles.cardText, { marginTop: 10 }]}>Name:    <Text style={{ color: "red" }}>Emergency Blood Bank</Text> </Text>
        <Text style={styles.cardText}>Phone:    <Text style={{ color: "red" }}>0333 2185621</Text> </Text>
        <Text style={styles.cardText}>Address:  <Text style={{ color: "red" }}>Faisal Cantonment, Karachi </Text> </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardBox}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.cardImg} source={require("../images/bloodDrop.png")} />
          <Text style={styles.cardHeading}>Blood Bank</Text>
        </View>
        <Text style={[styles.cardText, { marginTop: 10 }]}>Name:    <Text style={{ color: "red" }}>AKU Hospital Blood Bank</Text> </Text>
        <Text style={styles.cardText}>Phone:    <Text style={{ color: "red" }}>(021) 34861558</Text> </Text>
        <Text style={styles.cardText}>Address:  <Text style={{ color: "red" }}>Aga Khan University Hospital </Text> </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardBox}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.cardImg} source={require("../images/bloodDrop.png")} />
          <Text style={styles.cardHeading}>Blood Bank</Text>
        </View>
        <Text style={[styles.cardText, { marginTop: 10 }]}>Name:    <Text style={{ color: "red" }}>Hussaini Blood Bank</Text> </Text>
        <Text style={styles.cardText}>Phone:    <Text style={{ color: "red" }}>0333 3998321</Text> </Text>
        <Text style={styles.cardText}>Address:  <Text style={{ color: "red" }}>Mahajir Camp, Baldia Town </Text> </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardBox}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.cardImg} source={require("../images/bloodDrop.png")} />
          <Text style={styles.cardHeading}>Blood Bank</Text>
        </View>
        <Text style={[styles.cardText, { marginTop: 10 }]}>Name:    <Text style={{ color: "red" }}>NIBD Blood Bank</Text> </Text>
        <Text style={styles.cardText}>Phone:    <Text style={{ color: "red" }}>(021) 36644490</Text> </Text>
        <Text style={styles.cardText}>Address:  <Text style={{ color: "red" }}>National Stadium Colony </Text> </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardBox}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.cardImg} source={require("../images/bloodDrop.png")} />
          <Text style={styles.cardHeading}>Blood Bank</Text>
        </View>
        <Text style={[styles.cardText, { marginTop: 10 }]}>Name:    <Text style={{ color: "red" }}>Sahara Blood Bank</Text> </Text>
        <Text style={styles.cardText}>Phone:    <Text style={{ color: "red" }}>(021) 36644490</Text> </Text>
        <Text style={styles.cardText}>Address:  <Text style={{ color: "red" }}>M.A Jinnah Road </Text> </Text>      
      </TouchableOpacity>

    </ScrollView>
  );
}

export default BloodBanks;

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
    padding: 20,
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
    width: 25,
    height: 35,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  },
  cardHeading: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 5,
    color: "#cd0404",
  },
  
})