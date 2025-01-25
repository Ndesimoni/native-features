import React, { useState } from "react";
import { Alert, Image, StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constant/colors";
import OutlinedButton from "../UI/OutlinedButton";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { getMapPreview } from "../../utils/Location";

const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState();

  const [locationPemisssionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (locationPemisssionInformation.status == PermissionStatus.UNDETERMINED) {
      const PermissionResponse = await requestPermission();
      return PermissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission not granted",
        "you need to grant location permission to use the app"
      );

      return false;
    }
    return true;
  }

  //todo: this is for getting the map location
  async function getLocationHandler() {
    const hasPermision = await verifyPermissions();

    if (!hasPermision) {
      return;
    }

    const location = await getCurrentPositionAsync();

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {}

  let locationPreview = <Text>no location picked yet</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}> {locationPreview}</View>

      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          <Text>Location User</Text>
        </OutlinedButton>

        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          <Text>Pick on Map</Text>
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
