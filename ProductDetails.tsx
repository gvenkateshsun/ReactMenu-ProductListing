import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button
} from "react-native";

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.image}
          ></Image>
          <Text>{product.title}</Text>
        </View>
        <View>
          <Text>{product.description}</Text>
          <Text>{product.price}</Text>
        </View>
      </ScrollView>
      <View>
        <Button title="Add to cart"></Button>
        <Button title="Check out"></Button>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  image: {
    height: 240,
    resizeMode: "cover"
  },
  addCart: {
    marginBottom: 20
  }
});
