import { ImageGallery } from '@georstat/react-native-image-gallery';
import { Button, VStack, Text, Divider, Stack, Heading, HStack } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Header from '../../components/listRestaurants/header';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.65;

export const DetailsCompany = () => {

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
                <Stack p="5" space={3} >
                    <Stack space={2}>
                        <Heading size="md">
                            Rua 14 de julho, 491
                        </Heading>
                        <Text fontSize="sm" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" >
                            Aberto agora
                        </Text>
                    </Stack>
                    <Heading size="sm">
                        Descrição:
                    </Heading>
                    <Text fontSize="md" >
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