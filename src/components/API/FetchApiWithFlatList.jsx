import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-gesture-handler";

const FetchApiWithFlatList = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://dummyjson.com/products?limit=5");
            const data = await response.json();

            setData(data.products);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
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
                        <FlatList data={data} renderItem={({ item }) => <FlatComponent item={item} />}
                            keyExtractor={(item) => item.id}
                        />
                    </ScrollView>
                ) : setError(null)
            }

        </View>
    )
}

const FlatComponent = ({ item }) => {
    return <View style={{ marginVertical: 10, gap: 10 }}>
        <Text>{item.title}</Text>
        <Image src={item.images[0]} style={styles.image} />
        <Text style={{ fontSize: 20, color: 'green' }}>${item.price}</Text>
        <Text>{item.description}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 10
    },

    image: {
        width: 'full',
        height: 400,
        objectFit: 'contain',
        backgroundColor: 'slategray',
        borderRadius: 10,
    }
})

export default FetchApiWithFlatList;