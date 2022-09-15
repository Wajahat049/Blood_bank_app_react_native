import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';


function BloodBanks(props) {



  return (
    <ScrollView style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
        <View>
          <Text style={{ fontSize: 42, color: 'white', fontWeight: 'bold', marginBottom: 5, textAlign: "center" }}>Blood Banks</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "black", width: "100%", margin: 10, height: '12%', backgroundColor: 'white', marginLeft: 3 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Name:     Burhani Blood Bank</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Address: Block F North Nazimabad </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Phone:    (021) 36644490</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "black", width: "100%", margin: 10, height: '12%', backgroundColor: 'white', marginLeft: 3 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Name:     Sahara Blood Bank</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Address: M.A Jinnah Rd, Jamshed Quarters </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Phone:    (021) 36644490</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "black", width: "100%", margin: 10, height: '12%', backgroundColor: 'white', marginLeft: 3 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Name:     NIBD Blood Bank</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Address: National Stadium Colony </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Phone:    (021) 36644490</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "black", width: "100%", margin: 10, height: '12%', backgroundColor: 'white', marginLeft: 3 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Name:     Husaini Blood Bank</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Address: Mahajir Camp, Baldia Town </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Phone:    0333 3998321</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "black", width: "100%", margin: 10, height: '12%', backgroundColor: 'white', marginLeft: 3 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Name:     AKU Hospital Blood Bank</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Address: Aga Khan University Hospital </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Phone:    (021) 34861558</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "black", width: "100%", margin: 10, height: '12%', backgroundColor: 'white', marginLeft: 3 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Name:     Emergency Blood Bank</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Address: Faisal Cantonment, Karachi </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Phone:    0333 2185621</Text>
        </View>

      </View>
    </ScrollView>
  );
}

export default BloodBanks;