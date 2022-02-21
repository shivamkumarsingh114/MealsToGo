import { useContext } from "react";
import { Text } from "../../components/typography/text.component";
import { Button } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "md-restaurant",
  T1: "md-location",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: theme.colors.brand.primary,
    tabBarInactiveTintColor: theme.colors.ui.secondary,
    headerShown: false,
  };
};

const Tab_1 = () => <Text>This will be Tab 1</Text>;

const Tab_2 = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="T1" component={Tab_1} />
      {<Tab.Screen name="Restaurant" component={RestaurantsNavigator} />}
      <Tab.Screen name="Settings" component={Tab_2} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
