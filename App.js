import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./style";

export default function App() {
  const [value, setValue] = useState(0);

  function onPress() {
    setValue(value + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Número de cliques</Text>
      <Text style={styles.text}>{value}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Incrementar valor</Text>
      </TouchableOpacity>
    </View>
  );
}
