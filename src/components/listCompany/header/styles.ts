import { Dimensions, StatusBar, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const stylesHeader = StyleSheet.create({
    container: {
        padding: '3%',
        paddingTop: StatusBar.currentHeight || 20
    },
    center: {
        marginTop: width * 0.01,
        alignSelf: 'center'
    },
});