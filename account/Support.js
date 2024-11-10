import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Support = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.help}>Trung Tâm Trợ Giúp</Text>
      <View style={styles.input}>
        <AntDesign name="search1" size={18} color="black" style={styles.icon} />
        <TextInput
          style={styles.search}
          placeholder='Nhập từ khóa hoặc nội dung tìm kiếm'
        />
      </View>
      <View style={styles.list}>
        <AntDesign name="phone" size={24} color="black" />
        <Text style={styles.text}>Hotline</Text>
        <Text style={styles.form}>012 3456 789</Text>
      </View>

      <View style={styles.list}>
      <Fontisto name="email" size={24} color="black" />
        <Text style={styles.text}>Email</Text>
        <Text style={styles.form}>tienbaonha@gmail.com</Text>
      </View>
      <View style={styles.list}>
      <AntDesign name="clockcircleo" size={24} color="black" />
        <Text style={styles.text}>Thời gian làm việc</Text>
        <Text style={styles.form}> 7:30 - 22:30</Text>
      </View>
      <View style={styles.list}>
      <Feather name="flag" size={24} color="black" />
        <Text style={styles.spam}>Phản ảnh khiếu nại</Text>
        <MaterialIcons name="chevron-right" size={24} color="gray" style={styles.arrowIcon} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  help: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: "yellow",
    textAlign: 'center',
    height: 80,
    lineHeight: 100,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 10,
    borderColor: "#fff8dc"
  },
  search: {
    flex: 1,
    marginLeft: 20,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2, 
    borderColor: "#e0ffff"
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    flex: 1,
  },
  form: {
    marginRight: 1,
    fontSize: 20,
  },
  spam:{
   fontWeight: "300",
   fontSize: 20,
   marginLeft: 10,
   flex: 1,


  },
  arrowIcon: {
    color: 'gray',
    marginRight: 10,
  },
});

export default Support;
