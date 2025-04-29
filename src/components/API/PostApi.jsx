import { useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native"

const PostApi = ()=> {
    const [loading, setLoading] = useState(false);
    const postData = {
        title: "This is my first post",
        content: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user: "alice loe"
    }

    const fetchPostApi = async () => {
        setLoading(true);
        try {
            const api = 'http://192.168.211.29:3000/posts';
            const response = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            })

            const data = await response.json();
            console.log("Post : ", data);
            
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    return <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Post API Calling</Text>
        <Button title="Post API" onPress={fetchPostApi} />
        {
            loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
        }

    </View>
}

export default PostApi;