import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
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
import Buttons from "./src/components/Buttons";
import RadioButton from "./src/components/RadioButton";

const App = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <Header />
      <View style={extranalStyles.box} >
        {/* <HandleForm/> // Handle Form */}
        {/* <SignupForm/> // Signup Form */}
        {/* <Flatlist/> // Flat List */}
        {/* <Map/> // Map View */}
        {/* <Grid/> // Grid View */}
        {/* <SectionListApp/> //Section List */}
        {/* <ClassComponent/> // Class Component */}

        {/* Hooks */}
        {/* <UseStateHook/> // useState hook */}
        {/* <UseEffectHook/> // useEffect hook */}

        {/* <ConditionalRendering/>  //Conditional Rendering */}

        {/* <Flexbox/> // Responsive Design */}

        {/* <Buttons/> // Buttons */}
        <RadioButton/> // RadioButton
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})


export default App