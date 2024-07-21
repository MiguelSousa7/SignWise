import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const withCustomBackHandler = (WrappedComponent) => {
    return (props) => {
        const navigation = useNavigation();

        useEffect(() => {
            const backAction = () => {
                navigation.goBack();
                return true;
            };

            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                backAction
            );

            return () => backHandler.remove();
        }, [navigation]);

        return <WrappedComponent {...props} />;
    };
};

export default withCustomBackHandler;


