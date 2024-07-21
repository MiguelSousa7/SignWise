import React from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import withCustomBackHandler from './withCustomBackHandler'; // ajuste o caminho conforme necessário

const About_us = () => {
    return (
        <ImageBackground source={require("../assets/SignWise_fundo.jpg")} style={styles.background}>
            <View style={styles.container}>
                <ScrollView >
                    <Text style={styles.title}>About Us</Text>
                    <Text style={styles.paragraph}>Welcome to our application dedicated to inclusive communication and learning sign language. We are committed to creating an accessible and innovative tool that not only assists deaf individuals in everyday communication but also empowers those who wish to learn and understand sign language.</Text>
                    <Text style={styles.paragraph}>Our mission is to eliminate communication barriers between deaf individuals and those who do not master sign language, thereby promoting social inclusion and mutual understanding.</Text>
                    <Text style={styles.paragraph}>Through our application, we seek to facilitate interaction in various contexts, from the educational environment to professional and social settings.</Text>
                    <Text style={styles.paragraph}>By combining advanced technology with a user-centered approach, we are dedicated to making inclusive communication a tangible reality.</Text>
                    <Text style={styles.paragraph}>Join us on this journey to build a world where language is a bridge, not a barrier.</Text>
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
      },
      container:{
      },
    title: {
        fontSize: 24,
        color: 'oldlace',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'left',
        marginBottom: 20,
        marginLeft: 20,
        marginTop: 20
    },
    paragraph: {
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        color: 'oldlace',
        marginBottom: 20,
        lineHeight: 26,
        fontWeight: "500"
    },
});

export default withCustomBackHandler(About_us);