import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');

const FavoriteButton = () => {
    const [favoriteButtonPressed, setFavoriteButtonPressed] = useState(false);

    return (
        <TouchableOpacity onPress={() => setFavoriteButtonPressed(!favoriteButtonPressed)}>
            {favoriteButtonPressed ? (
                <Animatable.View animation="bounceIn">
                    <MaterialCommunityIcons name="heart" size={24} color="#941317" />
                </Animatable.View>
            ) : (
                <MaterialCommunityIcons name="heart-outline" size={24} color="#dbdbdb" />
            )}
        </TouchableOpacity>
    );
}

export default FavoriteButton;