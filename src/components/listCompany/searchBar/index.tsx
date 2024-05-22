import { MaterialIcons } from '@expo/vector-icons';
import { Input, ScrollView, Text, VStack, View } from 'native-base';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { stylesSearchBar } from './styles';
import HorizontalFilter from './horizontalFilter';

const SearchBar = () => {

    return (
        <VStack style={stylesSearchBar.container}>
            <View style={stylesSearchBar.searchContainer}>
                <Input
                    variant="filled"
                    placeholder="Faça sua busca aqui"
                    fontSize="md"
                    InputLeftElement={
                        <MaterialIcons name="search" size={24} color="#ffffff" style={stylesSearchBar.iconStyle} />
                    }
                    _light={{ placeholderTextColor: "gray" }}
                />
            </View>
            <View style={stylesSearchBar.scrollContainer}>
                <HorizontalFilter />
            </View>
        </VStack>
    );
}

export default SearchBar;