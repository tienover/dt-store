import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Nam = [
  { id: '1', name: 'Tất Cả', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_ejKteZLuLC4xRDVi_XCg6iUql7cVbONXw&s' },
  { id: '2', name: 'Áo Khoác ', image: 'https://product.hstatic.net/1000335273/product/z5907020942715_d43bb9359455f5ab991dcefb153af31e_1baea9f74bf84e90a27603abe2019b93.jpg' },
  { id: '3', name: 'Áo Len', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLebOqZcKP5USKpkLT8ZalKJX1TKhHmqTXcg&s' },
  { id: '4', name: 'Áo Po Lo', image: 'https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/_/3/_3m_apv221135_1__11.jpg' },
  { id: '5', name: 'Áo So Mi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqsNSN-iuxkLVxjLkcUMiJc5t23R1DNfsAw&s' },
  { id: '6', name: 'Áo Thun', image: 'https://vulcano.sgp1.digitaloceanspaces.com/media/15404/ao-thun-1001-vulcano01.WEBP' },
];

const Quan = [
  { id: '1', name: 'Quần Jogger', image: 'https://down-vn.img.susercontent.com/file/vn-11134202-7r98o-lq1oxjk9s8c792' },
  { id: '2', name: 'Quần Tây', image: 'https://www.nazafu.com/images/thumbs/2018/06/quan-tay-den-1124-206.jpg' },
  { id: '3', name: 'Quần Kaki', image: 'https://4menshop.com/images/thumbs/2020/12/quan-kaki-lung-soc-qk007-15766.jpg' },
  { id: '4', name: 'Quần Short', image: 'https://360.com.vn/wp-content/uploads/2024/04/QSKTK504-8.jpg' },
  { id: '5', name: 'Quần Short', image: 'https://360.com.vn/wp-content/uploads/2024/04/QSKTK504-8.jpg' },
  { id: '6', name: 'Quần Short', image: 'https://360.com.vn/wp-content/uploads/2024/04/QSKTK504-8.jpg' },
 
];
const Nu = [
  { id: '1', name: 'Tất Cả', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_ejKteZLuLC4xRDVi_XCg6iUql7cVbONXw&s' },
  { id: '2', name: 'Áo Khoác ', image: 'https://product.hstatic.net/1000335273/product/z5907020942715_d43bb9359455f5ab991dcefb153af31e_1baea9f74bf84e90a27603abe2019b93.jpg' },
  { id: '3', name: 'Áo Len', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLebOqZcKP5USKpkLT8ZalKJX1TKhHmqTXcg&s' },
  { id: '4', name: 'Áo Po Lo', image: 'https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/_/3/_3m_apv221135_1__11.jpg' },
  { id: '5', name: 'Áo So Mi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqsNSN-iuxkLVxjLkcUMiJc5t23R1DNfsAw&s' },
  { id: '6', name: 'Áo Thun', image: 'https://vulcano.sgp1.digitaloceanspaces.com/media/15404/ao-thun-1001-vulcano01.WEBP' },
];
const DoDoi = [
  { id: '1', name: 'Tất Cả', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_ejKteZLuLC4xRDVi_XCg6iUql7cVbONXw&s' },
  { id: '2', name: 'Áo Khoác ', image: 'https://product.hstatic.net/1000335273/product/z5907020942715_d43bb9359455f5ab991dcefb153af31e_1baea9f74bf84e90a27603abe2019b93.jpg' },
  { id: '3', name: 'Áo Len', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLebOqZcKP5USKpkLT8ZalKJX1TKhHmqTXcg&s' },
  { id: '4', name: 'Áo Po Lo', image: 'https://owen.cdn.vccloud.vn/media/catalog/product/cache/d52d7e242fac6dae82288d9a793c0676/_/3/_3m_apv221135_1__11.jpg' },
  { id: '5', name: 'Áo So Mi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqsNSN-iuxkLVxjLkcUMiJc5t23R1DNfsAw&s' },
  { id: '6', name: 'Áo Thun', image: 'https://vulcano.sgp1.digitaloceanspaces.com/media/15404/ao-thun-1001-vulcano01.WEBP' },
];

const Danhmuc = () => {
  const navigation = useNavigation();
  const [blink, setBlink] = useState("Nam");
  const [clothing, setClothing] = useState("Áo");
  const [products, setProducts] = useState(Nam);

  const handleBlinkPress = (category) => {
    setBlink(category);
    if (category === 'Nam') {
      setClothing('Áo');
      setProducts(Nam); 
    }
     else if (category === "Nữ") {
      setClothing("Áo");
      setProducts(Nu);

     } 
     else if(category === "Đồ Đôi"){
      setClothing("Áo");
      setProducts(DoDoi);

     }
     else {
      setClothing(null); 
      setProducts([]); 
    }
  };

  const handleClothingPress = (clothes) => {
    setClothing(clothes);
    setProducts(clothes === 'Áo' ? Nam : Quan);
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
          {['Áo', 'Quần'].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleClothingPress(item)}
              style={[
                styles.clothingItem,
                clothing === item && styles.selectedClothingItem,
              ]}
            >
              <Text
                style={[
                  styles.clothesText,
                  clothing === item && styles.selectedClothesText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={products}
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
    paddingHorizontal: 18,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 25,
  },
  blinkButton: {
    backgroundColor: 'white', 
  },
  blinkText: {
    color: 'red',
    borderBottomWidth: 1,
    borderBottomColor: 'red', 

  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    // paddingHorizontal: 10,
  },
  clothes: {
    width: '17%',
    backgroundColor: '#e0e0e0',
    paddingLeft: 3,
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
  clothingItem: {
    color: '#000',
  },
  clothesText: {
    fontSize: 20,
    marginVertical: 3,
  },
  selectedClothingItem: {
    backgroundColor: 'white',
  },
selectedClothesText: {
    color: 'red',
    borderLeftWidth: 1,
    borderLeftColor: "red",
  },
});

export default Danhmuc;
