import { useEffect, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const DataTable = () => {
    const API = "http://192.168.189.29:3000";

    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getUsersData();
    }, [])

    const getUsersData = async () => {
        try {
            const response = await fetch(`${API}/users`);
            const data = await response.json();

            console.log(data);

            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${API}/users/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();

            if (response.ok) {
                console.log("deleted user : ", data);
                getUsersData();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateUser = async () => {
        try {
            const response = await fetch(`${API}/users/${editUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editUser),
            });

            const data = await response.json();

            console.log("updated data : ", data);

            if (response.ok) {
                setModalVisible(false);
                getUsersData()
            }
        } catch (error) {
            console.log(error);

        }
    }

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.tableRow}>
                <View>
                    <Text style={styles.tableBodyText}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.tableBodyText}>{item.email}</Text>
                </View>
                <View style={styles.actionButtonContainer}>
                    <TouchableOpacity onPress={() => { handleOpenModal(item) }}>
                        <Text style={[{ backgroundColor: 'blue' }, styles.actionButton]}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { deleteUser(item.id) }}>
                        <Text style={[{ backgroundColor: 'red' }, styles.actionButton]}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const handleOpenModal = (user) => {
        setEditUser(user);
        setModalVisible(true);
    }

    return <View style={styles.container}>
        <View style={styles.tableHead}>
            <View>
                <Text style={styles.tableHeadText}>Name</Text>
            </View>
            <View>
                <Text style={styles.tableHeadText}>Email</Text>
            </View>
            <View>
                <Text style={styles.tableHeadText}>Action</Text>
            </View>
        </View>

        <FlatList data={users} renderItem={RenderItem} keyExtractor={(item) => item.id} />

        <Modal visible={modalVisible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.inputContainer}>
                        <View style={{ gap: 10 }}>
                            <Text style={{ fontSize: 16 }}>Name</Text>
                            <TextInput style={styles.textInput} value={editUser?.name} onChangeText={(prevValue) => {
                                setEditUser((prev) => ({ ...prev, name: prevValue }))
                            }}/>
                        </View>
                        <View style={{ gap: 10 }}>
                            <Text style={{ fontSize: 16 }}>Email</Text>
                            <TextInput style={styles.textInput} value={editUser?.email} onChangeText={(prevValue) => {
                                setEditUser((prev) => ({ ...prev, email: prevValue }))
                            }} />
                        </View>
                    </View>

                    <View style={styles.modalActionButtonContainer}>
                        <TouchableOpacity onPress={() => { handleUpdateUser() }}>
                            <Text style={[{ backgroundColor: 'green' }, styles.modalActionButton]}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                            <Text style={[{ backgroundColor: 'gray' }, styles.modalActionButton]}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10
    },
    tableHead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        paddingBottom: 10
    },
    tableHeadText: {
        fontSize: 18,
        fontWeight: 'semibold'
    },
    tableRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },
    tableBodyText: {
        color: 'gray',
        fontSize: 16,
        paddingVertical: 4
    },
    actionButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        paddingVertical: 10

    },
    actionButton: {
        color: '#fff',
        fontSize: 14,
        paddingVertical: 4,
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
        textAlign: 'center'
    },
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,

    },
    modalActionButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20

    },
    modalActionButton: {
        color: '#fff',
        fontSize: 16,
        paddingVertical: 4,
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
        textAlign: 'center'
    },
    inputContainer: {
        display: 'flex',
        gap: 20,
    },
    textInput: {
        width: '300',
        backgroundColor: 'rgb(220, 220, 220)',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 14,
    }
})

export default DataTable;