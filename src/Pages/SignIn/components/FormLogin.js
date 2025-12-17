import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import imgApple from '../assets/apple.png';
import imgGoogle from '../assets/search (1).png';

const InputLogin = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);



    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function Login() {
        try {

            //COLOQUE A API
            const response = await fetch('COLOCAR A API AQUI', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: senha,
                }),
            });

            if (response.ok) {
                navigation.navigate('Home');
            } else {
                alert('Email ou senha inválidos');
            }
        } catch (error) {
            alert('Erro de conexão com o servidor');
        }
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="E-mail institucional"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />


            <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 10, marginBottom: 24 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, }}>
                    <Checkbox
                        value={checked}
                        onValueChange={setChecked}
                        color={checked ? '#65BC7C' : undefined}
                    />
                    <Text style={{ fontFamily: 'RedHatDisplay' }}>Lembre-me</Text>
                </View>
                <View>
                    <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </View>
            </View>


            <TouchableOpacity style={styles.button} onPress={() => Login()}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={{ fontFamily: 'RedHatDisplay', color: '#aaa', textAlign: 'center', margin: 10 }}>Ou continue com </Text>

            <View style={styles.buttonLogin}>
                <TouchableOpacity style={styles.buttonApple} >
                    <Image source={imgApple} style={styles.imgButtonApple} />
                    <Text style={styles.textButtonApple}>Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonGoogle}>
                    <Image source={imgGoogle} style={styles.imgButtonGoogle} />
                    <Text >Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 12
    },
    input: {
        backgroundColor: '#eee',
        borderRadius: 9999,
        paddingVertical: 18,
        paddingHorizontal: 11,
        fontSize: 16,
        marginHorizontal: 4
    },
    button: {
        backgroundColor: '#65BC7C',
        padding: 18,
        borderRadius: 9999,
        marginHorizontal: 4
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'RedHatDisplay',
        textAlign: 'center'
    },
    forgotPassword: {
        color: '#65BC7C',
        fontFamily: 'RedHatDisplay'
    },
    buttonApple: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#000',
        paddingVertical: 14,
        borderRadius: 9999,
    },
    imgButtonApple: {
        width: 28,
        height: 28,
    },
    textButtonApple: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonGoogle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#fff',
        paddingVertical: 14,
        borderRadius: 9999,
        borderWidth: 1,
        borderColor: '#ddd',
    },

    imgButtonGoogle: {
        width: 28,
        height: 28,
    },

    buttonLogin: {
        flexDirection: 'row',
        gap: 2,
        marginHorizontal: 4
    },

});

export default InputLogin;
