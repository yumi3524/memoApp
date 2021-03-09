import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleBtn from './src/components/CircleBtn';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleBtn>+</CircleBtn>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E6F0',
  },
});
