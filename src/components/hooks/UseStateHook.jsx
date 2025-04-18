import { useState } from "react";
import { Button, Text, View } from "react-native"

const UseStateHook = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    
    const handleDecrement = () => {
        setCount(count - 1);
    }

    return <View style={{flex:1, }}>
        <Text style={{textAlign: 'center' ,fontSize:20}}>Count : {count}</Text>

        <View style={{flex:1, flexDirection:'row', justifyContent: 'space-around',alignItems: 'center', marginVertical: 20 }}>
            <Button title="Decrement" onPress={handleDecrement}/>
            <Button title="Increment" onPress={handleIncrement}/>
        </View>
    </View>
}

export default UseStateHook;