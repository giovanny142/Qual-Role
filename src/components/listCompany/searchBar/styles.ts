import { StyleSheet } from 'react-native';

export const stylesSearchBar = StyleSheet.create({
    container: {
        backgroundColor: '#dbdada',
    },
    searchContainer: {
        paddingHorizontal: 8,
        marginTop: 8,
    },
    iconStyle: {
        marginLeft: 5,
        backgroundColor: '#700f12',
        borderRadius: 999,
        marginRight: 3,
    },
    scrollContainer: {
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    itemContainer: {
        borderRadius: 5,
        marginRight: 5,
        paddingHorizontal: 5,
        backgroundColor: 'white',
    },
    selectedItem: {
        backgroundColor: '#700f12',
    },
    itemText: {
        color: "#4d4c4c",
        fontSize: 15,
    },
    selectedItemText: {
        color: "#ffffff",
    },
});