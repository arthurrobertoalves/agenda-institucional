import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import RootLayout from './src/routes';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    BBHHegarty: require('./assets/fonts/BBHHegarty-Regular.ttf'),
    RedHatDisplay: require('./assets/fonts/RedHatDisplay-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#65BC7C" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootLayout />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});