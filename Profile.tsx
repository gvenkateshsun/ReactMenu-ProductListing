import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state: any) => {
    return state.userLoginState.value;
  });
  console.log(userInfo);
  return (
    <View>
      <Text>Welcome {userInfo}</Text>
    </View>
  );
};

export default Profile;
