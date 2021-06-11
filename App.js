import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const BUSSTOP_URL = "https://arrivelah2.busrouter.sg/?id=83139";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBusstopData();
  }, []); //so this hook wil run once when it is initialise since the second parameter is a null array.

  async function loadBusstopData() {
    //using async and await method
    const response = await fetch(BUSSTOP_URL); //fetch data from the URL stated.
    const responseData = await response.json();
    console.log(responseData);

    //useing .then method
    // .then((response) => {
    //   //when fetch is done then come to this step
    //   return response.json(); //convert the response into json format
    // })
    // .then((responseData) => {
    //   console.log(responseData);
    // });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus arrival time:</Text>
      <Text style={styles.time}>
        {loading ? <ActivityIndicator size="large" /> : "Loaded"}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Refresh!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
  },
  time: {
    fontSize: 48,
    margin: 24,
  },
  button: {
    backgroundColor: "green",
    padding: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
