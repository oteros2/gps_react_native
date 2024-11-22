import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  inicio: undefined;
  gps: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Geolocalización</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('gps')}
      >
        <Text style={styles.buttonText}>Ir al mapa</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF', 
    borderRadius: 10,
    alignItems: 'center',
    width: 400,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 40, 
    fontWeight: 'bold', 
  },
});