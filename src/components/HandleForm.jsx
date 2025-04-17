import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const HandleForm = () => {
    const [name, setName] = useState("");
    const HandleForm = (val) => {
        setName(val);
    }
    const handleClear = () => {
        setName('');
    }
    return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    value={name}
                    onChangeText={(val) => HandleForm(val)}
                    placeholder="Enter your name"
                />
                <Text style={{ marginVertical: 10 }}>{name ? `Hello ${name}, How are you?` : "Hello How are you? "}</Text>
                <Button title="Clear" onPress={handleClear} />
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 10
    }
})

export default HandleForm;