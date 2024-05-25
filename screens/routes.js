import React from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; //2
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AfericoesScreen from '../screens/AfericoesScreen';
import ConsultasScreen from '../screens/ConsultasScreen';
import CadastroScreen from '../screens/CadastroScreen';
import SenhaScreen from '../screens/SenhaScreen';
import CalculoIMC from '../screens/CalculoIMC';
import PressaoScreen from '../screens/PressaoScreen';
import GlicemiaScreen from '../screens/GlicemiaScreen';
import { useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import {Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { ResultadoExame } from '../screens';
import { ExamesRealizados } from '../screens';
import { Tutorial1 } from '../screens';

const Stack = createStackNavigator(); //2

const Tab = createBottomTabNavigator();

// const navigation = useNavigation();
// const screenOptions = {
//   headerShown: true,
//   headerRight: () => (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <Image
//         style={styles.logoVerdeIcon}
//         source={require("../assets/logo-verde4.png")}
//       />
//     </View>
//   ),
//   headerLeft: () => (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.backButton}>{'←'}</Text>
//         </TouchableOpacity>
//     </View>
    
//   ),
//   tabBarShowLabel: true,
//   tabBarStyle: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     left: 0,
//     elevation: 0,
//     height: 100,
//     backgroundColor: '#749488', 
//   }
// };

export default function Routes() {
  return (
    <Stack.Navigator /*screenOptions={screenOptions} */initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Afericoes" component={AfericoesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Consultas" component={ConsultasScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Exames" component={ExamesRealizados} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Senha" component={SenhaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CalculoIMC" component={CalculoIMC} options={{ headerShown: false }} />
      <Stack.Screen name="PressaoArterial" component={PressaoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Glicemia" component={GlicemiaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ExamesRealizados" component={ExamesRealizados} options={{ headerShown: false }} />
      <Stack.Screen name="ResultadoExame" component={ResultadoExame} options={{ headerShown: false }} />
      <Stack.Screen name = 'Tutorial1'component = {Tutorial1} options={{ headerShown: false, footerShown: false }}/>      




      {/* <Stack.Screen 
          name='ExamesRealizados'
          component={ExamesRealizados}
          options={() => ({
            headerTitle: () => (
              <Text style={styles.headerTitle}>Exames Realizados</Text>
            ),
            tabBarIcon: ({ focused }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/icone-exame1@3x.png')} style={{width: 30, height: 30}} />
                <FontAwesome6 name="user-doctor" size={24} color="black" />
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Consultas</Text>
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Medicamentos</Text>
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Aferições</Text>
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000' }]}>Exames</Text>
              </View>
            )
          })}
        /> */}
        
        {/* <Stack.Screen
          name='ResultadoExame'
          component={ResultadoExame}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Text style={styles.headerTitle}>Glicose</Text>
            ),
            tabBarIcon: ({ focused }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/icone-exame1@3x.png')} style={{width: 30, height: 30}} />
                <FontAwesome6 name="user-doctor" size={24} color="black" />
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Consultas</Text>
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Medicamentos</Text>
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Aferições</Text>
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000' }]}>Exames</Text>
              </View>
            )
          })}
        />  */}
        
    </Stack.Navigator>
  );
}







// function Routes() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={screenOptions} initialRouteName='ExamesRealizados'>

//         <Stack.Screen
//           name='ExamesRealizados'
//           component={ExamesRealizados}
//           options={({ navigation }) => ({
//             headerTitle: () => (
//               <Text style={styles.headerTitle}>Exames Realizados</Text>
//             ),
//             headerLeft: () => (
//               <AntDesign
//                 name="arrowleft"
//                 size={24}
//                 color="black"
//                 onPress={() => navigation.goBack()}
//                 style={{ marginLeft: 10 }}
//               />
//             ),
//             // tabBarIcon: ({ focused }) => (
//             //   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             //     {/* <Image source={require('../assets/icone-exame1@3x.png')} style={{width: 30, height: 30}} /> */}
//             //     <FontAwesome6 name="user-doctor" size={24} color="black" />
//             //     <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Consultas</Text>
//             //     <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Medicamentos</Text>
//             //     <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Aferições</Text>
//             //     <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000' }]}>Exames</Text>
//             //   </View>
//             // )
//           })}
//         />
        
//         <Stack.Screen
//           name='ResultadoExame'
//           component={ResultadoExame}
//           options={({ navigation }) => ({
//             headerTitle: () => (
//               <Text style={styles.headerTitle}>Glicose</Text>
//             ),
//             headerLeft: () => (
//               <AntDesign
//                 name="arrowleft"
//                 size={24}
//                 color="black"
//                 onPress={() => navigation.goBack()}
//                 style={{ marginLeft: 10 }}
//               />
//             ),
//             tabBarIcon: ({ focused }) => (
//               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                 {/* <Image source={require('../assets/icone-exame1@3x.png')} style={{width: 30, height: 30}} /> */}
//                 <FontAwesome6 name="user-doctor" size={24} color="black" />
//                 <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Consultas</Text>
//                 <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Medicamentos</Text>
//                 <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Aferições</Text>
//                 <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000' }]}>Exames</Text>
//               </View>
//             )
//           })}
//         />


//         <Stack.Screen
//           name = 'Tutorial1'
//           component = {Tutorial1}
//           options={{ headerShown: false, footerShown: false }}>

//           </Stack.Screen>


//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = {
  backButton: {
    fontSize: 24,
    color: '#61A186',
    marginLeft: 10,
  },
  logoVerdeIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  headerTitle: {
    color: '#61A186',
    fontSize: 27,
    fontFamily: 'Inter-SemiBold',
  },
  tabText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  }
};
