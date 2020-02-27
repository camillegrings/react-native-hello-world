import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import styles from "./style";

export default function AppChallenge() {
  const [value, setValue] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#E6E9EF");

  function showAlert() {
    Alert.alert(
      "Atenção",
      "O state será reiniciado no próximo clique",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

  function onPress() {
    const newValue = value + 1;
    if (newValue === 9) {
      setValue(newValue);
      showAlert();
    } else if (newValue === 10) {
      setValue(0);
    } else {
      setValue(newValue);
    }

    const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    setBackgroundColor(randomColor);
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
