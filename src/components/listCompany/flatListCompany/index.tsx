import { View } from "native-base";
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import ContentCard from "./contentCard";
import { stylesFlatListCompanies } from "./styles";

export const ListCompanies = ({ ...props }: any) => {
    return (
        <View style={stylesFlatListCompanies.container}>
            <TouchableOpacity activeOpacity={0.8}>
                <View style={stylesFlatListCompanies.card}>
                    <ContentCard {...props} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
