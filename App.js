import React, { setState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';


import avatar from './src/images/avatar.png';
import zap from './src/images/zap.png';


export default function App() {
  const messageButton = () =>
    Alert.alert(
      "Mensagem",
      "Essa é a mensagem!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
    <>
      <View style={styles.container}>
        <Image
          source={avatar}
          style={styles.avatar} />
        <Text style={styles.name}>Ana Manuella Ribeiro</Text>

        <View style={styles.contactBox}>
          <Image
            source={zap}
            style={styles.whatsapp} />
          <Text style={styles.phone}>+55 27 9876-5432</Text>
        </View>
        <View style={styles.button}>
          <Button
            color='#841584'
            title={"Message"}
            onPress={messageButton}
          />
        </View>
        <StatusBar style="auto" />
      </View>



    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 75,
    marginHorizontal: 16,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    lineHeight: 32,
    padding: 10,
  },
  contactBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E7E7E7',
  },
  whatsapp: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  phone: {
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 24,
    color: '#333333',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 32,
  }

});
