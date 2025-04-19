import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native"

const ModalView = () => {
    const [showModalView, setShowModalView] = useState(true);
    return <View style={styles.container}>
        <Button title={"click here"} onPress={() => setShowModalView(!showModalView)} />

        <Modal visible={showModalView} transparent={true}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ gap: 20, backgroundColor: '#f4f4f4', padding: 40, borderRadius: 20 }}>
                    <Text style={{ fontSize: 20 }}>You have created a Model</Text>
                    <Button title={"Ok"} onPress={() => setShowModalView(!showModalView)} />
                </View>
            </View>
        </Modal>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {

    }
})

export default ModalView;