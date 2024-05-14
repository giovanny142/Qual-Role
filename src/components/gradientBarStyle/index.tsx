import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientTabBar = (props) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#09133c', '#23379A']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={StyleSheet.absoluteFill}
            />
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 40, // Defina a altura da barra de navegação
    },
});

export default GradientTabBar;