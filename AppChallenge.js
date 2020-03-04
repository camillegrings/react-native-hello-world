import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

const GRAY_BACKGROUND = "#E6E9EF";

export default function AppChallenge() {
  const [value, setValue] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(GRAY_BACKGROUND);

  function showAlert() {
    Alert.alert(
      "Atenção",
      "O state será reiniciado no próximo clique",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

  function onPress() {
    const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    let newBackgroundColor = randomColor;

    const newValue = value + 1;
    if (newValue === 9) {
      setValue(newValue);
      showAlert();
    } else if (newValue === 10) {
      setValue(0);
      newBackgroundColor = GRAY_BACKGROUND;
    } else {
      setValue(newValue);
    }

    setBackgroundColor(newBackgroundColor);
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>Número de cliques</Text>
      <Text style={styles.text}>{value}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Incrementar valor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E9EF",
    width: "100%",
    height: "100%",
    padding: 100
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "blue",
    marginBottom: 10,
    fontWeight: "bold"
  },
  button: {
    width: 220,
    height: 50,
    backgroundColor: "purple",
    paddingTop: 15,
    marginTop: 50
  },
  buttonText: {
    textAlign: "center",
    color: "white"
  }
});
