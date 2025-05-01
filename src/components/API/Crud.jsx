import { Button, StyleSheet, Text, View } from "react-native"
import axios from 'axios';

const Crud = () => {
    const API_URI = "http://192.168.142.29:3000/users";

    const getAxiosFetchApi = async () => {
        try {
            const response = await axios.get(API_URI)

            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const postAxiosFetchApi = async() => {
        const data = {
            name: "synoize",
            email: "synoize@gmail.com"
        }

        try {
            const response = await axios.post(API_URI, data);

            console.log(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const deleteAxiosFetchApi = async () => {
        try {
            const response = await axios.delete(`${API_URI}/ca6f`);

            console.log(response.data);  

        } catch (error) {
            console.log(error);
            
        }
    }

    const putAxiosFetchApi = async() => {
        const data = {
            name: 'Alice Loe', 
            email: 'aliceloe@gmail.com'
        }
        try {
            const response = await axios.put(`${API_URI}/a1a1`, data);
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return <View style={styles.container}>
        <Text style={styles.headerText}>Axios Fetch Api</Text>
        <Button title="Get" onPress={getAxiosFetchApi} />
        <Button title="Post" onPress={postAxiosFetchApi} />
        <Button title="Delete" onPress={deleteAxiosFetchApi} />
        <Button title="Put / Patch" onPress={putAxiosFetchApi} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20,
        gap: 20
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Crud;