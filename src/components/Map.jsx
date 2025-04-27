import { ScrollView, StyleSheet, Text, View } from "react-native";

const Map = () => {
    const data = [
        { id: 1, name: "Raju" },
        { id: 2, name: "Viraj" },
        { id: 3, name: "Charan" },
        { id: 4, name: "Deepak" },
        { id: 5, name: "Ezaj" },
        { id: 6, name: "Firoj" },
        { id: 7, name: "Aman" },
        { id: 8, name: "Bablu" },
        { id: 9, name: "Gaurav" },
        { id: 10, name: "Himanshu" },
        { id: 11, name: "Imran" },
        { id: 12, name: "Jayesh" },
        { id: 13, name: "Karan" },
        { id: 14, name: "Lalit" },
        { id: 15, name: "Manoj" },
        { id: 16, name: "Nitin" },
        { id: 17, name: "Omkar" },
        { id: 18, name: "Piyush" },
        { id: 19, name: "Qadir" },
        { id: 20, name: "Ramesh" },
        { id: 21, name: "Sandeep" },
        { id: 22, name: "Tanmay" },
        { id: 23, name: "Uday" },
        { id: 24, name: "Vikram" },

    ];

    return (
        <View>
            <ScrollView>
                {
                    data.map((value, index) => {
                        return (
                            <View key={index} style={styles.container}>
                                <Text style={styles.name}>{`${index + 1}. ${value.name}`}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    name: {
        backgroundColor: '#f4f4f4',
        padding: 10,
        fontSize: 20,
        textAlign: 'start',
    }
})

export default Map;