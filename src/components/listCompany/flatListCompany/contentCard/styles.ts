import { Dimensions, StyleSheet } from 'react-native';
import { } from "react-native-gesture-handler";

const { width } = Dimensions.get('window');

export const stylesContentCard = StyleSheet.create({
    textContainer: {
        marginLeft: width * 0.04,
        width: width * 0.69,
    },
    content: {
        flexDirection: 'row',
        padding: width * 0.012,
    },
    image: {
        alignSelf: 'center',
        width: width * 0.20,
        height: width * 0.20,
        borderRadius: (width * 0.20) / 2,
    },
    titleCard: {
        fontSize: width * 0.041,
        fontWeight: "bold",
        color: "black",
        marginLeft: width * 0.009,
        width: 'auto',
    },
    favoriteIconContainer: {
        marginLeft: 'auto',
        marginTop: width * 0.01
    },
});