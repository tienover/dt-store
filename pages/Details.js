import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const Details = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tài Khoản</Text>

      <View style={styles.iconContainer}>
        <MaterialIcons name="account-circle" size={50} color="black" style={{}} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=>nav.navigate('Login')} style={styles.loginButton}>
            <Text style={styles.loginText}>Đăng nhập</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>nav.navigate('Register')} style={styles.signupButton}>
            <Text style={styles.signupText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.option}>
        <TouchableOpacity style={styles.row}>
          <MaterialIcons name="local-shipping" size={24} color="black" />
          <Text style={styles.rowText}>Tra cứu đơn hàng</Text>
          <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
        </TouchableOpacity>
        <View style={styles.space} />

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconUnder}>
            <MaterialIcons name="qr-code-scanner" size={24} color="black" />
            <Text style={styles.iconText}>Mã QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconUnder}>
            <MaterialIcons name="chat" size={24} color="black" />
            <Text style={styles.iconText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconUnder}>
            <MaterialIcons name="confirmation-number" size={24} color="black" />
            <Text style={styles.iconText}>Kho Voucher</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconUnder}>
            <MaterialIcons name="attach-money" size={24} color="black" />
            <Text style={styles.iconTextDisabled}>Điểm tích lũy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.list}>
          <TouchableOpacity onPress={() => nav.navigate('Support')} style={styles.iconList}>
          <MaterialIcons name="support-agent" size={24} color="black" />
            <Text style={styles.sectionTitle}>Trung tâm trợ giúp</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
            <MaterialCommunityIcons name="cards-heart-outline" size={24} color="black" />
            <Text style={styles.sectionTitle}>Sản phẩm đã thích</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
            <AntDesign name="eyeo" size={24} color="black" />
            <Text style={styles.sectionTitle}>Sản phẩm đã xem</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
            <AntDesign name="staro" size={24} color="black" />
            <Text style={styles.sectionTitle}>Đánh giá của tôi</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
            <AntDesign name="sharealt" size={24} color="black" />
            <Text style={styles.sectionTitle}>Giới thiệu bạn bè</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
          <FontAwesome5 name="map-marked" size={24} color="black" />
            <Text style={styles.sectionTitle}>Affiliate</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
            <MaterialIcons name="share-location" size={24} color="black" />
            <Text style={styles.sectionTitle}>Hệ thống cửa hàng</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
          <AntDesign name="smileo" size={24} color="black" />
            <Text style={styles.sectionTitle}>Tuyển dụng</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
          <Feather name="users" size={24} color="black" />
            <Text style={styles.sectionTitle}>Về chúng tôi</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
          <MaterialCommunityIcons name="cellphone-information" size={24} color="black" />
            <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
          <Feather name="phone-call" size={24} color="black" />

            <Text style={styles.sectionTitle}>Số địa chỉ</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconList}>
            <MaterialIcons name="settings" size={24} color="black" />

            <Text style={styles.sectionTitle}>Cài đặt</Text>
            <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>


    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: "yellow",
    textAlign: 'center',
    height: 80,
    lineHeight: 100,
    width: '100%',

  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 2,
    marginTop: 4,
    flexDirection: "row",
    alignItems: 'center'

  },
  icon: {
    width: 40,
    height: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 130,
    height: 40,
    width: 150
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  loginText: {
    color: 'white',
  },
  signupButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  signupText: {
    color: 'white',
  },
  option: {
    backgroundColor: 'white',
    padding: 10,
  },
  list: {
    paddingLeft: 1,
    // justifyContent: "space-between"
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 1,
  },
  rowText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 25,
  },
 
  space: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconText: {
    marginTop: 5,
    fontSize: 20,
  },
  iconTextDisabled: {
    marginTop: 5,
    fontSize: 16,
    color: 'black',
  },
  iconUnder: {
    alignItems: "center"
  },
  iconList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 25,
    marginLeft: 10,
    flex: 1,
  },
  arrowIcon: {
    color: 'gray',
    marginRight: 10,
  },

});

export default Details;
