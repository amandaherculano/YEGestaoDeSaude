import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Modal, Button, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ConsultasScreen({ navigation }) {
  const [consultasEntries, setConsultasEntries] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedConsulta, setSelectedConsulta] = useState(null);
  const [newConsulta, setNewConsulta] = useState({
    consulta: '',
    date: '',
    time: ''
  });


  const handleAddConsulta = () => {
    setConsultasEntries([
      ...consultasEntries,
      { id: Date.now().toString(), ...newConsulta }
    ]);
    setNewConsulta({ consulta: '', date: '', time: '' });
    setModalVisible(false);
  };

  const handleDeleteConsulta = (id) => {
    setConsultasEntries(consultasEntries.filter(entry => entry.id !== id));
    setSelectedConsulta(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => setSelectedConsulta(item)}>
      <Text style={styles.itemText}>{item.consulta}</Text>
      <Ionicons name="chevron-forward" size={20} color="#000" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'←'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Consultas</Text>
        <Image source={require('../assets/logo-verde4.png')} style={styles.logo} />
      </View>

    
      <View style={
                { height: '100%' }
      }>

      <FlatList
        data={consultasEntries}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <TouchableOpacity
                style={{
                    position: 'relative',
                    top: 400,
                    alignSelf: 'center',
                    backgroundColor: '#5E9A81',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => {
                    setModalVisible(true);
                }}
                >
                <Text style={{ color: '#fff', fontSize: 50, alignItems: 'center' }}>+</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Consulta</Text>
            <TextInput
              style={styles.input}
              placeholder="Consulta"
              value={newConsulta.consulta}
              onChangeText={(text) => setNewConsulta({ ...newConsulta, consulta: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Data"
              value={newConsulta.date}
              onChangeText={(text) => setNewConsulta({ ...newConsulta, date: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Hora"
              value={newConsulta.time}
              onChangeText={(text) => setNewConsulta({ ...newConsulta, time: text })}
            />
            <Button title="Adicionar" onPress={handleAddConsulta} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <Modal
        visible={!!selectedConsulta}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSelectedConsulta(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalhes da Consulta</Text>
            {selectedConsulta && (
              <>
                <Text>Consulta: {selectedConsulta.consulta}</Text>
                <Text>Data: {selectedConsulta.date}</Text>
                <Text>Hora: {selectedConsulta.time}</Text>
                <Button title="Excluir" onPress={() => handleDeleteConsulta(selectedConsulta.id)} />
                <Button title="Fechar" onPress={() => setSelectedConsulta(null)} />
              </>
            )}
          </View>
        </View>
      </Modal>
      </View>
    </ScrollView>
  );
}

const ITEM_HEIGHT = 50;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    color: '#61A186',
  },
  headerTitle: {
    color: '#61A186',
    fontSize: 28,
    fontFamily: 'Inter-SemiBold',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 50,
},
  containerItens: {
    paddingHorizontal: 20,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    margin: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: ITEM_HEIGHT,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingHorizontal: 10
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5E9A81'
  },
  itemData: {
    fontSize: 10,
    color: '#6F6F6F',
    alignItems: 'flex-end',
    textAlign: 'right'
},
lastItem: {
    marginBottom: 0 // Adiciona margem inferior apenas ao último item
},
  list: {
    marginHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#61A186',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});
