import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';

type RootStackParamList = {
  inicio: undefined;
  gps: undefined;  
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" component={HomeScreen} />
        <Stack.Screen name="gps" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


