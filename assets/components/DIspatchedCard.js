import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
export default function DispatchedCard() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.map}></View>

            <View style={styles.informationContainer}>
                <Text style={styles.informationContainerTxt}><Text style={{ fontWeight: "bold" }}>Name:</Text> Giorgos Konstantinou</Text>
                <Text style={[styles.informationContainerTxt, {width: 190}]}><Text style={{ fontWeight: "bold" }}>Address:</Text> Agiou Gennadiou 17</Text>
                <Text style={styles.informationContainerTxt}><Text style={{ fontWeight: "bold" }}>Phone:</Text> 99001001</Text>
                <Text style={styles.informationContainerTxt}><Text style={{ fontWeight: "bold" }}>Issue:</Text> A/C Service</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
	container: {
		width: width * 0.9,
		height: 140,
		borderRadius: 5,
        backgroundColor: "#EAEAEA",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 7,
    },
    map: {
        width: width * 0.3,
        height: 120,
        borderRadius: 5,
        backgroundColor: "gray",
        marginLeft: 15
    },
    informationContainer: {
        height: 110,
        justifyContent: "space-between",
        marginLeft: 15
    }
});
