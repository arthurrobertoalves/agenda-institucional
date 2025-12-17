import { TouchableOpacity, Text } from 'react-native'
import { StyleSheet } from 'react-native';

export default function SignUpButton() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Cadastre-se gratuitamente</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#65BC7C',
        alignItems: 'center',
        padding: 16,
        borderRadius: 9999,
        marginHorizontal: 14
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'RedHatDisplay'
    }
});