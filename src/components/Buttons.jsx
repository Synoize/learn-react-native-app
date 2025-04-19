import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"

const Buttons = () => {
    return <View style={styles.container}>
        <Button title={"Button"} />
        <TouchableOpacity onPress={() => { }}>
            <Text style={[styles.buttonText, {backgroundColor: 'red',}]}>Press here</Text>
        </TouchableOpacity>
        <TouchableHighlight onPress={() => { }}>
            <Text style={[styles.buttonText, {backgroundColor: 'blue',}]}>Click here</Text>
        </TouchableHighlight>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:20,
        padding:10
    },
    buttonText:{
        padding:10,
        textAlign: 'center',
        fontSize:18, 
        color: 'white',
    }
})

export default Buttons;