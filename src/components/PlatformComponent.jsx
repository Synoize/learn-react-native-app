import { Platform, Text, View } from "react-native"

const PlatformComponent = () => {
    return <View>
        {
            Platform.OS === "android" ? <Text style={{fontSize: 20}}>This is {Platform.OS} Device</Text> : <Text>This is {Platform.OS} Device</Text>
        }
    </View>
}

export default PlatformComponent;