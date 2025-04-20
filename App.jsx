import { Button, StatusBar, StyleSheet, Text, View } from "react-native"
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

const Stack = createNativeStackNavigator();

const App = () => {
  // return <WebView source={{ uri: 'https://learncontext.netlify.app/' }} style={{ flex: 1 }} />

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerTitleStyle:{
            color: 'green'
          },
          headerStyle:{
            backgroundColor: 'pink'
          },
          headerShown:true
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle:"Home Screen", headerShown:false}}/>
        <Stack.Screen name="SignupForm" component={SignupForm} options={{headerTitle:"Signup"}}/>
        <Stack.Screen name="HandleForm" component={HandleForm} />
        <Stack.Screen name="Flatlist" component={Flatlist} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Grid" component={Grid} />
        <Stack.Screen name="SectionListApp" component={SectionListApp} />
        <Stack.Screen name="ClassComponent" component={ClassComponent} />
        <Stack.Screen name="UseStateHook" component={UseStateHook} />
        <Stack.Screen name="UseEffectHook" component={UseEffectHook} />
        <Stack.Screen name="ConditionalRendering" component={ConditionalRendering} />
        <Stack.Screen name="Flexbox" component={Flexbox} />
        <Stack.Screen name="Buttons" component={Buttons} />
        <Stack.Screen name="RadioButton" component={RadioButton} />
        <Stack.Screen name="Loader" component={Loader} />
        <Stack.Screen name="ModalView" component={ModalView} />
        <Stack.Screen name="PressableComponent" component={PressableComponent} />
        <Stack.Screen name="PlatformComponent" component={PlatformComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen = ({}) => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text style={{fontSize: 20}}>Home Screen</Text>
      <Button title="Login" onPress={()=> navigation.navigate("SignupForm")}/> 
    </View>
  )
}


export default App;