import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
    { id: '1', name: 'Áo Thun', icon: 'tshirt-crew-outline' },
    { id: '2', name: 'Áo Polo', icon: 'tshirt-v-outline' },
    { id: '3', name: 'Áo Sơ Mi', icon: 'tshirt-crew-outline' },
    { id: '4', name: 'Áo Khoác', icon: 'tshirt-v-outline' },
    { id: '5', name: 'Tanktop', icon: 'tshirt-crew' },
    { id: '6', name: 'Quần Short', icon: 'tshirt-v' },
];

const PRODUCTS = [
    { id: '1', name: 'Quần Kaki', price: '355.000 VND', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_ejKteZLuLC4xRDVi_XCg6iUql7cVbONXw&s' },
    { id: '2', name: 'Áo Khoác Bomber', price: '459.000 VND', image: 'https://product.hstatic.net/1000335273/product/z5907020942715_d43bb9359455f5ab991dcefb153af31e_1baea9f74bf84e90a27603abe2019b93.jpg' },
    { id: '3', name: 'Áo Khoác Bomber', price: '399.000 VND', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLebOqZcKP5USKpkLT8ZalKJX1TKhHmqTXcg&s' },
];

const Nam = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            accessibilityLabel={item.name}>
            <Icon name={item.icon} size={40} color="#000" />
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderProduct = ({ item }) => (
        <View style={styles.productContainer}>
            <TouchableOpacity>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productPrice}>{item.price}</Text>
                <Text style={styles.productName}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListContainer}
                numColumns={3}
                ListFooterComponent={
                    <>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>Tìm Kiếm Hàng Đầu</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeMoreText}>Xem thêm</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={PRODUCTS}
                            renderItem={renderProduct}
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.productList}
                        />
                    </>
                }
            />
            <View style={styles.NamContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.footerText}>Thời Trang Nam</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeMoreText}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        Định nghĩa thời trang phái nam ngày nay không dừng lại ở việc "mặc cho có" nữa mà chính các...
                    </Text>
                </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    flatListContainer: {
        padding: 10,
    },
    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '30%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
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
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    footerText: {
        fontSize: 20,
        color: 'red',
    },
    seeMoreText: {
        fontSize: 16,
        color: 'blue',
    },
    productContainer: {
        alignItems: 'center',
        marginRight: 30,
    },
    productImage: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
    },
    productPrice: {
        color: 'red',
        fontSize: 16,
        marginVertical: 5,
    },
    productName: {
        fontSize: 14,
        color: '#000',
    },
    productList: {
        paddingHorizontal: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    NamContainer: {
        alignItems: 'center',
        padding: 20,
    },
    descriptionContainer: {
        marginTop: 60, 
        paddingHorizontal: 10,
        flexDirection: "column"
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',  
    },
});

export default Nam;
