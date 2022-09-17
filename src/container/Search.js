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
        placeholderTextColor={"white"}
        onChangeText={(search) => setsearch(search)}
        value={search} />
      {
        newinfo.map((element) => {
          return (
            <View key={Math.random() * (100 - 1) + 1} style={{
              margin: 10, padding: 10, flex: 1, backgroundColor: "red", borderColor: "black", borderWidth: 2,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
              <Text style={{ color: "white", fontSize: 18 }}>Name:
                <Text style={{ fontWeight: "bold" }}> {JSON.stringify(element.name)} </Text>
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>Phone No.:
                <Text style={{ fontWeight: "bold" }}>  {JSON.stringify(element.phone)}</Text>
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>Blood Group:
                <Text style={{ fontWeight: "bold" }}> {JSON.stringify(element.blood)}</Text>
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>Health:
                <Text style={{ fontWeight: "bold" }}> {JSON.stringify(element.health)}</Text>
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>Address:
                <Text style={{ fontWeight: "bold" }}> {JSON.stringify(element.address)}</Text>
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>Email:
                <Text style={{ fontWeight: "bold" }}>  {JSON.stringify(element.email)}</Text>
              </Text>
            </View>)

        })
      }
    </ScrollView>
  )

}

export default Search;