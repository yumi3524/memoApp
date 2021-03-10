import React from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleBtn from '../components/CircleBtn';

export default function MemoCreateScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.inpt} />
      </View>
      <CircleBtn name="check" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E6F0',
  },
  inpt: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 32,
    textAlignVertical: 'top',
  },

});
