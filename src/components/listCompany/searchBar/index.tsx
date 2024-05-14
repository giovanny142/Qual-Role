import { MaterialIcons } from '@expo/vector-icons';
import { Input, ScrollView, Text, VStack, View } from 'native-base';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function SearchBar() {
    const arrayData = ['Bar Universitário', 'Balada', 'Restaurante', 'Doceria', 'Sorveteria', 'Item 6', 'Item 7', 'Item 8'];
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const handleItemPress = (index) => {
        setSelectedItemIndex(index);
    };

    return (
        <VStack p={2} style={styles.container}>
            <View style={styles.input}>
                <Input
                    variant="filled"
                    placeholder="Faça sua busca aqui"
                    fontSize="md"
                    InputLeftElement={
                        <MaterialIcons name="search" size={24} color="#ffffff" style={{
                            marginLeft: 5, backgroundColor: '#700f12',
                            borderRadius: 999,
                            marginRight: 3,
                        }} />
                    }
                    _light={{
                        placeholderTextColor: "gray",
                    }}
                />
            </View>
            <View>
                <ScrollView style={{marginBottom: -12}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {arrayData.map((item, index) => (
                        <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => handleItemPress(index)}>
                            <View style={[styles.itemContainer, selectedItemIndex === index && styles.selectedItem]}>
                                <Text style={[styles.itemText, selectedItemIndex === index && styles.selectedItemText]}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dbdada',
    },
    itemContainer: {
        borderRadius: 5,
        marginRight: 5,
        marginTop: 8,
        paddingHorizontal: 5,
        marginBottom: 8,
        backgroundColor: 'white',
        width: 'auto',
        alignItems: 'center',
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
    input: {
        borderColor: '#5f0fe5',
    }
});