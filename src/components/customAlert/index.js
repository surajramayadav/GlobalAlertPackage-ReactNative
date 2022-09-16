import React, { Component } from "react";

import {
    StyleSheet,
    // Customizable Area Start
    Text,
    View,
    FlatList,
    ScrollView,
    Platform,
    TouchableOpacity,
    Image,
    ImageBackground,
    Alert,
    ActivityIndicator,
    Modal,
    Dimensions,
    // Customizable Area End
} from "react-native";
import customAlertManager from "./customAlertManager";
// Customizable Area Start


export function showAlert(...args) {
    const ref = customAlertManager.getDefault();
    if (!!ref) {
        ref.showAlert(...args);
    }
}

export function closeAlert() {
    const ref = customAlertManager.getDefault();
    if (!!ref) {
        ref.closeAlert();
    }
}



export default class GlobalModalAlert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false, modalTitle: null, message: null, modalOk: () => { },
            modalCancel: () => { },

        };
    }

    componentDidMount() {
        customAlertManager.register(this);

    }

    componentWillUnmount() {
        customAlertManager.unregister(this);

    }

    showAlert = ({
        visible, modalTitle, message, modalOk, modalCancel } = {}) => {
        this.setState({
            visible, modalTitle, message, modalOk, modalCancel
        }, () => this.setState({ visible: true }));
    }

    closeAlert = () => {
        this.setState({ visible: false })
    }
    render() {
        const { visible, modalTitle, message, modalOk, modalCancel } = this.state
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => closeAlert()
                }
            >
                <View style={[styles.centeredView, { flex: 1 }]}>
                    <View style={styles.modalView}>

                        <View style={{}}>
                            <Text style={[styles.modalTitle,]}>{modalTitle}</Text>
                            <Text style={[styles.modalMsg,]}>{message}</Text>


                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    modalOk()
                                    closeAlert()
                                }}
                            >
                                <Text style={[styles.textStyle,]}>Ok</Text>
                            </TouchableOpacity>

                            {modalCancel && <TouchableOpacity
                                style={[styles.button1,
                                styles.buttonClose1,
                                { backgroundColor: "#296A94" }]}
                                onPress={() => {
                                    modalCancel()
                                    closeAlert()
                                }}
                            >
                                <Text style={[styles.textStyle,]}>Cancel</Text>
                            </TouchableOpacity>}


                        </View>
                    </View>
                </View>
            </Modal>
            // </View>

        )
    }
}


// export default function GlobalModal({ visible, hideModal, isEliteUser, modalClick, clearModal, modalTitle, modalMsg, modalCancel, modalCancelClick }) {
//     const message = typeof modalMsg == 'string' ? modalMsg : JSON.stringify(modalMsg)
//     return (
//         // <View style={styles.centeredView}>
//         <Modal
//             animationType="fade"
//             transparent={true}
//             visible={visible}
//             onRequestClose={() => hideModal()
//             }
//         >
//             <View style={[styles.centeredView, { flex: 1 }]}>
//                 <View style={styles.modalView}>

//                     <View style={{}}>
//                         <Text style={[styles.modalTitle,]}>{modalTitle}</Text>
//                         <Text style={[styles.modalMsg,]}>{message}</Text>


//                         <TouchableOpacity
//                             style={[styles.button, styles.buttonClose]}
//                             onPress={() => {
//                                 modalClick()
//                                 hideModal()
//                                 clearModal()
//                             }}
//                         >
//                             <Text style={[styles.textStyle,]}>Ok</Text>
//                         </TouchableOpacity>

//                         {modalCancel && <TouchableOpacity
//                             style={[styles.button1,
//                             styles.buttonClose1,
//                             { backgroundColor: "#296A94" }]}
//                             onPress={() => {
//                                 modalCancelClick()
//                                 hideModal()
//                             }}
//                         >
//                             <Text style={[styles.textStyle,]}>Cancel</Text>
//                         </TouchableOpacity>}


//                     </View>
//                 </View>
//             </View>
//         </Modal>
//         // </View>

//     )
// }


// Customizable Area Start
const styles = StyleSheet.create({
    toastModalOverride: {
        height: Platform.OS === 'ios' ? 180 : 240,
        paddingHorizontal: 25,
        // top: 60,
        borderRadius: 15,
        // elevation: 10,
        position: "absolute",
    },
    modalBox: {
        // height: "100%",
        justifyContent: "center",
    },
    modalBtnWrap: {
        marginTop: 20,
    },
    modalTitle: {
        fontSize: 16,
        color: '#296A94',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalMsg: {
        marginTop: 15,
        fontSize: 12,
        textAlign: 'center'
    },

    button: {
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    button1: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: "#rgba(147, 213, 208, 1)",
        alignSelf: "center",
        width: 160,
        marginBottom: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    txtEliteColor: { color: 'rgba(24, 75, 123, 1)' },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 2,

    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        width: 280,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonClose1: {
        backgroundColor: "black",
        width: 160,
        alignSelf: "center",
    },
});
// Customizable Area End