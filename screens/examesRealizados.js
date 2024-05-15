import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '../node_modules/@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function ExamesRealizados() {
    // Definindo os dados dos exames
    const data = [
        { id: '1', title: 'Hemograma' },
        { id: '2', title: 'Colesterol Total' },
        { id: '3', title: 'Glicose' }
    ];

    const navigation = useNavigation();
    // Calculando a altura total dos itens
    const totalHeight = data.length * ITEM_HEIGHT;

    return (
        <View style={
            {height: '100%'}
        }>

        <View style={[styles.container, { height: totalHeight }]}>
            {data.map((item, index) => (
                <View key={item.id} style={[styles.itemContainer, index === data.length - 1 && styles.lastItem]}>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <Text style={styles.itemData}>12 de abril 2025</Text>
                    <TouchableOpacity 
                        style={{
                            position: 'relative',
                            alignSelf: 'center',
                            width: 70,
                            height: 70,
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            textAlign: 'right'
                        }}
                        onPress={() => {
                            navigation.navigate('resultadosIndividualExame');
                        }}
                    >   
                    <Text style={{ color: '#000', fontSize: 23 }}>{'>'}</Text>
                </TouchableOpacity>
                   
                </View>
            ))}
        
        </View>
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
                    // Adicione a ação do botão aqui
                }}
            >
                <Text style={{ color: '#fff', fontSize: 50, alignItems: 'center'}}>+</Text>
            </TouchableOpacity>
        </View>
        
    );
}


// Altura de cada item
const ITEM_HEIGHT = 50;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        margin:10,
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
    }
});
