import { StatusBar, StyleSheet, View } from "react-native"
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

const App = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <StatusBar
        backgroundColor={"black"}
        barStyle={"dark-content"}
        hidden={false}
        translucent={true}
      />
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
        {/* <RadioButton/> // RadioButton */}
        {/* <Loader/> // Loader : ActivityIndicator */}

        {/* <ModalView/> // Modal or Dialog Box */}

        {/* <PressableComponent/> // Pressable Component */}

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})


export default App