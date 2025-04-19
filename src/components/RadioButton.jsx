import { useState } from "react"
import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"

const RadioButton = () => {
    const [selected, setSelected] = useState(null);

    const skills = [
        {
            id: 1,
            name: "JavaScript"
        },
        {
            id: 2,
            name: "React"
        },
        {
            id: 3,
            name: "React Native"
        },
        {
            id: 4,
            name: "Python"
        }
    ]
    return <View style={styles.container}>
        <View style={styles.radioContainer}>

            {
                skills.map((skill)=> {
                    return <TouchableOpacity key={skill.id} onPress={()=> {setSelected(skill.name)}}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radioButton}>
                           { selected === skill.name ? <View style={styles.selected}></View> : <View style={styles.unSelected}></View>}
                        </View>
                        <Text style={styles.selectedText}>{skill.name}</Text>
                    </View>
                </TouchableOpacity>
                })
            }
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioContainer:{
        gap:10
    },
    radioWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,

    },
    radioButton: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected:{
        backgroundColor: 'red',
        padding:10,
        borderWidth: 0.5,
        borderRadius: 20,
    },
    unSelected:{
        padding:10,
        borderWidth: 1,
        borderRadius: 20,
    },
    selectedText:{
        fontSize: 20
    }
})

export default RadioButton;