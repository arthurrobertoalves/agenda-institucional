import { View, Text, ScrollView } from 'react-native';
import { styles } from './style';
import { institutions } from '../../../api/institutions';
import InstitutionalCard from './components/InstitutionalCard';

export default function Home() {


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={styles.header}></View>


        <View style={styles.overlay}>

          <InstitutionalCard />


        </View>
      </View>
    </ScrollView>
  );
}
