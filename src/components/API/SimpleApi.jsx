import { useState } from "react";
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const SimpleApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://dummyjson.com/products?limit=5");
            const data = await response.json();

            setData(data.products);
            setError(null);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    useState(() => {
        fetchApi();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Simple API Calling</Text>
            <Button title="Get" onPress={fetchApi} />

            {loading ? <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} /> : null}
            {error ? <Text style={{ color: 'red', marginTop: 10, textAlign: 'center' }}>{error}</Text> : null}

            {
                data ? (
                    <ScrollView style={{ marginTop: 10 }}>
                        {
                            data.map((item, index) => (
                                <View key={index} style={{ marginVertical: 10, gap: 10 }}>
                                    <Text>{item.title}</Text>
                                    <Image src={item.images[0]} style={styles.image} />
                                    <Text style={{ fontSize: 20, color: 'green' }}>${item.price}</Text>
                                    <Text>{item.description}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>
                ) : setError(null)
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 10
    },

    image: {
        width: 'full',
        height: 200,
        objectFit: 'contain',
        backgroundColor: 'slategray',
        borderRadius: 10,
    }
})

export default SimpleApi;