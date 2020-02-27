import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./style";

export default class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  onPress() {
    const { value } = this.state;
    this.setState({
      value: value + 1
    });
  }

  render() {
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Número de cliques</Text>
        <Text style={styles.text}>{value}</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress()}>
          <Text style={styles.buttonText}>Incrementar valor</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
