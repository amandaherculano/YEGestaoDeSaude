import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Tutorial1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.tutorialContainer}>
        <Text style={styles.title}>Título do Tutorial</Text>
        <Text style={styles.text}>Texto do tutorial...</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PróximaTela')}>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('PróximaTela')}>
        <Text style={styles.skipButtonText}>Pular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#749488',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tutorialContainer: {
    position: 'absolute',
    left: 0,
    top: 552.51,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 150,
    paddingBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  title: {
    fontSize: 24,
    color: '#61A186',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter-Light',
    textAlign: 'center',
    marginBottom: 10,
  },
  skipButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  skipButtonText: {
    fontSize: 16,
    color: 'black',
  },
});