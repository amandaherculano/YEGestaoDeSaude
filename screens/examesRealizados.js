import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Image, ScrollView } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';


export default function ExamesRealizados({ navigation } ) {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraOpen, setCameraOpen] = useState(false); // Adicione esta linha


    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const [image, setImage] = useState(null);

    const { GoogleGenerativeAI } = require("@google/generative-ai");
    // const fs = require("fs");
    
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI("AIzaSyDiw97dJnUMnmqLZOHNx3QYIWx1ka6kzg0");
    const [itens, setItens] = useState([]);
    const funcall = async (imageUri) => {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        const prompt = "List per line NAME Exam result number and parameters, analise per line if the result is in range and if is write OK after the paramters";

        // Lendo o arquivo da imagem
        const image = await FileSystem.readAsStringAsync(imageUri, { encoding: FileSystem.EncodingType.Base64 });

        const imageUpload = {
            inlineData: {
                data: image,
                mimeType: "image/jpeg",
            },
        };
        
        const result = await model.generateContent([prompt, imageUpload]);
        console.log(result.response.text());

        let linhas = result.response.text().split('\n');
        let itens = linhas.map((linha, index) => {
        let [title, ...rest] = linha.split(' ');
        let result = title;
        let parameters = rest.join(' ');
        return {
            id: String(index),
            title,
            result,
            parameters
        };
});
console.log(itens);
setItens(itens);

    }
    

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            funcall(result.assets[0].uri); // Chama a função funcall passando a URI da imagem
        }
    };
    
    const [modalVisible, setModalVisible] = useState(false);
    // Definindo os dados dos exames
    // const data = [
    //     iten in itens
    // ];

    // Calculando a altura total dos itens
    const totalHeight = itens.length * ITEM_HEIGHT;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>{'←'}</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Exames Realizados</Text>
            <Image source={require('../assets/logo-verde4.png')} style={styles.logo} />
        </View>

        <View style={
            { height: '100%' }
        }>

            <View style={[styles.containerItens, { height: totalHeight }]}>
                {itens.map((item, index) => (
                    <View key={item.id} style={[styles.itemContainer, index === itens.length - 1 && styles.lastItem]}>
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
                    top: 250,
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
                            {setModalVisible(false);
                                setCameraOpen(false)}
                        }} />
                        <Button title="Importar Documento" onPress={() => {
                            DocumentPicker.getDocumentAsync().then((result) => {
                                console.log(result);
                                if (result.type === 'success' && result.uri) {
                                    funcall(result.uri); // Chama a função funcall passando a URI do documento
                                } else {
                                    console.error('Erro: URI do documento é nulo');
                                }
                            });
                            // TODO - Implementar a importação de documentos
                         }} />
                        <Button title="Câmera" onPress={async () => { 
                            if (permission === null) {
                                requestPermission();
                            } else if (permission === false) {
                                alert('Sem permissão para acessar a câmera');
                            } else {
                                let result = await ImagePicker.launchCameraAsync({
                                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                    allowsEditing: true,
                                    aspect: [4, 3],
                                    quality: 1,
                                });

                                if (!result.canceled) {
                                    if (result.uri) {
                                        setImage(result.assets[0].uri);
                                        funcall(result.assets[0].uri);
                                    } else {
                                        console.error('Erro: URI da imagem é nulo');
                                    }
                                }
                        }}} />
                        <Button title="Fechar" onPress={() => 
                            {setModalVisible(false);
                            setCameraOpen(false)}} />
                    </View>
                </View>
            </Modal>
        </View>
    </ScrollView>

    );
}


// Altura de cada item
const ITEM_HEIGHT = 50;

const stylescamera = StyleSheet.create({

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
