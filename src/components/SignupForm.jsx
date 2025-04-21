import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SignupForm = ({navigation, route}) => {
    const data = route.params;
    const defaultUserData = {
        name: '',
        email: '',
        password: '',
    }
    const [user, setUser] = useState(defaultUserData);

    const handleChangeInput = (name, value) => {
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = () => {
        if (!user.name || !user.email || !user.password) {
            alert('All fields are required!');
            return;
        }
        console.warn('Form submitted:', user);
        setUser(defaultUserData);
        navigation.navigate("Home")
    };

    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 20, fontSize: 20 }}>Signup Form</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                value={user.name}
                onChangeText={(val) => handleChangeInput('name', val)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={user.email}
                onChangeText={(val) => handleChangeInput('email', val)}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={user.password}
                onChangeText={(val) => handleChangeInput('password', val)}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleFormSubmit} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        marginBottom: 12,
        borderRadius: 8,
    },
});

export default SignupForm;
