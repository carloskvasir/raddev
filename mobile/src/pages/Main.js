import { MaterialIcons } from '@expo/vector-icons';
import {
  getCurrentPositionAsync,
  requestPermissionsAsync,
} from 'expo-location';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -16.6123413, longitude: -49.2224156 }}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/28787559?s=460&v=4',
            }}
          />
          <Callout
            onPress={() => {
              // navegação
              navigation.navigate('Profile', { github_user: 'carloskvasir' });
            }}
          >
            <View style={styles.callout}>
              <Text style={styles.devName}>Carlos Lima (Kvasir)</Text>
              <Text style={styles.devBio}>BIO S2</Text>
              <Text style={styles.devTechs}>ReactJs, RN, Node.js</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por Devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words" // caixa alta em cada palavra
          autoCorrect={false}
        />
        <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  },
  searchForm: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    color: '#333',
    paddingHorizontal: 20,
    fontSize: 16,
    // Ios shadows
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    // Android shadows
    elevation: 2,
  },
  loadButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8E4DFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
});

export default Main;
