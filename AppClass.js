import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

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
