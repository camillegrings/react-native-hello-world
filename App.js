import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [number, setNumber] = useState(0);

  function onPress() {
    setNumber(value + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Número de cliques</Text>
      <Text style={styles.text}>{number}</Text>
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
    padding: 100,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "blue",
    marginBottom: 10,
    fontWeight: "bold",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "purple",
    paddingTop: 15,
    marginTop: 50,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
