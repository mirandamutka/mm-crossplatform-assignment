import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const FABButton : FC = () => (
  <FAB
    style={styles.fab}
    small
    icon="plus"
    color='white'
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'green'
  },
})

export default FABButton;