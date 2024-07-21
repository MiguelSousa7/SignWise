import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'

export default function OnBoardingItem({item}) {
    const {width} = useWindowDimensions();
  return (
    <View style={[styles.Container, {width}]}>
      <Image source={item.image} style={[styles.image, {width, resizeMode: "contain"}]}/>
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 0.7,
        justifyContent: "center"
    },
    title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        color: "dodgerblue",
        textAlign: "center"
    },
    description: {
        fontSize: 16,
        fontWeight: "600",
        color: "dodgerblue",
        textAlign: "center",
        paddingHorizontal: 20
    }
});