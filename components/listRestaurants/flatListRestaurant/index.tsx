import { Text, View } from "native-base";
import { StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons'

export const ListRestaurants = ({ ...props }: any) => {
    const [favoriteButtonPressed, setFavoriteButtonPressed] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.card}>
                    <View style={styles.content}>
                        <Image style={styles.image} source={{ uri: props.image }} />
                        <View style={styles.textContainer} >
                            <Text style={styles.titleCard}>{props.name}</Text>
                            <View style={styles.detailsCard}>
                                <View style={styles.footerCard}>
                                    <Text style={styles.description}>Pessoas presentes:</Text>
                                    <View style={styles.detailsCapacity}>
                                        <Text style={styles.peopleCount}>20</Text>
                                        <MaterialCommunityIcons style={{ alignSelf: 'center', marginLeft: width * 0.01, color: 'black' }}
                                            name={"account-multiple-check-outline"} size={width * 0.04} />
                                    </View>
                                </View>
                                <View style={styles.footerCard}>
                                    <Text style={styles.description}>Lugares disponíveis:</Text>
                                    <View style={styles.detailsCapacity}>
                                        <Text style={styles.peopleCount}>10</Text>
                                        <Icon name="table-bar" size={width * 0.036} style={{ alignSelf: 'center', marginLeft: width * 0.01, color: 'black' }}/>
                                        {/* <MaterialCommunityIcons style={{ alignSelf: 'center', marginLeft: width * 0.01, color: 'black' }}
                                            name={"chair-school"} size={width * 0.04} /> */}
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontSize: width * 0.03, marginLeft: 'auto', color: 'black' }}>Atualizado 30/04 às 17:45</Text>
                        </View>
                        <View style={styles.favoriteIconContainer} >
                            <TouchableOpacity onPress={() => setFavoriteButtonPressed(!favoriteButtonPressed)}>
                                {favoriteButtonPressed ?
                                    <Animatable.View animation="bounceIn">
                                        <MaterialCommunityIcons name={"heart"} size={24} color="#56070c" />
                                    </Animatable.View>
                                    :
                                    <MaterialCommunityIcons name={"heart-outline"} size={24} color="#dbdbdb" />
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
        backgroundColor: "#dbdada",
        paddingHorizontal: width * 0.015,
        paddingVertical: width * 0.01,
    },
    card: {
        borderRadius: width * 0.04,
        backgroundColor: 'white'
    },
    detailsCard: {
        flexDirection: "column",
        backgroundColor: '#dbdada',
        borderRadius: width * 0.02,
        width: '65%',
    },
    detailsCapacity: {
        flexDirection: 'row',
        marginLeft: width * 0.01,
    },
    textContainer: {
        marginLeft: width * 0.01,
        width: width * 0.65,
    },
    footerCard: {
        width: 'auto',
        flexDirection: "row",
        marginLeft: width * 0.01,

    },
    content: {
        flexDirection: 'row',
        padding: width * 0.015,
    },
    image: {
        width: width * 0.20,
        height: width * 0.20,
        borderRadius: (width * 0.20) / 2,
    },
    titleCard: {
        fontSize: width * 0.041,
        fontWeight: "bold",
        color: "black",
        marginLeft: width * 0.009,
        width: 'auto',
    },
    description: {
        fontSize: width * 0.032,
        color: "#4d4c4c",
    },
    peopleCount: {
        fontSize: width * 0.032,
        color: "black",
        marginLeft: width * 0.01,
        fontWeight: "bold",
    },
    favoriteIconContainer: {
        marginLeft: 'auto',
        marginTop: width * 0.01
    },
});