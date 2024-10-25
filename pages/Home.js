import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const DATA = [
  { id: '1', name: 'Áo Thun', icon: 'tshirt-crew-outline' },
  { id: '2', name: 'Áo Polo', icon: 'tshirt-v-outline' },
  { id: '3', name: 'Áo Sơ Mi', icon: 'tshirt-crew-outline' },
  { id: '4', name: 'Áo Khoác', icon: 'tshirt-v-outline' },
  { id: '5', name: 'Váy Đầm', icon: 'tshirt-crew' },
  { id: '6', name: 'Chân Váy', icon: 'tshirt-v' },
  { id: '7', name: 'Áo Thun', icon: 'tshirt-crew-outline' },
  { id: '8', name: 'Áo Polo', icon: 'tshirt-v-outline' },
  { id: '9', name: 'Áo Sơ Mi', icon: 'tshirt-crew-outline' },
  { id: '10', name: 'Áo Khoác', icon: 'tshirt-v-outline' },
  { id: '11', name: 'Váy Đầm', icon: 'tshirt-crew' },
  { id: '12', name: 'Chân Váy', icon: 'tshirt-v' },
];

const Home = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Icon name={item.icon} size={40} color="#000" />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.search}>
          <AntDesign name="search1" size={18} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Tìm Kiếm...."
          />
        </View>
        <AntDesign name="bells" size={24} color="black" />
        <AntDesign name="shoppingcart" size={24} color="black" />
      </View>

      <View style={styles.list}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.navigate('FM')}>
            <Text style={styles.fmItem}>FM</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Nam')}>
            <Text style={styles.item}>Nam</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Nu')}>
            <Text style={styles.item}>Nữ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Đồ Đôi')}>
            <Text style={styles.item}>Đồ Đôi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Bộ Sưu Tập')}>
            <Text style={styles.item}>Bộ Sưu Tập</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Helmet')}>
            <Text style={styles.item}>Mũ Bảo Hiểm</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.swiperContainer}>
        <Swiper showsPagination={true}>
          <View style={styles.slide}>
            <Image
              style={styles.tinyLogo}
              source={{ uri: 'https://media.fmplus.com.vn/uploads/sliders/7e950bb3-2f0e-4b19-b687-413f059a932f.png' }}
              resizeMode="cover"
            />
          </View>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{ uri: 'https://media-fmplus.cdn.vccloud.vn/uploads/sliders/77e75b25-c6be-48a3-ba31-c426ed66d60a.jpg' }}
            />
          </View>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{ uri: 'https://media-fmplus.cdn.vccloud.vn/uploads/sliders/e583ad3d-3c98-4cc4-b12b-0023fb0c5b58.jpg' }}
            />
          </View>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{ uri: 'https://media-fmplus.cdn.vccloud.vn/uploads/sliders/097f561a-c8f8-4224-b805-48c36749e1e5.jpg' }}
            />
          </View>
        </Swiper>
      </View>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id} 
        contentContainerStyle={styles.container}
        numColumns={6}
      />

      <View>
        <Text>SIMPLE but CLASSY</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    backgroundColor: "yellow",
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "row",
    paddingTop: 20,
    paddingHorizontal: 20,
    height: 85,
  },
  search: {
    flexDirection: "row",
    alignItems: 'center',
    height: 40,
    margin: 20,
    padding: 10,
    width: 250,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  list: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  item: {
    marginRight: 15,
    fontSize: 19,
  },
  fmItem: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: "red",
  },
  swiperContainer: {
    height: 200,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: screenWidth,
    height: 250,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  itemText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
