import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';

export default function CircleBtn(props) {
  const { children, style } = props;
  return (
    <View style={[styles.circleBtn, style]}>
      <Text style={styles.circleBtnLabel}>{ children }</Text>
    </View>
  );
}

CircleBtn.prototype = {
  children: string.isRequired,
  style: shape(),
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
