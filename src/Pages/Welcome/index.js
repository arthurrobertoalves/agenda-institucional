import { Text, View, Image } from 'react-native';

import imgCalendar from './assets/calendar.png';
import SignUpButton from './components/SignUpButton';
import SignInButton from './components/SignInButton';
import { styles } from './style';



export default function Welcome() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Organize suas tarefas e compromissos com facilidade
      </Text>
      <Image source={imgCalendar} style={styles.image} />
      <View style={styles.button}>
        <SignUpButton />
        <SignInButton />
      </View>
    </View>
  );
}
