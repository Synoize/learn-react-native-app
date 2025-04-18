import { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

class ClassComponent extends Component {

    constructor() {
        super();
        this.state = {
            count: 1
        };
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleDecrement = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            }
        })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Child count={this.state.count} />

                <Text style={styles.text}> This is parent class Component</Text>
                <Text style={styles.text}>Count : {this.state.count}</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: 20 }}>
                    <Button style={styles.button} title="Decrement" onPress={this.handleDecrement} />
                    
                    <Button style={styles.button} title="Increment" onPress={this.handleIncrement} />
                </View>
            </View>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    This is child class Component
                </Text>
                <Text style={styles.text}>Child Count : {this.props.count - 1}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 20,
        fontSize: 20,
    },
    button: {
        cursor: 'pointer'
    }
})

export default ClassComponent;