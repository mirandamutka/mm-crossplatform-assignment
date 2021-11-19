import React, { FC } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Input from "../Components/Input";

export const NewProductScreen: FC = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Create New Product</Text>
        <Input label={"Name"} />
        <Input label={"Product Type"} />
        <Input label={"Price"} />
        <View style={styles.buttonContainer}>
          <Button
            icon="download"
            mode="contained"
            onPress={() => console.log("Pressed Save")}
            disabled={true}
          >
            Save
          </Button>
          <Button
            icon="cancel"
            mode="contained"
            onPress={() => console.log("Pressed Cancel")}
          >
            Cancel
          </Button>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: 'space-around',
    height: '70%'
  },
  header: {
   fontWeight: 'bold',
   fontSize: 24,
   textAlign: 'center'
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 5
  },
});
