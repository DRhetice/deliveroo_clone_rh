import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeatureRow = ({ id, title, description }) => {
const [restaurants, setRestaurants] = useState([])

useEffect(() => {
  sanityClient.fetch(`
  *[_type=="featured" && _id == $id ] {
    ...,
    restaurant[]->{
      ...,
      dishes[]->,
      type->{
        name
      }
    },
  }[0] `,{id}).then(data =>{
    setRestaurants(data?.restaurant)
  })
 
}, [id]);
//console.log(restaurants)

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title} </Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description} </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards..... */}
        {restaurants?.map(rest =>(
          <RestaurantCard
          key={rest._id}
          id={rest._id}
         imgUrl={rest.image}
          title={rest.name}
          rating={rest.rating}
          genre={rest.type?.name}
          address={rest.address}
          short_description={rest.short_description}
          dishes={rest.dishes}
          long={rest.long}
          lat={rest.lat}
        />
        ))}
        
       
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
