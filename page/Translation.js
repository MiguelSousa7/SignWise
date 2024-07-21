// import React, { useState } from 'react';
// import axios from 'axios';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { ScrollView } from 'react-native';


// const Stack = createStackNavigator();

// const letter_to_image = {
//   'a': require('./images/a.png'),
//   'b': require('./images/b.png'),
//   'c': require('./images/c.png'),
//   'd': require('./images/d.png'), 
//   'e': require('./images/e.png'),
//   'f': require('./images/f.png'),
//   'g': require('./images/g.png'),
//   'h': require('./images/h.png'),
//   'i': require('./images/i.png'),
//   'j': require('./images/j.png'),
//   'k': require('./images/k.png'),
//   'l': require('./images/l.png'),
//   'm': require('./images/m.png'),
//   'n': require('./images/n.png'),
//   'o': require('./images/o.png'),
//   'p': require('./images/p.png'),
//   'q': require('./images/q.png'),
//   'r': require('./images/r.png'),
//   's': require('./images/s.png'),
//   't': require('./images/t.png'),
//   'u': require('./images/u.png'),
//   'v': require('./images/v.png'),
//   'w': require('./images/w.png'),
//   'x': require('./images/x.png'),
//   'y': require('./images/y.png'),
//   'z': require('./images/z.png'),
// };

// const translate_to_sign_language = (text) => {
//   text = text.toLowerCase();
//   let images = [];
//   for (let char of text) {
//     if (char in letter_to_image) {
//       images.push({ char, src: letter_to_image[char] });
//     }
//   }
//   return images;
// };

// export default function Translation() {
//   const [text, setText] = useState('');
//   const [images, setImages] = useState([]);

//   const handleTranslate = () => {
//     setImages(translate_to_sign_language(text));
//   };

//   return (
//     <ImageBackground source={require("../assets/SignWise_fundo.jpg")} style={styles.background}>
//       <TextInput
//         placeholder= "write here your text"
//         style={styles.input}
//         onChangeText={setText}
//         value={text}
//       />
//       <TouchableOpacity onPress={handleTranslate} activeOpacity={0.8}>
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>Translate</Text>
//         </View>
//       </TouchableOpacity>

//       <ScrollView style={styles.ImagesContainer}>
//         {images.map((image, index) => (
//           <Image 
//             key={index} 
//             source={image.src} 
//             style={styles.image} 
//             accessibilityLabel={`Letra ${image.char.toUpperCase()}`} 
//           />
//         ))}
//       </ScrollView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: "center"
//   },
//   input: {
//     height: 50,
//     width: "80%",
//     borderColor: 'dodgerblue',
//     borderWidth: 1,
//     backgroundColor: 'white',
//     marginTop: 50,
//     padding: 10,
//     borderRadius: 10,
//   },
//   button: {
//     margin: 30, 
//     width: 150,
//     justifyContent: "center",
//     alignSelf: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     backgroundColor: "lightblue",
//     height: 50,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   buttonText: {
//   color: "dodgerblue",
//   fontWeight: "bold",
//   fontSize: 16,
//   textAlign: "center",
//   },
//   ImagesContainer: {
//     width: "100%",
//   },
//   image: {
//     width: 100,
//     height: 140,
//     marginBottom: 10,
//     borderRadius: 10,
//     alignSelf: "center"
//   },
// });

import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import withCustomBackHandler from './withCustomBackHandler'; // ajuste o caminho conforme necessário

const Translation = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);

  const letter_to_image = {
    'a': require('./images/a.png'),
    'b': require('./images/b.png'),
    'c': require('./images/c.png'),
    'd': require('./images/d.png'), 
    'e': require('./images/e.png'),
    'f': require('./images/f.png'),
    'g': require('./images/g.png'),
    'h': require('./images/h.png'),
    'i': require('./images/i.png'),
    'j': require('./images/j.png'),
    'k': require('./images/k.png'),
    'l': require('./images/l.png'),
    'm': require('./images/m.png'),
    'n': require('./images/n.png'),
    'o': require('./images/o.png'),
    'p': require('./images/p.png'),
    'q': require('./images/q.png'),
    'r': require('./images/r.png'),
    's': require('./images/s.png'),
    't': require('./images/t.png'),
    'u': require('./images/u.png'),
    'v': require('./images/v.png'),
    'w': require('./images/w.png'),
    'x': require('./images/x.png'),
    'y': require('./images/y.png'),
    'z': require('./images/z.png'),
  };

  const translate_to_sign_language = (text) => {
    text = text.toLowerCase();
    let images = [];
    for (let char of text) {
      if (char in letter_to_image) {
        images.push({ char, src: letter_to_image[char] });
      }
    }
    return images;
  };

  const handleTranslate = () => {
    setImages(translate_to_sign_language(text));
  };

  return (
    <ImageBackground source={require("../assets/SignWise_fundo.jpg")} style={styles.background}>
      <TextInput
        placeholder="write here your text"
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity onPress={handleTranslate} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Translate</Text>
        </View>
      </TouchableOpacity>

      <ScrollView style={styles.ImagesContainer}>
        {images.map((image, index) => (
          <Image 
            key={index} 
            source={image.src} 
            style={styles.image} 
            accessibilityLabel={`Letra ${image.char.toUpperCase()}`} 
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: 'dodgerblue',
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop: 50,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    margin: 30, 
    width: 150,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "lightblue",
    height: 50,
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
    fontSize: 16,
    textAlign: "center",
  },
  ImagesContainer: {
    width: "100%",
  },
  image: {
    width: 100,
    height: 140,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
});

export default withCustomBackHandler(Translation);
