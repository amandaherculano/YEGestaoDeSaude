        <Tab.Screen
          name='ResultadosIndividualExames'
          component={ResultadosIndividualExames}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Text style={styles.headerTitle}>Glicemia</Text>
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
                <Text style={[styles.tabText,{ color: focused ? '#FFFFFF' : '#000000', marginRight: 20  }]}>Medicamentos</Text>
                <Text style={[styles.tabText,{ color: focused ? '#FFFFFF' : '#000000', marginRight: 20}]}>Aferições</Text>
                <Text style={[styles.tabText,{ color: focused ? '#FFFFFF' : '#000000' }]}>Exames</Text>
              </View>
            )
          })}
        />