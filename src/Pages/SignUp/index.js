import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { styles } from './style';
import FormSignUp from './components/FormSignUp';
import LeftButton from './components/LeftButton';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {

    const navigation = useNavigation();
    function redirect() {
        navigation.navigate('SignIn');
    }


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>
                    <LeftButton />
                    <Text style={styles.title}>Crie sua Conta</Text>
                    <View style={styles.overlay}>
                        <Text style={styles.text}>Cadastro</Text>
                        <Text style={styles.text2}>
                            Já possui uma conta? <Text style={{ color: '#65BC7C' }} onPress={() => redirect()}>Faça login</Text>
                        </Text>
                        <FormSignUp />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}