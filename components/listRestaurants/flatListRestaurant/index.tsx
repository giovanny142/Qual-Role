import { Text, View } from "native-base";
import { StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import * as Animatable from 'react-native-animatable';

export const ListRestaurants = ({ id, name, image, description, maxQuantity, currentQuantity }) => {
    const [favoriteButtonPressed, setFavoriteButtonPressed] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
                <View style={styles.card}>
                    <View style={styles.content}>
                        <Image style={styles.image} source={{ uri: image }} />
                        <View style={styles.textContainer}>
                            <Text style={styles.titleCard}>{name}</Text>
                            <View style={{ width:100 , flexDirection: "row", marginLeft: width * 0.01, marginBottom: width * 0.02 }}>
                                <Text style={styles.description}>Capacidade:</Text>
                                <View style={{
                                    flexDirection: 'row', 
                                    // borderColor: '#6666eb',
                                    // borderWidth: 1.4,
                                    // borderRadius: 5,
                                    backgroundColor: '#6666eb',
                                    marginLeft: width * 0.01
                                }}>

                                    <Text style={styles.peopleCount}>25</Text>
                                    <Text style={styles.peopleCount}>/</Text>
                                    <Text style={styles.peopleCount}>45</Text>
                                    <MaterialCommunityIcons style={{marginLeft:  width * 0.01, color:'white'}} 
                                    name={"account-multiple-check-outline"} size={22} />
                                </View>
                            </View>
                            <Text style={{ fontSize: width * 0.03, marginLeft: width * 0.09 }}>Atualizado 30/04 às 17:45</Text>
                        </View>
                        <View style={styles.favoriteIconContainer} >

                            <TouchableOpacity onPress={() => setFavoriteButtonPressed(!favoriteButtonPressed)}>
                                {favoriteButtonPressed ?
                                    <Animatable.View animation="bounceIn">
                                        <MaterialCommunityIcons name={"heart"} size={24} color="#6666eb"/>
                                    </Animatable.View>
                                    :
                                    <MaterialCommunityIcons name={"heart-outline"} size={24} color="#dbdbdb"/>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#ebebeb",
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.03,
    },
    modalHeader: {
        borderBottomWidth: 1,
        width: '100%',
    },
    modalFooter: {
        borderTopWidth: 0,
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    amount: {
        backgroundColor: '#171717',
        borderRadius: 50,
        flexDirection: 'row',
        paddingRight: 5,
        paddingLeft: 5
    },
    footerCardList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: width * 0.03,
    },
    address: {
        fontSize: width * 0.05,
        color: '#e0ce2a',
    },
    phone: {
        fontSize: width * 0.04,
        color: 'black',
    },
    card: {
        borderRadius: width * 0.08,
        backgroundColor: '#ffffff',
    },
    content: {
        flexDirection: 'row',
        padding: width * 0.02,
    },
    image: {
        width: width * 0.25,
        height: width * 0.25,
        borderRadius: (width * 0.25) / 2,
    },
    textContainer: {
        padding: width * 0.01,
    },
    titleCard: {
        fontSize: width * 0.055,
        fontWeight: "bold",
        color: "black",
        marginBottom: width * 0.03,
        padding: width * 0.01,
        width: '95%',
    },
    description: {
        fontSize: width * 0.04,
        color: "black",
    },
    peopleCount: {
        fontSize: width * 0.04,
        color: "white",
        marginLeft: width * 0.01,
    },
    favoriteIconContainer: {
        marginLeft: 'auto',
        marginTop: width * 0.01
    },
});