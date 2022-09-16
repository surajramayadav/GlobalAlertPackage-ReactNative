/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalModal, { showAlert } from './src/components/customAlert';
import Home from './src/screens/home';
import Profile from './src/screens/profile';
import GlobalModalAlert from './src/components/customAlert';

const Stack = createNativeStackNavigator();

const App = () => {

  const [visible, setvisible] = useState(false)
  const [cancelBtn, setcancelBtn] = useState(false)
  return (
    <>
      <GlobalModalAlert />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // <SafeAreaView >
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    //     <View>
    //       <GlobalModal
    //         visible={visible}
    //         modalClick={() => { }}
    //         hideModal={() => setvisible(false)}
    //         clearModal={() => { }}
    //         modalTitle={"this.state.modalTitle"}
    //         modalMsg={"this.state.modelMsg"}
    //         modalCancel={cancelBtn}
    //         modalCancelClick={() => { }}
    //       />
    //     </View>
    //     <TouchableOpacity onPress={() => showAlert({
    //       modalTitle: "modal", message: "hii", modalOk: () => { console.log("hide") }, modalCancel: () => { }
    //     })}>
    //       <Text>Alert</Text>
    //     </TouchableOpacity>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
