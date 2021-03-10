import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { string, func } from 'prop-types';

export default function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btnLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.prototype = {
  label: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: null,
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
