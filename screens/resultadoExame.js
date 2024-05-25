import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function ResultadoExame() {
    // Definindo os dados dos exames
    const data = [
        { id: '1', title: '79 mg/dL' },
        { id: '2', title: '80 mg/dL' },
        { id: '3', title: '75 mg/dL' }
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
                    <Text style={styles.itemData}>12 de abril 2024</Text>
                </View>
            ))}
        
        </View>
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
        color: '#000000',
        alignItems: 'flex-end',
        textAlign: 'right'
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
