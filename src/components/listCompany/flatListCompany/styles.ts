import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const stylesFlatListCompanies = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#dbdada",
        paddingHorizontal: width * 0.015,
        paddingVertical: width * 0.008,
    },
    card: {
        borderRadius: width * 0.04,
        backgroundColor: 'white'
    },
});