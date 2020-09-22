import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Setting = () => {
  return (
    <View style={styles.center}>
      <Text>Setting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Setting;