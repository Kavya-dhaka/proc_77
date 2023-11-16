import React, { Component } from 'react';
import { Platform, Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={
                    styles.container
                }>
                <SafeAreaView style={
                    styles.droidSafeArea
                } />
                <View
                    style={
                        styles.titleBar
                    }>
                    <Text style={
                        styles.titleBar
                    }>IssTracer App</Text>
                </View>
                <TouchableOpacity style = {
                    styles.routeCard
                }>
                    <Text style = {
                        styles.routeText
                    }>IssLocation</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {
                    styles.routeCard
                }>
                    <Text style = {
                        styles.routeText
                    }>Meteors</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 75,
        paddingLeft: 30
    }
})

