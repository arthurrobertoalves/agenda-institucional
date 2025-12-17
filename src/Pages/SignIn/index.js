import { View, Text, ActivityIndicator, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { styles } from './style';
import FormLogin from './components/FormLogin';
import LeftButton from './components/LeftButton';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation()

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
          <Text style={styles.title}>Bem-vindo de Volta! efetue login com sua conta</Text>
          <View style={styles.overlay}>
            <Text style={styles.text} >Login</Text>
            <Text style={styles.text2}>Não possui uma conta? <Text style={{ color: '#65BC7C' }} onPress={() => { navigation.navigate('SignUp') }}>Cadastre-se</Text></Text>
            <FormLogin />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
