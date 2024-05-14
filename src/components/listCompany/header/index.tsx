import { Heading, Icon, IconButton, View, } from "native-base";
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import { StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
export default function Header() {
    const { width } = Dimensions.get('window');
    const ITEM_WIDTH = width * 0.65;

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <LinearGradient
                colors={['#2e0608', '#ab0707']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
            >
                {/* <TouchableOpacity style={styles.left}> */}
                {/* <MaterialCommunityIcons name={"menu"} size={width * 0.11} color="#ffffff" /> */}
                {/* </TouchableOpacity> */}
                <View style={styles.center}>
                    {/* <Heading color={'#ffffff'}>QUAL ROLÊ?</Heading> */}
                    <Image source={{ uri: 'https://cdn.discordapp.com/attachments/900552866350112852/1239708308009386115/pra_tirar-Photoroom.png-Photoroom.png?ex=6643e7d5&is=66429655&hm=5df9c81a97e36ddef13fbd7c1ba47d47c656aa28c0aade5604aaa3951e70f414&' }}
                        style={{
                            width: ITEM_WIDTH * 0.65,
                            height: ITEM_WIDTH * 0.145,
                        }} />
                </View>
                {/* <View style={styles.right} /> */}
            </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: '3%',
        paddingTop: StatusBar.currentHeight || 20
    },
    left: {
        flex: 1,
        alignItems: 'flex-start',
    },
    center: {
        alignItems: 'center',
    },
    right: {
        flex: 1,
    },
});