import { useRef } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

const UseRef = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        const inputField = inputRef.current;
        console.log(inputField);
        inputField.focus()
        
    }

    return <View  style={styles.container}>
        <TextInput ref={inputRef} style={styles.textInput}/>
        <Button title="Focus" onPress={focusInput}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20,
        gap:20
    },
    textInput:{
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default UseRef;