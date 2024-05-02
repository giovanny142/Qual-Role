import { MaterialIcons } from '@expo/vector-icons';
import { Icon, Input, VStack, View } from 'native-base';
import { Pressable, StyleSheet } from 'react-native';

export default function SearchBar() {
    return (
        <VStack p={2} style={styles.container}>
            <View style={styles.input}>
                <Input
                    variant="filled"
                    placeholder="Faça sua busca aqui"
                    fontSize="md"
                    InputLeftElement={
                        <MaterialIcons name="search" size={24} color="#ffffff" style={{ marginLeft: 5, backgroundColor: '#6666eb',
                        borderRadius: 999,
                        marginRight: 10, }} />
                    }
                    _light={{
                        placeholderTextColor: "gray",
                    }}
                />
            </View>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ebebeb',
    },
    input: {
        borderColor: '#6666eb',
        borderWidth: 1.4,
        borderRadius: 5,
        marginLeft: 12,
        marginRight: 12
    }
});