import { View } from 'react-native';
import React, { Component } from 'react';
import { Image, Button, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



function Main(props){
    return (

      <View style={{ backgroundColor: 'white' }}>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Search")}>
          <Image  source={require("../images/FindDonor.png")} style={{ width: 100, height: 93, margin: 35, borderColor:'red',borderWidth:2 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("BloodBanks")}>
          <Image source={require("../images/BloodBankImg.png")} style={{ width: 100, height: 95, margin: 35, borderColor:'red',borderWidth:2 }} />
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Profile")}>
          <Image source={require("../images/ProfileIcon.png")} style={{ width: 100, height: 100, margin: 35, borderColor:'red',borderWidth:2 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("BecomeADonor")}>
          <Image source={require("../images/BeADonor.png")} style={{ width: 120, height: 86, margin: 35, borderColor:'red',borderWidth:2 }} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold',backgroundColor: "red", width:360, textAlign:'center', }}>BLOOD BANK</Text>
          <Image source={require("../images/quoteImg.png")} style={{ width: "100%", height: 190,}} />
          <Text style={{height:55, backgroundColor:'red'}}></Text>
        </View>
      </View>
    );
  };

  export default Main;