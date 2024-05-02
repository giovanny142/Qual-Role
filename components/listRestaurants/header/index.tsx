import { Heading, Icon, IconButton, View, } from "native-base";
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import { StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Header() {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#6666eb" barStyle="light-content" />
                <TouchableOpacity style={styles.left}>
                    <MaterialCommunityIcons name={"menu"} size={35} color="#ffffff" />
                </TouchableOpacity>
            <View style={styles.center}>
                <Heading color={'#ffffff'}>QUAL ROLÊ?</Heading>
            </View>
            <View style={styles.right} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6666eb',
        padding: '4%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        flex: 1,
        alignItems: 'flex-start',
    },
    center: {
        flex: 3,
        alignItems: 'center', 
    },
    right: {
        flex: 1,
    },
});