import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const helmets = [
  { id: '1', name: 'Mũ Bảo Hiểm Royal', price: '450.000 VND', image: 'https://bazaarvietnam.vn/wp-content/uploads/2022/08/kieu-toc-doi-mu-bao-hiem-11.jpg' },
  { id: '2', name: 'Mũ Bảo Hiểm Asia', price: '550.000 VND', image: 'https://asamahelmet.vn/wp-content/uploads/2024/01/nang-cao-nhan-thuc-ve-doi-mu-bao-hiem-an-toan-trong-cong-dong.jpg' },
  { id: '3', name: 'Mũ Bảo Hiểm Asia', price: '550.000 VND', image: 'https://nontrum.vn/wp-content/uploads/2019/10/thu-3869.jpg' },
  { id: '4', name: 'Mũ Bảo Hiểm Asia', price: '550.000 VND', image: 'https://royalhelmet.com.vn/ckfinder/userfiles/images/doi-non-bao-hiem3.png' },
  { id: '5', name: 'Mũ Bảo Hiểm Asia', price: '550.000 VND', image: 'https://royalhelmet.com.vn/ckfinder/userfiles/images/doi-non-bao-hiem4.png' },
  { id: '6', name: 'Mũ Bảo Hiểm Asia', price: '550.000 VND', image: 'https://royalhelmet.com.vn/ckfinder/userfiles/images/doi-non-bao-hiem2.png' },
];

export default function Helmet() {
  return (
    
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <View style={styles.content}>
        <Ionicons name="filter" size={20} color="black" />
        <Text style={styles.text}>Bộ lọc & Sắp xếp</Text>
      </View>
    </TouchableOpacity>
      <FlatList
        data={helmets}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 40,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  productCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  button: {
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    
  },
});
