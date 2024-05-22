import { Heading, Icon, IconButton, View, } from "native-base";
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import { StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { stylesHeader } from "./styles";

const { width } = Dimensions.get('window');

export default function Header() {
    const ITEM_WIDTH = width * 0.65;

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <LinearGradient
                colors={['#2e0608', '#ab0707']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={stylesHeader.container}
            >
                <View style={stylesHeader.center}>
                    <Image source={{ uri: 'https://cdn.discordapp.com/attachments/900552866350112852/1239708308009386115/pra_tirar-Photoroom.png-Photoroom.png?ex=6643e7d5&is=66429655&hm=5df9c81a97e36ddef13fbd7c1ba47d47c656aa28c0aade5604aaa3951e70f414&' }}
                        style={{
                            width: ITEM_WIDTH * 0.65,
                            height: ITEM_WIDTH * 0.145,
                        }} />
                </View>
            </LinearGradient>
        </>
    )
}
