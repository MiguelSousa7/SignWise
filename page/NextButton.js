import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';

import Svg, { G, Circle } from 'react-native-svg';
import { AntDesign } from "@expo/vector-icons";

export default function NextButton({ percentage, scrollTo }) {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);

    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start()
    };

    useEffect(() => {
        animation(percentage);
    }, [percentage]);

    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;
            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        }, [percentage]);

        return () => {
            progressAnimation.removeAllListeners()
        };
    }, []);


    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center}>
                    <Circle stroke="lightgray"
                        cx={center} cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        fill="#F0F0F0" 
                    />
                    <Circle stroke="dodgerblue"
                        ref={progressRef}
                        cx={center}
                        cy={center} r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        fill="#F0F0F0" 
                    />
                </G>
            </Svg>
            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.8}>
                <AntDesign name='arrowright' size={36} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    button: {
        position: "absolute",
        backgroundColor: "dodgerblue",
        borderRadius: 100,
        padding: 20,
    },
});
