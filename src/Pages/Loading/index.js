import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/colors';


export default function index() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={44} color={'#65BC7C'} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {

    }

});