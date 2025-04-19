import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

const PressableComponent = () => {
    const [text, setText] = useState("Button")
    return <View style={StyleSheet.container}>
        <Pressable
            onPress={
                () => {
                    console.log("Button is Pressed"),
                    setText("Pressed");
                }
            }
            onPressIn={
                () => {
                    console.log("Button Pressed In"),
                    setText("Press In");
                }
            }
            onPressOut={
                () => {
                    console.log("Button Pressed Out"),
                    setText("Press Out");
                }
            }
            onLongPress={
                () => {
                    console.log("Button Long Pressed"),
                    setText("Long Pressed");
                }
            }
        >
            <Text style={styles.button}>{text}</Text>
        </Pressable>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'blue',
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        color: 'white'
    }
})

export default PressableComponent;