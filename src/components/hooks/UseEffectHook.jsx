import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native"

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setData(data + 1);
    }, [count]);

    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 20, marginVertical: 20 }}>Count : {count}</Text>
        <Child data={data}/>

        <Button title="Increment" onPress={handleIncrement} />
    </View>
}

const Child = ({data}) => {

    return <View>
        <Text style={{ textAlign: 'center', fontSize: 20, marginBottom:20 }}>Child Count : {data}</Text>
    </View>
}

export default UseEffectHook;