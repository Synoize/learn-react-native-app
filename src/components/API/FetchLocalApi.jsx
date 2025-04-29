import { useState } from "react";
import { Button, Text, View } from "react-native"

const FetchLocalApi = () => {
    const ngrok_api = "https://e6ad-2409-40e5-116b-c808-a8fa-693d-600f-167e.ngrok-free.app/users"; //using ngrok server API
    const api = "http://192.168.211.29:3000/users"; // using IP address of the local server
    const [user, setUser] = useState([]);



    const fetchLocalApi = async () => {
        console.log("loading...");
        setUser([]);
        try {
            const response = await fetch(ngrok_api);
            const data = await response.json();
            console.log(data);

            setUser(data);

        } catch (error) {
            console.log(error);

        }
    }

    useState(() => {
        fetchLocalApi();
    }, [])

    return <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Local API Calling</Text>

        <Button title="Fetch Local API" onPress={fetchLocalApi} />

        {
            user[0] ? (
                <View style={{ marginTop: 10 }}>
                    <Text>{user[0].name}</Text>
                    <Text>{user[0].email}</Text>
                </View>
            ) : null
        }
    </View>
}

export default FetchLocalApi;