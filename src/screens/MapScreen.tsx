import React from 'react'
import Coord from '../components/Coord'
import { StyleSheet, View } from 'react-native';
import Map from '../components/Map';


const MapScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Coord></Coord>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
export default MapScreen;