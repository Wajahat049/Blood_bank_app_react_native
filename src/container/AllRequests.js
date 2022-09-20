import { Image, Text, View,useWindowDimensions, ScrollView } from 'react-native';
import * as React from 'react';
import { useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from "@react-native-firebase/database";
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { SearchBar, Icon,Avatar,Button } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"


const Received = () => {
   
  const [data,setData] = useState([])
  const [keys,setKeys] = useState([])
  const [update,setUpdate] = useState(false)


  useEffect(()=>{
    var id;
    const getuserDonor = async () => {
      const jsonValue = await AsyncStorage.getItem('@USER');
      var val = JSON.parse(jsonValue)
      id = val.email.split("@")[0]
      // console.log("jsonValue", id)
    }
    getuserDonor()
      database().ref("/requests").once('value').then(snapshot => {
    // setInfo(snapshot.val())
    var vals = Object.values(snapshot.val())
    const result = vals.filter(val => val.id != id );
    setData(result)
    // console.log( Object.entries(snapshot.val()))
    setKeys( Object.entries(snapshot.val()))
  });
  },[update])


  const updateStatus=(obj,updatedStatus)=>{
    let key = keys.find(element => element[1].blood==obj.blood && element[1].name==obj.name && element[1].hospital==obj.hospital && element[1].id==obj.id && element[1].status==obj.status );
    console.log("KEY",key)
    database()
  .ref('/requests/'+key[0])
  .update({
    status: updatedStatus,
  })
  .then(() => {console.log('Data updated.') 
  setUpdate(!update)});
  }

  return(
    <ScrollView>
      {
        data.map((element,index) => {
          return (
            <View key={index} style={{
              margin: 10,padding:15,  borderColor: "gray", borderWidth: 1,borderRadius:10,shadowColor: "black",shadowOffset: {width: 0,height: 2,},
              shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 10,backgroundColor:"white",}}>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Avatar  size={55} overlayContainerStyle={{backgroundColor: 'red'}} rounded title={element.blood} />
                <View style={{marginRight:"15%",width:"40%"}}>
                <Text style={{ fontWeight: "bold",marginTop:3,fontSize:20}}> {(element.name)} </Text>
                <Text style={{marginLeft:10,fontSize:17,color:"black",fontStyle:"italic" }}>({element.gender})</Text>
                <Text style={{marginLeft:10,fontSize:17,color:"black" }}>{(element.hospital)}</Text>
                <Text style={{marginLeft:10,fontSize:17,color:"red" }}>{(element.date)}</Text>
                <View style={{flexDirection:"row"}}>
                  {element.status=="Pending"?
                  <View style={{flexDirection:"row"}}>
                <Button  type='clear' titleStyle={{color:"white"}} title={element.status}  containerStyle={{backgroundColor:"#ffcc00",borderColor:"#ffcc00",margin:5}} />
                <Button onPress={()=>updateStatus(element,"Accepted")} type='clear' titleStyle={{color:"green"}} title="Accepted" containerStyle={{margin:5,borderColor:"green",borderWidth:1}} />
                  </View>
            :
            <View style={{flexDirection:"row"}}>
           <Button type='clear' titleStyle={{color:"white"}}  title={element.status}  containerStyle={{backgroundColor:"green",borderColor:"green",margin:5}} />
            <Button onPress={()=>updateStatus(element,"Pending")} type='clear' titleStyle={{color:"#ffcc00"}} title="Pending" containerStyle={{margin:5,borderColor:"#ffcc00",borderWidth:1}} />
                </View>
            
                      }
                </View>
                </View>
                    <View style={{flexDirection:"row",width:"20%",alignContent:"flex-end"}}>
                    <MaterialIcon onPress={()=>Linking.openURL(`tel:${element.phone}`)} style={{marginTop:5,marginLeft:15}} size={30} color="red" name='phone'/>
                    {/* <MaterialIcon onPress={()=>Linking.openURL(`mailto:${element.email}`)} style={{marginTop:5,marginLeft:12}} size={30} color="red" name='email'/> */}
                    </View>
              </View>
              
            </View>)

        })
      }
    </ScrollView>
  )
}
  
  const Mine = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
      var id;
      const getuserDonor = async () => {
        const jsonValue = await AsyncStorage.getItem('@USER');
        var val = JSON.parse(jsonValue)
        id = val.email.split("@")[0]
        // console.log("jsonValue", id)
      }
      getuserDonor()
        database().ref("/requests").once('value').then(snapshot => {
      // setInfo(snapshot.val())
      var vals = Object.values(snapshot.val())
      const result = vals.filter(val => val.id == id );
      setData(result)
      // console.log(result)
    });
    },[])
    return(
      <ScrollView>
        {
          data.map((element,index) => {
            return (
              <View key={index} style={{
                margin: 10,padding:15,  borderColor: "gray", borderWidth: 1,borderRadius:10,shadowColor: "black",shadowOffset: {width: 0,height: 2,},
                shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 10,backgroundColor:"white",}}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Avatar  size={55} overlayContainerStyle={{backgroundColor: 'red'}} rounded title={element.blood} />
                  <View style={{marginRight:"15%",width:"40%"}}>
                  <Text style={{ fontWeight: "bold",marginTop:3,fontSize:20}}> {(element.name)} </Text>
                  <Text style={{marginLeft:10,fontSize:17,color:"black",fontStyle:"italic" }}>({element.gender})</Text>
                  <Text style={{marginLeft:10,fontSize:17,color:"black" }}>{(element.hospital)}</Text>
                  <Text style={{marginLeft:10,fontSize:17,color:"red" }}>{(element.date)}</Text>
                  <View style={{flexDirection:"row"}}>
                    {element.status=="Pending"?
                    <View style={{flexDirection:"row"}}>
                  <Button type='clear' titleStyle={{color:"white"}} title={element.status}  containerStyle={{backgroundColor:"#ffcc00",borderColor:"#ffcc00",margin:5}} />
                  <Button type='clear' titleStyle={{color:"green"}} title="Accepted" containerStyle={{margin:5,borderColor:"green",borderWidth:1}} />
                    </View>
              :
              <View style={{flexDirection:"row"}}>
             <Button type='clear' titleStyle={{color:"white"}}  title={element.status}  containerStyle={{backgroundColor:"green",borderColor:"green",margin:5}} />
              <Button type='clear' titleStyle={{color:"#ffcc00"}} title="Pending" containerStyle={{margin:5,borderColor:"#ffcc00",borderWidth:1}} />
                  </View>
              
                        }
                  </View>
                  </View>
                      <View style={{flexDirection:"row",width:"20%",alignContent:"flex-end"}}>
                      <MaterialIcon onPress={()=>Linking.openURL(`tel:${element.phone}`)} style={{marginTop:5,marginLeft:15}} size={30} color="red" name='phone'/>
                      {/* <MaterialIcon onPress={()=>Linking.openURL(`mailto:${element.email}`)} style={{marginTop:5,marginLeft:12}} size={30} color="red" name='email'/> */}
                      </View>
                </View>
                
              </View>)
  
          })
        }
      </ScrollView>
    )
      }
  

const renderScene = SceneMap({
    received: Received,
    mine: Mine,
  });

function AllRequests(props) {
  const [Info, setInfo] = useState("")
//   const getuserDonor = async () => {
//     const jsonValue = await AsyncStorage.getItem('@LOGERDONOR');
//     global.userDonor = JSON.parse(jsonValue)
//   }
//   getuserDonor()
//   database().ref("/donors/" + global.userDonor + "/donor/").once('value').then(snapshot => {
//     setInfo(snapshot.val())
//     console.log(Info)
//   });

useEffect(()=>{
  // id= "admin"
  // const d = new Date();
  // console.log("date",`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`)
  // database().ref(`/requests`).push().set({id:"aleezah",  name:"aleezah", gender:"female", email:"aleezah@gmail.com",hospital:"XYZ", phone:123455678, address:"cxkaxlhxzx dfdf", blood:"A+",date:`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}` })

},[])


  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'received', title: 'Recieved Requests' },
    { key: 'mine', title: 'My Requests' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => <TabBar {...props} indicatorStyle={{backgroundColor:"white",borderColor:"white"}} tabStyle={{backgroundColor:"red",borderColor:"white"}} activeColor="white" labelStyle={{color:"black",fontSize:15}}  />}
    />
  )
  }

export default AllRequests
