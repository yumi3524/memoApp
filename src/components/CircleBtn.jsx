import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleBtn(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleBtn, style]} onPress={onPress}>
      <Feather name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

CircleBtn.prototype = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleBtn.defaultProps = {
  style: null,
  onPress: null,
};
const styles = StyleSheet.create({
  circleBtn: {
    backgroundColor: '#C39BBF',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 8,
  },

  circleBtnLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
});
