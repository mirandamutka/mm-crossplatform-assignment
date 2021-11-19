import React, { FC } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import Input from "../Components/Input";

interface IProduct {
  name?: string;
  type?: string;
  price?: string;
}

export const ProductScreen: FC<IProduct> = (props) => {
  return (
    <View style={styles.container}>
       <StatusBar />
      <Text style={styles.header}>{props.name ? 'Edit Product' : 'Create New Product'}</Text>
      <View style={styles.inputContainer}>
        <Input label={props.name ? props.name : 'Name'} />
        <Input label={props.type ? props.type : 'Type'} />
        <Input label={props.price ? props.price : 'Price'} />
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  inputContainer: {
    height: 300,
    justifyContent: "space-around",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
