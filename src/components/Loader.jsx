import { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);
    return <View style={styles.container}>
        {
            showLoader ? <View style={{ alignItems: 'center' }}>
                <ActivityIndicator size={80} color={"red"} />
                <Text>Loading...</Text>
            </View> : <Text style={{ fontSize: 20 }}>Hello, Welcome to this App</Text>
        }
        <Button title={"Click here"} onPress={() => setShowLoader(!showLoader)} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    }
})

export default Loader;