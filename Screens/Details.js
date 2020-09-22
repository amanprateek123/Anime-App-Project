import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Detail = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the Detail screen</Text>
      <Button title="Go to About Screen" onPress={()=> navigation.navigate('Setting')} />
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

export default Detail;