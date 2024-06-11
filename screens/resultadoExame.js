import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Image, ScrollView} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function ResultadoExame({route}) {
    // Definindo os dados dos exames
    const data = [
        { id: '1', title: '79 mg/dL' },
        { id: '2', title: '80 mg/dL' },
        { id: '3', title: '75 mg/dL' }
    ];
    const { itemClicado } = route.params;
    console.log(itemClicado);
    const { itens } = route.params;
    const navigation = useNavigation();
    // Calculando a altura total dos itens
    const totalHeight = itemClicado.length * ITEM_HEIGHT;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>{'←'}</Text>
            </TouchableOpacity>
                <Text style={styles.headerTitle}>{itemClicado.title}</Text>

            
            <Image source={require('../assets/logo-verde4.png')} style={styles.logo} />
            </View>
        </ScrollView>
        // <View style={
        //     {height: '100%'}
        // }>

        // <View style={[styles.container, { height: totalHeight }]}>
        //     {data.map((item, index) => (
        //         <View key={item.id} style={[styles.itemContainer, index === data.length - 1 && styles.lastItem]}>
        //             <Text style={styles.itemText}>{item.title}</Text>
        //             <Text style={styles.itemData}>12 de abril 2024</Text>
        //         </View>
        //     ))}
        
        // </View>
        // </View>
        
    );
}


// Altura de cada item
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
    }
});
