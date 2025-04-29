import { useState } from "react";
import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, View } from "react-native"

const FormPostMethodApi = () => {
    const postData = {
        username: null,
        title: null,
        content: null,
    }

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(postData);
    const [post, setPost] = useState(postData);

    const handleChangeInput = (name, value) => {
        setPost(prev => ({ ...prev, [name]: value }));
    };

    const fetchPostMethod = async () => {


        try {
            if (post.username === null) {
                setError({ username: "Username is required!" });
                return;
            } else if (post.title === null) {
                setError({ title: "Title is required!" });
                return;
            }
            else if (post.content === null) {
                setError({ content: "Content is required!" });
                return;
            }

            setLoading(true);
            const api = "http://192.168.211.29:3000/posts"
            const response = await fetch(api, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            const data = await response.json();

            console.log("post : ", data);

            setLoading(false);
            setResponse("Done");
            setPost(postData);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    setTimeout(() => {
        setResponse(null);
    }, 5000)

    return <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Post API Calling</Text>
        {
            loading && <ActivityIndicator color="#0000ff" style={{ marginTop: 20 }} />
        }
        {
            response && <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10, color: 'green' }}>{response}</Text>
        }

        <View style={{ marginTop: 10, gap: 16 }}>
            <View style={{ gap: 4 }}>
                <Text>Username</Text>
                <TextInput style={styles.inputbox} placeholder="Write your name" value={post.username} onChangeText={(value) => handleChangeInput('username', value)} />
                {
                    error.username && <Text style={{ fontSize: 14, marginTop: 4, color: 'red' }}>{error.username}</Text>
                }
            </View>

            <View style={{ gap: 4 }}>
                <Text>Title</Text>
                <TextInput style={styles.inputbox} placeholder="Write your title" value={post.title} onChangeText={(value) => handleChangeInput('title', value)} />
                {
                    error.title && <Text style={{ fontSize: 14, marginTop: 4, color: 'red' }}>{error.title}</Text>
                }
            </View>

            <View style={{ gap: 4 }}>
                <Text>Content</Text>
                <TextInput style={styles.inputbox} placeholder="Write your content" value={post.content} onChangeText={(value) => handleChangeInput('content', value)} />
                {
                    error.content && <Text style={{ fontSize: 14, marginTop: 4, color: 'red' }}>{error.content}</Text>
                }
            </View>

            <Button title="Post" onPress={fetchPostMethod} color="green" />
        </View>

    </View>
}

const styles = StyleSheet.create({
    inputbox: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 6,
        padding: 10,
        borderWidth: 1,
    }
})

export default FormPostMethodApi;