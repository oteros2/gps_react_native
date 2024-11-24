import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import React, { useEffect, useState} from 'react';
import { StyleSheet, View, Text, PermissionsAndroid, TouchableOpacity } from 'react-native';

// Función para solicitar permisos de ubicación
const requestLocationPermission = async (): Promise<boolean> => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    console.error('Error requesting location permission:', err);
    return false;
  }
};

const Coord: React.FC = () => {
  //estado para almacenar las coordenadas obtenidas
  const [location, setLocation] = useState<GeolocationResponse | null>(null);

  // Función para obtener la ubicación
  const getLocation = async (): Promise<void> => {
    //solicitud de permisos para acceder a la ubicación
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('Position:', position);
          setLocation(position);
        },
        (error) => {
          console.error('Error getting location:', error.code, error.message);
          setLocation(null);
        },
        { enableHighAccuracy: false, timeout: 1500, maximumAge: 10000 }
      );
    }
  };

  //Obtiene las coordenadas cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      getLocation();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Ubicación actual</Text>
      <Text style={styles.postion}>Latitud: {location?.coords.latitude ?? 'No disponible'}</Text>
      <Text style={styles.postion}>Longitud: {location?.coords.longitude ?? 'No disponible'}</Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  postion: {
    fontSize: 25
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Coord;
