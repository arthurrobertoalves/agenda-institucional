import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import imgLeftButton from '../assets/LeftButton.png'
import { useNavigation } from '@react-navigation/native';

const LeftButton = ({onPress}) => {
    const navigation = useNavigation()

    function Redirect(){
        navigation.navigate('Welcome')
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => Redirect()}>
            <Image source={imgLeftButton} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:9,
        marginTop:36
    },
    image: {
        width: 48,
        height: 48
    }
});




export default LeftButton;
