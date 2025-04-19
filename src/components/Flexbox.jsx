import { StyleSheet, Text, View } from "react-native";

const Flexbox = () => {
    return <View style={styles.container}>
        <Text style={{fontSize:20, textAlign: 'center'}}> Flex Box</Text>
        <View style={[styles.secondContainer, {justifyContent:'center', alignItems: 'center'}]}>
            <Text style={styles.child1}>Hello</Text>
            <Text style={styles.child2}>Hello</Text>
            <Text style={styles.child3}>Hello</Text>
        </View>
        <View style={[styles.secondContainer, {justifyContent: 'flex-end', alignItems: 'center'}]}>
            <Text style={styles.child4}>Hello</Text>
            <Text style={styles.child5}>Hello</Text>
            <Text style={styles.child6}>Hello</Text>
        </View>

        <View style={[styles.secondContainer, {justifyContent:'flex-start', alignItems: 'center'}]}>
            <Text style={styles.child1}>Hello</Text>
            <Text style={styles.child2}>Hello</Text>
            <Text style={styles.child3}>Hello</Text>
        </View>
        <View style={[styles.secondContainer, {justifyContent: 'space-around', alignItems: 'center'}]}>
            <Text style={styles.child4}>Hello</Text>
            <Text style={styles.child5}>Hello</Text>
            <Text style={styles.child6}>Hello</Text>
        </View>

        <View style={[styles.secondContainer, {justifyContent: 'space-between', alignItems: 'center'}]}>
            <Text style={styles.child1}>Hello</Text>
            <Text style={styles.child2}>Hello</Text>
            <Text style={styles.child3}>Hello</Text>
        </View>
        <View style={[styles.secondContainer, {justifyContent: 'space-evenly', alignItems: 'center'}]}>
            <Text style={styles.child4}>Hello</Text>
            <Text style={styles.child5}>Hello</Text>
            <Text style={styles.child6}>Hello</Text>
        </View>

        <View style={[styles.secondContainer, {justifyContent: 'center', alignItems: 'baseline'}]}>
            <Text style={styles.child1}>Hello</Text>
            <Text style={styles.child2}>Hello</Text>
            <Text style={styles.child3}>Hello</Text>
        </View>
        <View style={[styles.secondContainer, {justifyContent: 'center', alignItems: 'stretch'}]}>
            <Text style={styles.child4}>Hello</Text>
            <Text style={styles.child5}>Hello</Text>
            <Text style={styles.child6}>Hello</Text>
        </View>
        <View style={[styles.secondContainer, {justifyContent: 'space-around', alignItems: 'flex-end'}]}>
            <Text style={styles.child4}>Hello</Text>
            <Text style={styles.child5}>Hello</Text>
            <Text style={styles.child6}>Hello</Text>
        </View>
        <View style={[styles.secondContainer, {justifyContent: 'space-between', alignItems: 'flex-start'}]}>
            <Text style={styles.child1}>Hello</Text>
            <Text style={styles.child2}>Hello</Text>
            <Text style={styles.child3}>Hello</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding:10,
        gap:10
    },

    secondContainer: {
        width: '100%',
        flex: 1,
        flexDirection:'row',
        padding: 10,
        backgroundColor: 'black',
        gap:10,
        borderRadius: 10
    },
    child1: {
        backgroundColor: 'orange',
        borderRadius: 10,
        color: "white",
        fontSize:20
    },
    child2: {
        backgroundColor: 'pink',
        borderRadius: 10,
        color: "white",
        fontSize:20
    },
    child3: {
        backgroundColor: 'green',
        borderRadius: 10,
        color: "white",
        fontSize:20
    },

    child4: {
        backgroundColor: 'pink',
        borderRadius: 10,
        color: "white",
        fontSize:20
    },
    child5: {
        backgroundColor: 'red',
        borderRadius: 10,
        color: "white",
        fontSize:20
    },
    child6: {
        backgroundColor: 'blue',
        borderRadius: 10,
        color: "white",
        fontSize:20
    },
})

export default Flexbox;