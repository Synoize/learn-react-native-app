import { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./src/components/Header";
import { extranalStyles } from "./style";
import SignupForm from "./src/components/SignupForm";
import HandleForm from "./src/components/HandleForm";
import Flatlist from "./src/components/Flatlist";
import Map from "./src/components/Map";
import Grid from "./src/components/Grid";
import SectionListApp from "./src/components/SectionList";
import ClassComponent from "./src/components/ClassComponent";
import UseStateHook from "./src/components/hooks/UseStateHook";
import UseEffectHook from "./src/components/hooks/UseEffectHook";
import ConditionalRendering from "./src/components/hooks/ConditionalRendering";
import Flexbox from "./src/components/Flexbox";
import Buttons from "./src/components/buttons/Buttons";
import RadioButton from "./src/components/buttons/RadioButton";
import Loader from "./src/components/Loader";
import ModalView from "./src/components/ModalView";
import PressableComponent from "./src/components/buttons/PressableComponent";
import PlatformComponent from "./src/components/PlatformComponent";
import WebView from "react-native-webview";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SimpleApi from "./src/components/API/SimpleApi";
import FetchApiWithFlatList from "./src/components/API/FetchApiWithFlatList";
import FetchLocalApi from "./src/components/API/FetchLocalApi";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const TopTab = createMaterialTopTabNavigator();

const App = () => {

  // return <WebView source={{ uri: 'https://learncontext.netlify.app/' }} style={{ flex: 1 }} />

  // Stack Navigation
  // return (
  //   <NavigationContainer>
  //     <StatusBar
  //       animated={true}
  //       backgroundColor="#000000"
  //       barStyle="dark-content"
  //       showHideTransition="fade"
  //     />
  //     <Stack.Navigator screenOptions={{
  //       headerTitleStyle: {
  //         color: 'green'
  //       },
  //       headerStyle: {
  //         backgroundColor: 'pink'
  //       },
  //       headerTitle: () => <View style={{ flexDirection: 'row', }}>
  //         <Button title="Login" onPress={() => { }} />
  //       </View>,
  //       headerRight: () => <View>
  //         <Button title="Logout" onPress={() => { }} />
  //       </View>,
  //       headerTintColor: 'white',
  //       headerShown: true
  //     }}>
  //       <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
  //       <Stack.Screen name="NewScreen" component={NewScreen} options={{ headerTitle: "New Screen" }} />
  //       <Stack.Screen name="SignupForm" component={SignupForm} options={{ headerTitle: "Signup" }} />
  //       <Stack.Screen name="OtherScreen" component={OtherScreen} options={{ headerTitle: "Other" }} />
  //       <Stack.Screen name="HandleForm" component={HandleForm} />
  //       <Stack.Screen name="Flatlist" component={Flatlist} />
  //       <Stack.Screen name="Map" component={Map} />
  //       <Stack.Screen name="Grid" component={Grid} />
  //       <Stack.Screen name="SectionListApp" component={SectionListApp} />
  //       <Stack.Screen name="ClassComponent" component={ClassComponent} />
  //       <Stack.Screen name="UseStateHook" component={UseStateHook} />
  //       <Stack.Screen name="UseEffectHook" component={UseEffectHook} />
  //       <Stack.Screen name="ConditionalRendering" component={ConditionalRendering} />
  //       <Stack.Screen name="Flexbox" component={Flexbox} />
  //       <Stack.Screen name="Buttons" component={Buttons} />
  //       <Stack.Screen name="RadioButton" component={RadioButton} />
  //       <Stack.Screen name="Loader" component={Loader} />
  //       <Stack.Screen name="ModalView" component={ModalView} />
  //       <Stack.Screen name="PressableComponent" component={PressableComponent} />
  //       <Stack.Screen name="PlatformComponent" component={PlatformComponent} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )

  // Bottom Tab Navigation
  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator screenOptions={{
  //       headerTitleStyle: {
  //         color: 'green'
  //       },
  //       headerStyle: {
  //         backgroundColor: 'pink'
  //       },
  //       tabBarStyle: { backgroundColor: 'pink' },
  //       tabBarActiveTintColor: 'green',
  //       tabBarInactiveTintColor: 'black',
  //       tabBarLabelStyle: { fontSize: 12 },
  //       tabBarLabelPosition: 'below-icon',
  //     }}>
  //       <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitle: "Home Screen" }} />
  //       <Tab.Screen name="New" component={NewScreen} options={{ headerTitle: "New Screen" }} />
  //       <Tab.Screen name="Signup" component={SignupForm} options={{ headerTitle: "Signup" }} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // )

  // Top Tab Navigation
  // return (
  //   <NavigationContainer>
  //     <TopTab.Navigator screenOptions={{
  //       headerTitleStyle: {
  //         color: 'green'
  //       },
  //       headerStyle: {
  //         backgroundColor: 'pink'
  //       },
  //       tabBarStyle: { backgroundColor: 'pink' },
  //       tabBarActiveTintColor: 'green',
  //       tabBarInactiveTintColor: 'black',
  //       tabBarLabelStyle: { fontSize: 12 },
  //       tabBarLabelPosition: 'below-icon',
  //     }}
  //     >
  //       <TopTab.Screen name="Home" component={HomeScreen} />
  //       <TopTab.Screen name="New" component={NewScreen} />
  //       <TopTab.Screen name="Signup" component={SignupForm} />
  //     </TopTab.Navigator>
  //   </NavigationContainer>
  // )

  // API 
  return <View>
    <StatusBar barStyle="dark-content"/>
    {/* <SimpleApi /> // Simple API Call with Map */}
    {/* <FetchApiWithFlatList/> // Fetch API with FlatList  */}
    <FetchLocalApi/> //Fetch Local Api 
  </View>

}


const HomeScreen = ({ }) => {
  const [name, setName] = useState("");
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20, padding: 20 }}>
      <TextInput style={{ backgroundColor: 'white', width: '100%', borderRadius: 10, padding: 10 }} placeholder="Enter your name" value={name} onChangeText={(val) => setName(val)} />
      <Text style={{ fontSize: 20 }}>Home Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("SignupForm")} />
      <Button title="Go to Other Screen" onPress={() => navigation.navigate("OtherScreen", { name: name, status: "development" })} />
    </View>
  )
}

const NewScreen = ({ }) => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text style={{ fontSize: 20 }}>New Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("SignupForm")} />
      <Button title="Go to Other Screen" onPress={() => navigation.navigate("OtherScreen", { name: "Ios App", status: "ios development" })} />
    </View>
  )
}

const OtherScreen = ({ navigation, route }) => {
  const data = route.params
  console.log("OtherScreen data", data);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text style={{ fontSize: 20 }}>{data.name} : {data.status}</Text>
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
      <Button title="Go to New" onPress={() => navigation.navigate("NewScreen")} />
    </View>
  )
}


export default App;