import React from 'react';
import { View, Text, StyleSheet, Linking, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import withCustomBackHandler from './withCustomBackHandler'; // ajuste o caminho conforme necessário

const Tutorials = () => {
    const languages = {
        'Portuguese': 'https://youtu.be/OVqH10VsIgg?si=9pBU_AHIbzdb4tsl',
        'English': 'https://youtu.be/jCUaMdXsI7w?si=xXv6r4K0CC-FTNeW',
        'Spanish': 'https://youtu.be/cYsixd_AYGc?si=cgW-xmWcTFDDCXAp',
        'French': 'https://youtu.be/pQO0oCFLeiA?si=WYW8pV6Nt2xMBL3w',
        'German': 'https://youtu.be/mcRvXTjW4gw?si=S9cq5sArYy5dQSvH',
        'Mandarin': 'https://youtu.be/xGMzxhHm6hE?si=TDL1uY8zKCSlcx0Y',
        'Arabic': 'https://youtu.be/Tw44A1185uc?si=QVgSCU-9fvNlD8Of'
    };
    const images = {
        'Portuguese': require('../assets/country_imgs/portugal_icon.png'),
        'English': require('../assets/country_imgs/US_icon.png'),
        'Spanish': require('../assets/country_imgs/spain_icon.png'),
        'French': require('../assets/country_imgs/france_icon.png'),
        'German': require('../assets/country_imgs/germany_icon.png'),
        'Mandarin': require('../assets/country_imgs/china_icon.png'),
        'Arabic': require('../assets/country_imgs/arabic_icon.png')
    };

    return (
        <ImageBackground source={require("../assets/SignWise_fundo.jpg")} style={styles.background}>
            <View style={styles.buttonsContainer}>
                <ScrollView >
                    <Text style={styles.Title}>Choose a languague to be redirected to a youtube video that teaches you sign language of the language chosen!</Text>
                    {Object.keys(languages).map((language, index) => (
                        <TouchableOpacity key={index} onPress={() => Linking.openURL(languages[language])} activeOpacity={0.8}>
                        <View style={styles.button}>
                            <Image source={images[language]} style={{width: 45, height: 45, marginLeft: 10, marginRight: 50}}/>
                            <Text style={styles.buttonText}>{language}</Text>
                        </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
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
      buttonsContainer: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        width: '100%',
        //backgroundColor: "green",
    },
    Title:{
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 50,
        marginHorizontal: 30
    },
    button: {
        flexDirection: 'row',
        marginBottom: 40,
        justifyContent: "space-arround",
        alignItems: "center",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "lightblue",
        height: 80,
        shadowColor: '#000',
        width: "80%",
        alignSelf: "center",
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

    }
});

export default withCustomBackHandler(Tutorials);
