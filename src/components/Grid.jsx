import { StyleSheet, Text, View } from "react-native"

const Grid = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>Alice Leo New</Text>
            </View>
            <View>
                <Text style={styles.name}>Alice Leo New</Text>
            </View>
            <View>
                <Text style={styles.name}>Alice Leo New</Text>
            </View>
            <View>
                <Text style={styles.name}>Alice Leo New</Text>
            </View>
            <View>
                <Text style={styles.name}>Alice Leo New</Text>
            </View>
            <View>
                <Text style={styles.name}>Alice Leo New</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center'
    },
    name:{
        fontSize:20,
        padding:20,
        backgroundColor: 'blue',
        textAlign: 'center',
        color: 'white',
        marginHorizontal: 5,
        marginVertical: 5
    }
})

export default Grid;