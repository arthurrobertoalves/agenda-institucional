import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

const FormSignUp = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("participante");

    function cadastrar() {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        console.log(nome, email, senha, confirmarSenha, tipoUsuario)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome completo"
                placeholderTextColor="#999"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail institucional"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
            />

            <Text style={styles.tipoLabel}>Eu sou:</Text>
            <View style={styles.tipoContainer}>
                <TouchableOpacity
                    style={[
                        styles.tipoButton,
                        tipoUsuario === 'participante' && styles.tipoButtonSelected
                    ]}
                    onPress={() => setTipoUsuario('participante')}
                >
                    <Text style={[
                        styles.tipoButtonText,
                        tipoUsuario === 'participante' && styles.tipoButtonTextSelected
                    ]}>
                        Participante
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tipoButton,
                        tipoUsuario === 'organizador' && styles.tipoButtonSelected
                    ]}
                    onPress={() => setTipoUsuario('organizador')}
                >
                    <Text style={[
                        styles.tipoButtonText,
                        tipoUsuario === 'organizador' && styles.tipoButtonTextSelected
                    ]}>
                        Organizador
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.termosContainer}>
                <Checkbox
                    value={checked}
                    onValueChange={setChecked}
                    color={checked ? '#65BC7C' : undefined}
                />
                <Text style={styles.termosText}>
                    Eu concordo com os <Text style={styles.termosLink}>Termos de Serviço</Text> e <Text style={styles.termosLink}>Política de Privacidade</Text>
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={cadastrar}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 12,
    },
    input: {
        backgroundColor: '#eee',
        borderRadius: 9999,
        paddingVertical: 16,
        paddingHorizontal: 20,
        fontSize: 16,
        marginHorizontal: 4,
        fontFamily: 'RedHatDisplay',
    },
    tipoLabel: {
        fontFamily: 'RedHatDisplay',
        fontSize: 16,
        marginLeft: 8,
        marginTop: 8,
        color: '#333',
    },
    tipoContainer: {
        flexDirection: 'row',
        marginHorizontal: 4,
        gap: 10,
        marginBottom: 16,
    },
    tipoButton: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 9999,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    tipoButtonSelected: {
        backgroundColor: '#65BC7C',
        borderColor: '#65BC7C',
    },
    tipoButtonText: {
        fontFamily: 'RedHatDisplay',
        fontSize: 16,
        color: '#666',
    },
    tipoButtonTextSelected: {
        color: '#fff',
        fontWeight: '600',
    },
    termosContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal: 4,
        marginBottom: 16,
        gap: 8,
    },
    termosText: {
        fontFamily: 'RedHatDisplay',
        fontSize: 14,
        color: '#666',
        flex: 1,
        lineHeight: 20,
    },
    termosLink: {
        color: '#65BC7C',
        fontWeight: '600',
    },
    button: {
        backgroundColor: '#65BC7C',
        padding: 18,
        borderRadius: 9999,
        marginHorizontal: 4,
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'RedHatDisplay',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default FormSignUp;