import { Text, View } from "native-base";
import { Dimensions, Image, StyleSheet } from 'react-native';
import { } from "react-native-gesture-handler";
import CardDetails from "../cardDetails";
import FavoriteButton from "../favoriteButton";
import { stylesContentCard } from "./styles"; 


const ContentCard = ({ ...props }) => {
    return (
        <View style={stylesContentCard.content}>
            <Image style={stylesContentCard.image} source={{ uri: props.image }} />
            <View style={stylesContentCard.textContainer} >
                <Text style={stylesContentCard.titleCard}>{props.name}</Text>
                <CardDetails {...props} />
            </View>
            <View style={stylesContentCard.favoriteIconContainer} >
                <FavoriteButton />
            </View>
        </View>
    );
}

export default ContentCard;