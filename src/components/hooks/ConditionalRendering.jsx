import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ConditionalRendering = () => {
    const [isDark, setIsDark] = useState(true);
    const [isHide, setIsHide] = useState(true);

    const backgroundColor = isDark ? 'black' : 'white';

    return <View style={[styles.container, { backgroundColor: `${backgroundColor}` }]}>
        <Button title={`${isHide ? "View child" : "Hide child"}`} onPress={() => {
            setIsHide(!isHide)
        }} />

        {
            !isHide ? <Child value={{ isDark, isHide }} /> : null
        }

        <Button title={`${isDark ? "Toggle Light Mode" : "Toggle Dark Mode"}`} onPress={() => `${isDark ? setIsDark(false) : setIsDark(true)}`} />
    </View>
}

const Child = ({ value }) => {
    const textColor = value.isDark ? 'white' : 'black';

    let interval = setInterval(() => {
        console.log("calling interval");
    }, 1000)

    useEffect(() => {
        console.log("component get mount or dependency item state update");
        
        return ()=>{
            clearInterval(interval);
            console.log("component get unmount or cleanup function");
        }
    }, []) 

    return <View>
        <Text style={[styles.text, { color: `${textColor}` }]}>Lorem, ipsum dolor sit amet consectetur!</Text>
        <Text style={[styles.text, { color: `${textColor}` }]}>Lorem, ipsum dolor sit amet consectetur!</Text>
        <Text style={[styles.text, { color: `${textColor}` }]}>Lorem, ipsum dolor sit amet consectetur!</Text>
        <Text style={[styles.text, { color: `${textColor}` }]}>Lorem, ipsum dolor sit amet consectetur!</Text>
        <Text style={[styles.text, { color: `${textColor}` }]}>Lorem, ipsum dolor sit amet consectetur!</Text>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    },
    text: {
        textAlign: 'center', marginVertical: 10, fontSize: 18
    }
})


export default ConditionalRendering;