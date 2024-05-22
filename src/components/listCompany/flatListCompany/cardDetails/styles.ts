import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const stylesCardDetails = StyleSheet.create({
    detailsCard: {
        flexDirection: "column",
        backgroundColor: '#dbdada',
        borderRadius: width * 0.02,
        width: '65%',
        paddingHorizontal: width * 0.02,
    },
    detailsCapacity: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerCard: {
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: width * 0.01,
    },
    description: {
        fontSize: width * 0.032,
        color: "#4d4c4c",
    },
    peopleCount: {
        fontSize: width * 0.032,
        color: "black",
        marginLeft: width * 0.01,
        fontWeight: "bold",
    },
    iconStyle: {
        marginLeft: width * 0.01,
        color: 'black',
    },
    updateText: {
        fontSize: width * 0.03,
        marginLeft: 'auto',
        color: 'black',
        marginTop: width * 0.004,
    },
});