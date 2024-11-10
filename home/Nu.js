import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
const { width: screenWidth } = Dimensions.get('window');

const data= [
  { id: '1', name: 'Áo Kiểu Nữ Tay Ngắn', price: "249.000 VND" ,image: "" },
];
const Nu = () => {

    return (
      <View style={styles.container}>
        
        <View style={styles.swiperContainer}>
        <Swiper  showsPagination={true}>
          <View style={styles.slide}>
            <Image
              style={styles.tinyLogo}
              source={{ uri: 'https://media-fmplus.cdn.vccloud.vn/uploads/sliders/2f88ebf8-8005-4f77-a986-9057237f7b46.jpg' }}
              resizeMode="cover"
            />
          </View>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{ uri: 'https://media.fmplus.com.vn/uploads/sliders/3decfd40-52e4-4867-835a-9a4075ba4354.jpg' }}
            />
          </View>
        </Swiper>
      </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
            <Text style={{fontSize: 20, color: "red", fontWeight: "bold"}}>Sản Phẩm Mới</Text>
            <Text style={{fontSize: 18}}>Xem thêm --> </Text>
        </View>


      </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
   
});

export default Nu;
