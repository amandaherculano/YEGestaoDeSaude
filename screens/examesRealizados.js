import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Image } from "react-native";
import { AntDesign } from '../node_modules/@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as DocumentPicker from 'expo-document-picker';



export default function ExamesRealizados() {

    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraOpen, setCameraOpen] = useState(false); // Adicione esta linha


    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const [modalVisible, setModalVisible] = useState(false);
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
            { height: '100%' }
        }>

            <View style={[styles.container, { height: totalHeight }]}>
                {data.map((item, index) => (
                    <View key={item.id} style={[styles.itemContainer, index === data.length - 1 && styles.lastItem]}>
                        <Text style={styles.itemText}>{item.title}</Text>
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
                                console.log('Clicou no item', item.title);
                                navigation.navigate('ResultadoExame');
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
                    setModalVisible(true);
                }}
            >
                <Text style={{ color: '#fff', fontSize: 50, alignItems: 'center' }}>+</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                        <Button title="Importar Imagem" onPress={() => {
                            pickImage();
                            // TODO - Implementar a importação de imagens
                            { image && <Image source={{ uri: image }} /> }
                        }} />
                        <Button title="Importar Documento" onPress={() => {
                            DocumentPicker.getDocumentAsync(); 
                            // TODO - Implementar a importação de documentos
                         }} />
                        <Button title="Câmera" onPress={() => { 
                            ImagePicker.launchCameraAsync({
                                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                allowsEditing: true,
                                aspect: [4, 3],
                                quality: 1,
                            });
                            // TODO - Implementar a captura de imagens

                         }} />
                        <Button title="Fechar" onPress={() => 
                            {setModalVisible(false);
                            setCameraOpen(false)}} />
                    </View>
                </View>
            </Modal>
        </View>

    );
}


// Altura de cada item
const ITEM_HEIGHT = 50;

const stylescamera = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });

const styles = StyleSheet.create({
    container: {
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
