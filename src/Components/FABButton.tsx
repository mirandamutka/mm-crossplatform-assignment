import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

interface IFABButton {
  onPress?: () => void;
}

const FABButton : FC<IFABButton> = (props) => (
  <FAB
    style={styles.fab}
    small
    icon="plus"
    color='white'
    onPress={props.onPress}
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