import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlaces from "./screens/AddPlaces";

import { Colors } from "./constant/colors";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "your fevorite place",
              headerRight: ({ tintColor }) => {
                return (
                  <IconButton
                    icon="add"
                    size={24}
                    color={tintColor}
                    onPress={() => navigation.navigate("AddPlaces")}
                  />
                );
              },
            })}
          />
          <Stack.Screen
            name="AddPlaces"
            component={AddPlaces}
            options={{
              title: "add a new place",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
