import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { showAlert } from '../../components/customAlert'

export default function Home() {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => showAlert({
                modalTitle: "modal", message: "hii", modalOk: () => { console.log("hide") },
            })}>
                <Text>Alert</Text>
            </TouchableOpacity>
        </View>
    )
}