import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const Danhmuc = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.text}> Danh Mục</Text>
        <AntDesign name="shoppingcart" size={32} color="black" />
        </View>

        <View style={styles.list}>
           <TouchableOpacity>
            <Text style={{fontSize: 20, paddingLeft: 18}}>Nam</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{fontSize: 20, paddingLeft: 18}}>Nữ</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{fontSize: 20, paddingLeft: 18}}>Đồ Đôi</Text>
            </TouchableOpacity>
        </View>
    <View>
        <Text>Áo</Text>
        <Text>Quần</Text>

    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  header:{
    justifyContent: "space-between",
    alignItems:'center',
    flexDirection: "row",
    backgroundColor: "yellow",
    height: 80,
    width: '100%',
    paddingLeft: 100,
    paddingTop: 20,
  },
  list:{
    flexDirection: "row",
    borderRadius: 10,

  }
 
});

export default Danhmuc;
