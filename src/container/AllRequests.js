import { Image, Text, View,useWindowDimensions } from 'react-native';
import * as React from 'react';
import { useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from "@react-native-firebase/database";
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';


const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );
  

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
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
  id= "admin"
  const d = new Date();
  console.log("date",`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`)
  database().ref(`/requests/${id}`).push().set({  name:"admin relative", gender:"female", email:"adminrelative@gmail.com", phone:123455678, address:"cxkaxlhxzx dfdf", blood:"B-",date:`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}` })

},[])


  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Recieved Requests' },
    { key: 'second', title: 'My Requests' },
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
