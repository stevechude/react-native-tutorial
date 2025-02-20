import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useAppwrite } from "@/lib/useAppwrite";
import { getPropertyById } from "@/lib/appwrite";

const Property = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { data: details } = useAppwrite({
    fn: getPropertyById,
    params: {
      id: id!,
    },
  });

  return (
    <View>
      <Text>Property {id}</Text>
    </View>
  );
};

export default Property;
