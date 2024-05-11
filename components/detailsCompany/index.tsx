import { Divider, HStack, Heading, Stack, Text } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.65;

export const DetailsCompany = () => {
    const [showWorkHours, setShowWorkHours] = useState(false);

    return (
        <View >
            <View style={{
                backgroundColor: 'white', borderTopRightRadius: 50,
                borderTopLeftRadius: 50, height: '100%'
            }}>
                <View style={{ alignItems: 'center', marginTop: 4 }}>
                    <Text bold fontSize="2xl">Seu Rosa Bar3 pizarria</Text>
                </View>
                <Divider alignSelf={'center'} width={'89%'} my={2} />
                <Stack p="4" space={3} >
                    <Stack  >
                        <Heading size="sm" >
                            Rua Doutor Manuel Tomás Teixeira de Souza, 449
                        </Heading>
                        <Heading size="xs">Tocantins - 38415-270</Heading>
                        <Text>(34) 9 9772-7430</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: width * 0.035 }}>
                            <Text fontSize="sm" _light={{
                                color: "#eb0e15"
                            }} _dark={{
                                color: "#eb0e15"
                                // #30db39
                            }} fontWeight="500" >
                                Fechado
                            </Text>
                            <TouchableOpacity onPress={() => setShowWorkHours(!showWorkHours)}>
                                {showWorkHours ?
                                    <Icon name="keyboard-arrow-up" size={width * 0.06} style={{ color: 'black' }} />
                                    :
                                    <Icon name="keyboard-arrow-down" size={width * 0.06} style={{ color: 'black' }} />}

                            </TouchableOpacity>
                        </View>
                        <View>
                            {showWorkHours ?
                                <View>
                                    <Text>Segunda-feira - 08:00 às 23:59</Text>
                                    <Text>Terça-feira - 08:00 às 23:59</Text>
                                    <Text>Quarta-feira - 08:00 às 23:59</Text>
                                    <Text>Quinta-feira - 08:00 às 23:59</Text>
                                    <Text>Sexta-feira - 08:00 às 23:59</Text>
                                </View>
                                :
                                <Text>Quinta-feira - 08:00 às 23:59</Text>
                            }
                        </View>
                    </Stack>
                    <Heading marginTop={1} marginBottom={-2} size="sm">
                        Descrição:
                    </Heading>
                    <Text fontSize="sm" >
                        Venha conhecer o melhor bar universitário de Uerlândia!
                        Happy hour toda sexta com direito a chopp pela metade do preço.
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                6 mins ago
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#dbdada',
    },
    safeArea: {
        backgroundColor: '#dbdada',
        flex: 1
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: ITEM_WIDTH * 1.15,
        height: ITEM_WIDTH * 0.90,
        borderRadius: width * 0.04
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});


export default DetailsCompany;