import { ScrollView, Text, View } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { stylesSearchBar } from '../styles';

const HorizontalFilter = () => {
    const arrayData = ['Bar Universitário', 'Balada', 'Restaurante', 'Doceria', 'Sorveteria', 'Item 6', 'Item 7', 'Item 8'];
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const handleItemPress = (index) => setSelectedItemIndex(index);

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {arrayData.map((item, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => handleItemPress(index)}>
                    <View style={[stylesSearchBar.itemContainer, selectedItemIndex === index && stylesSearchBar.selectedItem]}>
                        <Text style={[stylesSearchBar.itemText, selectedItemIndex === index && stylesSearchBar.selectedItemText]}>{item}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

export default HorizontalFilter;