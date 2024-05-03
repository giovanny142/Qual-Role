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
                        <MaterialIcons name="search" size={24} color="#ffffff" style={{ marginLeft: 5, backgroundColor: '#56070c',
                        borderRadius: 999,
                        marginRight: 3, }} />
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
        backgroundColor: '#dbdada',
    },
    input: {
        borderColor: '#5f0fe5',
        // borderWidth: 1.4,
        // borderRadius: 5,
    }
});