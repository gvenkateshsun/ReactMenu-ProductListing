import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image
} from "react-native";
import { Product } from "../../interfaces/Product";
import { getProducts } from "../../utils/firebaseUtil";
import { TouchableOpacity } from "react-native-gesture-handler";
import UseMounted from "../hooks/UseMounted";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const isMounted = UseMounted();
  const navigation = useNavigation();
  const [productData, setProductData] = useState<Product[]>([]);
  useEffect(() => {
    async function init() {
      const products = await getProducts();
      isMounted && setProductData(products);
    }
    init();
  }, []);

  const handlePress = (item: Product) => {
    navigation.navigate("ProductDetails", {
      product: item
    });
  };
  if (!productData || productData.length == 0) {
    <View>
      <Text>Product is loading...</Text>
    </View>;
  } else {
    return (
      <View>
        <FlatList
          data={productData}
          renderItem={itemData => {
            return (
              <TouchableOpacity
                style={styles.grid}
                onPress={() => {
                  handlePress(itemData.item);
                }}
              >
                <Image
                  source={require("../../assets/icon.png")}
                  style={styles.image}
                ></Image>
                <View style={styles.card}>
                  <Text>{itemData.item.title}</Text>
                  <Text>{itemData.item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          numColumns={2}
          keyExtractor={(item, index) => {
            return item.id.toString();
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 50,
    height: "100%"
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover"
  },
  card: {
    flex: 1,
    flexDirection: "column"
  }
});
export default HomeScreen;
