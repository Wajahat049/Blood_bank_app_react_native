import * as React from 'react';
import { View, Text, ScrollView,Linking } from 'react-native';
import { SearchBar, Icon,Avatar } from "react-native-elements";
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"

function Search() {
  const [search, setsearch] = useState("");
  const [newinfo, setnewinfo] = useState([]);

  global.DATA = []
  global.NEWDATA = []

  useEffect(()=>{

    if(search!=""){
  database().ref('/donors').once("value").then(snapshot => {
    var result = snapshot.val();
    var lst1 = Object.values(result)
    for (var i = 0; i < lst1.length; i++) {
      global.DATA.push(lst1[i].donor)
    }
    
    for (var i = 0; i < global.DATA.length; i++) {
      console.log("BLOOD",global.DATA[i].blood)
      var blood =  global.DATA[i].blood
      if (blood.includes(search)) {
        console.log(global.DATA[i])
        global.NEWDATA.push(global.DATA[i])
      }
    }
    setnewinfo(global.NEWDATA)
  })}
},[search])


  return (
    <ScrollView >
      <SearchBar
      containerStyle={{backgroundColor:"#ff3333",marginBottom:15}}
      leftIconContainerStyle={{backgroundColor:"#ff3333"}}
      inputStyle={{backgroundColor:"#ff3333"}}
      rightIconContainerStyle={{backgroundColor:"#ff3333"}}
      inputContainerStyle={{backgroundColor:"#ff3333"}}
      searchIcon={{size:30,color:"white"}}
      round={true}
        lightTheme={true}
      style={{ color: "white",backgroundColor:"#ff3333" }}
        placeholder="Type any blood group here like AB+"
        placeholderTextColor={"white"}
        onChangeText={(search) => setsearch(search)}
        value={search} />
      {
        newinfo.map((element) => {
          return (
            <View key={element.email} style={{
              margin: 10,padding:15,  borderColor: "gray", borderWidth: 1,borderRadius:10,shadowColor: "black",shadowOffset: {width: 0,height: 2,},
              shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 10,backgroundColor:"white",}}>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Avatar  size={55}  overlayContainerStyle={{backgroundColor: 'red'}} rounded title={element.blood} />
              <View style={{marginRight:"15%",width:"40%"}}>
                <Text style={{ fontWeight: "bold",marginTop:3,fontSize:20}}> {(element.name)} </Text>
                <Text style={{marginLeft:10,fontSize:18 }}>{(element.address)}</Text>
                </View>
                <View style={{flexDirection:"row",width:"20%",alignContent:"flex-end",marginRight:15}}>
                    <MaterialIcon onPress={()=>Linking.openURL(`tel:${element.phone}`)} style={{marginTop:5,marginLeft:12}} size={30} color="red" name='phone'/>
                    <MaterialIcon onPress={()=>Linking.openURL(`mailto:${element.email}`)} style={{marginTop:5,marginLeft:12}} size={30} color="red" name='email'/>
                    
                    </View>
              </View>
            </View>)

        })
      }
    </ScrollView>
  )

}

export default Search;