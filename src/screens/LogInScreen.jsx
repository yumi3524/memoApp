import React from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput value="Email Address" style={styles.input} />
        <TextInput value="Password" style={styles.input} />
        <Button label="String" onPress={() => {}} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not resistered?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E6F0',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    backgroundColor: '#fff',
    borderWidth: 1,
    color: '#DDDDDD',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  footerText: {
    fontSize: 16,
    lineHeight: 24,
    marginRight: 8,
  },

  footerLink: {
    fontSize: 16,
    lineHeight: 24,
    color: '#C39BBF',
  },

  footer: {
    flexDirection: 'row',
  },

});
