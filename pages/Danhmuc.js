import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const PRODUCTS = [
  { id: '1', name: 'Tất Cả', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_ejKteZLuLC4xRDVi_XCg6iUql7cVbONXw&s' },
  { id: '2', name: 'Áo Khoác ', image: 'https://product.hstatic.net/1000335273/product/z5907020942715_d43bb9359455f5ab991dcefb153af31e_1baea9f74bf84e90a27603abe2019b93.jpg' },
  { id: '3', name: 'Áo Len', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLebOqZcKP5USKpkLT8ZalKJX1TKhHmqTXcg&s' },
  { id: '4', name: 'Áo Po Lo', image: 'https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/_/3/_3m_apv221135_1__11.jpg' },
  { id: '5', name: 'Áo So Mi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqsNSN-iuxkLVxjLkcUMiJc5t23R1DNfsAw&s' },
  { id: '6', name: 'Áo Thun', image: 'https://vulcano.sgp1.digitaloceanspaces.com/media/15404/ao-thun-1001-vulcano01.WEBP' },
];

const Danhmuc = () => {
  const navigation = useNavigation();
  const [blink, setBlink] = useState(null);

  const handleBlinkPress = (category) => {
    setBlink(category);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <TouchableOpacity>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Danh Mục</Text>
        <AntDesign name="shoppingcart" size={32} color="black" />
      </View>

      <View style={styles.list}>
        {['Nam', 'Nữ', 'Đồ Đôi'].map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => handleBlinkPress(category)}
            style={[
              styles.categoryButton,
              blink === category && styles.blinkButton,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                blink === category && styles.blinkText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.clothes}>
          <Text style={styles.clothesText}>Áo</Text>
          <Text style={styles.clothesText}>Quần</Text>
        </View>
        <FlatList
          data={PRODUCTS}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.productList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'yellow',
    height: 80,
    width: '100%',
    paddingLeft: 100,
    paddingTop: 20,
  },
  list: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 20,
  },
  blinkButton: {
    backgroundColor: '#e0e0e0', 
    borderRadius: 5,
  },
  blinkText: {
    color: 'red',
    borderBottomWidth: 1,
    borderBottomColor: 'red', 
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  clothes: {
    width: '15%',
    backgroundColor: '#fff8dc',
  },
  clothesText: {
    fontSize: 20,
    marginVertical: 10,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  productImage: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
    marginTop: 5,
  },
  productList: {
    paddingHorizontal: 10,
  },
});

export default Danhmuc;
