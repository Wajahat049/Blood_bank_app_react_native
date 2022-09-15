import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SearchBar, Icon } from "react-native-elements";
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";

function Search() {
  const [search, setsearch] = useState("");
  const [newinfo, setnewinfo] = useState([]);

  global.DATA = []
  global.NEWDATA = []

  database().ref('/donors').once("value").then(snapshot => {
    var result = snapshot.val();
    var lst1 = Object.values(result)
    for (var i = 0; i < lst1.length; i++) {
      global.DATA.push(lst1[i].donor)
    }
    // setinfo(global.DATA)
    for (var i = 0; i < global.DATA.length; i++) {
      if (search == global.DATA[i].blood) {
        console.log(global.DATA[i])
        global.NEWDATA.push(global.DATA[i])
      }
    }
    setnewinfo(global.NEWDATA)
    // console.log("scslc",setnewinfo)


  })

  return (
    <ScrollView >
      <SearchBar style={{ backgroundColor: "red", color: "white" }}
        placeholder="Type any blood group here like AB+"
        onChangeText={(search) => setsearch(search)}
        value={search} />
      {
        newinfo.map((element) => {
          return (
            <View key={Math.random() * (100 - 1) + 1} style={{ margin: 10, padding: 10, flex: 1, backgroundColor: "red" }}>
              <Text style={{ color: "white", fontSize: 20 }}>NAME:    {JSON.stringify(element.name)}</Text>
              <Text style={{ color: "white", fontSize: 20 }}>PHONE:   {JSON.stringify(element.phone)}</Text>
              <Text style={{ color: "white", fontSize: 20 }}>BLOOD:   {JSON.stringify(element.blood)}</Text>
              <Text style={{ color: "white", fontSize: 20 }}>HEALTH:  {JSON.stringify(element.health)}</Text>
              <Text style={{ color: "white", fontSize: 20 }}>ADDRESS: {JSON.stringify(element.address)}</Text>
              <Text style={{ color: "white", fontSize: 20 }}>EMAIL:   {JSON.stringify(element.email)}</Text>
            </View>)

        })
      }
    </ScrollView>
  )

}

export default Search;