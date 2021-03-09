import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleBtn from '../components/CircleBtn';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021年03月10日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト
          買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト
          買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト
          買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト買い物リスト
        </Text>
      </ScrollView>
      <CircleBtn style={{ top: 160, botto: 'auto' }}>+</CircleBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  memoHeader: {
    backgroundColor: '#C39BBF',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },

  memoTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },

  memoDate: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
  },

  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
