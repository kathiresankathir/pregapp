import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kathir</Text>
      <Image  style={styles.image} source={require('./assets/diet.png')}/>
      <Text>Best platform</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAF1DE',
    alignItems: 'center',
  },
  title:{
    marginTop:150,
    fontSize:30,
    fontWeight:"bold",
    color:"#333",
    marginBottom: 40,
  },
  image:{
width:500,
height:500,
marginBottom: 40

  }
});
