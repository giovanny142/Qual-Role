import { ImageGallery } from '@georstat/react-native-image-gallery';
import { Button, VStack, Text, Divider, Stack, Heading, HStack } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Header from '../../components/listRestaurants/header';
import DetailsCompany from '../../components/detailsCompany';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.65;

export const DetailsCompanyScreen = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openGallery = () => setIsOpen(true);
    const closeGallery = () => setIsOpen(false);

    const images = [
        {
            id: 1,
            url: 'https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/292231869_703640564398593_2185607748979856353_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHNvk2DqfpJHi67o5IsqRL-Php92qKrAI8-Gn3aoqsAj49l_tXrpiiw_dKu_zkpnIZvS_htbpuHXJiHjcWP4iw9&_nc_ohc=8RK6eK218A4Q7kNvgFIDDn3&_nc_ht=scontent.fudi2-1.fna&oh=00_AfATXKsipvhPqneVnv-Qd0DV-Bs8Rpyq6j6Kkz_U3yOe9Q&oe=662FB7AD',
            // any other extra info you want
        },
        {
            id: 2,
            url: 'https://instagram.fudi2-1.fna.fbcdn.net/v/t51.2885-19/419079218_1899928753775236_1245383432769312634_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fudi2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jqTk84RY1CMQ7kNvgHoRaob&edm=AEYEu-QBAAAA&ccb=7-5&oh=00_AfC4yqc9spVmXSOdBN6cLpCFeBFBpmBtChZnZ99oXvUX6g&oe=663A5CAA&_nc_sid=cf751b',
            // any other extra info you want
        },
    ]

    const renderItem = ({ item }) => (
        <View >
            <Button style={styles.button} onPress={openGallery}>
                <Image source={{ uri: item.url }} style={styles.image} resizeMode="cover" />
            </Button>
            <ImageGallery close={closeGallery} isOpen={isOpen} images={images} />
        </View>
    );

    return (
        <VStack style={styles.safeArea}>
            <Header />
            <View style={styles.container}>
                <Carousel
                    data={images}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={width * 0.75}
                />
            </View>
            <DetailsCompany />
        </VStack>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#dbdada',
    },
    safeArea: {
        backgroundColor: '#dbdada',
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


export default DetailsCompanyScreen;