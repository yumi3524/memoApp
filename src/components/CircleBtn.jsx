import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleBtn(props) {
  const { name } = props;
  return (
    <View style={[styles.circleBtn]}>
      <Feather name={name} size={32} color="white" />
    </View>
  );
}

CircleBtn.prototype = {
  name: string.isRequired,
};

CircleBtn.defaultProps = {
  style: null,
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
