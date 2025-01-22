import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem";
import { View, Text } from "react-native";
import { Colors } from "../../constant/colors";

const PlaceList = ({ places }) => {
  if (!places || places.lenght === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem places={item} />}
    />
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  fallBackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
