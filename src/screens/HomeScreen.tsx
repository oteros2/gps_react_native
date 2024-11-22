import { Button, Text, View } from 'react-native'
import React from 'react'
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Ir al mapa"
          onPress={() => navigation.navigate('gps')}
        />
      </View>
    );
  };
  
  export default HomeScreen;