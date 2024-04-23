import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Separator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal:20,
  },
  line: {
    flex: 1,
    height: 0.5,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Separator;
