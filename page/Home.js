import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, BackHandler} from 'react-native';
import { Linking } from 'react-native';

const Home = ({ navigation }) => {

    useEffect(() => {
        const backAction = () => {
            BackHandler.exitApp();
            return true; 
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <ImageBackground source={require("../assets/SignWise_fundo.jpg")} style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/SignWise_logo.png")}/>
                <Text style={styles.title}>
                    Sign language has never been so simple!
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Translation')} activeOpacity={0.8}>
                    <View style={styles.button}>
                        <Image source={require("../assets/translation_icon.png")} style={{width: 40, height: 40, marginLeft: 50}}/>
                        <Text style={styles.buttonText}>Translation</Text>
                    </View>
                </TouchableOpacity>
                    
                <TouchableOpacity onPress={() => Linking.openURL('https://spreadthesign.com/pt.pt/search/')} activeOpacity={0.8}>
                    <View style={styles.button}>
                        <Image source={require("../assets/dictionary_icon.png")} style={{width: 43, height: 43, marginRight: 5, marginLeft: 47}}/>
                        <Text style={styles.buttonText}>Dictionary</Text>
                    </View>
                </TouchableOpacity>
    
                <TouchableOpacity onPress={() => navigation.navigate('Tutorials')} activeOpacity={0.8}>
                    <View style={styles.button}>
                        <Image source={require("../assets/tutorials_icon.png")} style={{width: 45, height: 45, marginRight: 40, marginLeft: 59}}/>
                        <Text style={styles.buttonTextTutorials}>Tutorials</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('About_us')} activeOpacity={0.8}>
                    <View style={styles.button}>
                        <Image source={require("../assets/about_u_icon.png")} style={{width: 43, height: 43, marginRight: 47, marginLeft: 47}}/>
                        <Text style={styles.buttonTextAboutUs}>About Us</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    logoContainer: {
        position: "absolute",
        top: 30,
        alignItems: "center"
    },
    logo: {
        width: 120, 
        height: 120,
        justifyContent: "flex-start",
    },
    title: {
        top: 10,
        fontWeight: "600",
        fontSize: 16,
        color: "white",
    },
    buttonsContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '80%',
        //backgroundColor: "green",
        top: 220
    },
    button: {
        flexDirection: 'row',
        marginBottom: 30, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "lightblue",
        height: 90,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
    },
    buttonText: {
        color: "dodgerblue",
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        marginLeft: 36,
        marginRight: 80
    },
    buttonTextTutorials: {
        color: "dodgerblue",
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        marginLeft: 10,
        marginRight: 105
    },
    buttonTextAboutUs: {
        color: "dodgerblue",
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        marginRight: 90
    }
});

export default Home;