import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInButton = ({ onPress }) => {
    const navigation = useNavigation();
    function redirect() {
        navigation.navigate('SignIn');
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => redirect()}>
            <Text style={styles.text}>Já possuo Login</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffffff',
        borderWidth: 2,
        borderColor: '#65BC7C',
        borderStyle: 'solid',
        alignItems: 'center',
        padding: 16,
        borderRadius: 9999,
        marginHorizontal: 14
    },
    text: {
        color: '#65BC7C',
        fontSize: 16,
        fontFamily: 'RedHatDisplay'
    }


})

export default SignInButton;
