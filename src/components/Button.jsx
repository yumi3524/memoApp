import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.btnLabel}>{label}</Text>
    </View>
  );
}

Button.prototype = {
  label: string.isRequired,
};

const styles = StyleSheet.create({

  btnContainer: {
    backgroundColor: '#C39BBF',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },

  btnLabel: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },

});
