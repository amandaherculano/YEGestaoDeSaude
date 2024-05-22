import React from 'react';
import { Image, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import { ResultadoExame } from '../screens';
import { ExamesRealizados } from '../screens';
import { Tutorial1 } from '../screens';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: true,
  headerRight: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        style={styles.logoVerdeIcon}
        source={require("../assets/logo-verde4.png")}
      />
    </View>
  ),
  tabBarShowLabel: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 100,
    backgroundColor: '#749488', 
  }
};

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName='ExamesRealizados'>

        <Tab.Screen
          name='ExamesRealizados'
          component={ExamesRealizados}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Text style={styles.headerTitle}>Exames Realizados</Text>
            ),
            headerLeft: () => (
              <AntDesign
                name="arrowleft"
                size={24}
                color="black"
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10 }}
              />
            ),
            // tabBarIcon: ({ focused }) => (
            //   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            //     {/* <Image source={require('../assets/icone-exame1@3x.png')} style={{width: 30, height: 30}} /> */}
            //     <FontAwesome6 name="user-doctor" size={24} color="black" />
            //     <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Consultas</Text>
            //     <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Medicamentos</Text>
            //     <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Aferições</Text>
            //     <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000' }]}>Exames</Text>
            //   </View>
            // )
          })}
        />
        
        <Tab.Screen
          name='ResultadoExame'
          component={ResultadoExame}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Text style={styles.headerTitle}>Glicose</Text>
            ),
            headerLeft: () => (
              <AntDesign
                name="arrowleft"
                size={24}
                color="black"
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10 }}
              />
            ),
            tabBarIcon: ({ focused }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <Image source={require('../assets/icone-exame1@3x.png')} style={{width: 30, height: 30}} /> */}
                <FontAwesome6 name="user-doctor" size={24} color="black" />
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Consultas</Text>
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Medicamentos</Text>
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000', marginRight: 20 }]}>Aferições</Text>
                <Text style={[styles.tabText, { color: focused ? '#FFFFFF' : '#000000' }]}>Exames</Text>
              </View>
            )
          })}
        />


        <Tab.Screen
          name = 'Tutorial1'
          component = {Tutorial1}
          options={{ headerShown: false, footerShown: false }}>

          </Tab.Screen>


      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  logoVerdeIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  headerTitle: {
    color: '#749488',
    fontSize: 27,
    fontFamily: 'Inter-SemiBold',
  },
  tabText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  }
};

export default Routes;
