import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import FABButton from "../Components/FABButton";
import ListItem from "../Components/ListItem";

export const ItemsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text>Name</Text>
        <Text>Type</Text>
        <Text>Price</Text>
      </View>
      <View style={styles.listContainer}>
      <ListItem />
      </View>
      <Text style={styles.empyListText}>
        You do not have any products. Press the green button below to add a new
        one.
      </Text>
      <FABButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    justifyContent: 'space-between',
    flexDirection: "row",
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5
  },
  listContainer: {
   flex: 4,
   width: '100%',
   padding: 5
  },
  empyListText: {
   flex: 4,
   width: '75%',
   textAlign: 'center',
   color: 'gray'
  }
});
