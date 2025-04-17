import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={{width: '100%' , backgroundColor: 'lightblue', padding: 20}} >
            <Text style={styles.header}>Learn : React App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        fontWeight: 'semibold',
        fontSize: 20,
        color: 'black'
    }
})

export default Header;