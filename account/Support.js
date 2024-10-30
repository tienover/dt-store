import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
const Support = () =>{


return (
    <View style={styles.container}>
      <Text style={styles.help}>Trung Tâm Trợ Giúp</Text>
    <TextInput style={styles.input} placeholder='Nhập từ khóa nội dung tìm kiếm'></TextInput>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  help:{
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: "yellow",
    textAlign: 'center',
    height: 80,
    lineHeight: 100,
    width: '100%',
},
input:{
    height: 40,
    textAlign: "center",
    width: 250,
    padding: 10,


    backgroundColor: "blue"
}
});


export default Support;
