import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DispatchedCard from '../../components/DIspatchedCard';

const { width, height } = Dimensions.get('window');
export default function Home() {
    const [dropdown, setDropdown] = useState(false);

    function handleAddDropdown() {
        setDropdown(!dropdown);
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.addBtn} onPress={handleAddDropdown}><Text style={styles.addBtnTxt}>ADD</Text></TouchableOpacity>
                {dropdown && (
                    <View style={styles.dropdownContainer}>

                    </View>
                )}

                <View style={styles.containerMainItems}>
                    <Text style={styles.containerMainItemsTxt}>Dispatched To:</Text>
                    <DispatchedCard />
                    <DispatchedCard />
                    <DispatchedCard />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
    },
	addBtn: {
		width: width * 0.9,
		height: 50,
		borderRadius: 5,
        backgroundColor: "gray",
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtnTxt: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },
    dropdownContainer: {
        position: "absolute",
        zIndex: 1000,
        top: 60,
        width: width * 0.6,
        height: 170,
        borderRadius: 5,
        backgroundColor: "gray",
        marginTop: -5,
        alignSelf: "flex-start",
        marginLeft: 20
    },
    containerMainItems: {
        width: width * 0.9,
        alignItems: "flex-start",
    }
});
