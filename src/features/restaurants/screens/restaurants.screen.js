import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { theme } from "../../../infrastructure/theme";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 45%;
  left: 45%;
`;
const RestaurantsScreen = ({ navigation }) => {
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {restaurantContext.isLoading && (
        <LoadingContainer>
          <ActivityIndicator size={theme.sizes[3]} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
