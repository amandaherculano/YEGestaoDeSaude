import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './routes/components/Title/examesRealizados';
import Main from './routes/components/Main/examesRealizados'


export default function App(){
  return (
    <View style={styles.container}>
      <Title/> 
      <Main/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
