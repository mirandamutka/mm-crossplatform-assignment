import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListItem : FC = () => {
 return (
  <View style={styles.container}>
        <Text>PropsName</Text>
        <Text>PropsType</Text>
        <Text>PropsPrice</Text>
  </View>
 )
}

export default ListItem

const styles = StyleSheet.create({
 container: {
  justifyContent: 'space-between',
  flexDirection: "row",
  width: '100%',
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,
  backgroundColor: 'lightgray'
},
})
