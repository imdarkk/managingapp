import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../contexts/AuthContext';

const { width, height } = Dimensions.get('window');
export default function Login() {
    const { signIn } = useAuth();

    return (
		<SafeAreaView>
			<View style={styles.container}>
				<TextInput placeholder="Username" placeholderTextColor="gray" style={styles.input} returnKeyType="done" />
				<TextInput placeholder="Password" placeholderTextColor="gray" style={styles.input} returnKeyType="done" />

                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: width,
		height: height,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#282A3A",
	},
	input: {
		width: width * 0.8,
		height: 50,
		borderRadius: 5,
		borderBottomWidth: 1,
		borderColor: "#fff",
		paddingLeft: 10,
        marginBottom: 10,
        color: "white"
	},
	button: {
		width: width * 0.8,
		height: 50,
		borderRadius: 5,
		marginTop: 15,
		backgroundColor: "#d94343",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontWeight: "bold",
		color: "#333",
		fontSize: 14,
	},
});
