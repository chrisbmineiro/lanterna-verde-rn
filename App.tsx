import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import simbolOn from "./assets/symbol-on.png";
import simbolOff from "./assets/symbol-off.png";

export default function App() {
  const [isActive, setisActive] = useState(false);

  function handlePress() {
    setisActive(prevValue => !prevValue);
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={isActive ? simbolOn : simbolOff} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  containerOff: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  }
});
