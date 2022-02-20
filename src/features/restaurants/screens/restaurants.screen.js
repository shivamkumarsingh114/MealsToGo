import React, { useContext } from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { theme } from "../../../infrastructure/theme";
import { Search } from "../components/search.component";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

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
const RestaurantsScreen = () => {
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
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
