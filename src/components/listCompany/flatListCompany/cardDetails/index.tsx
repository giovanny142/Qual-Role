import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { stylesCardDetails } from './styles';

const { width } = Dimensions.get('window');

const CardDetails = ({ ...props }) => {
    return (
        <>
            <View style={stylesCardDetails.detailsCard}>
                <CardDetailItem
                    description="Pessoas presentes:"
                    count={20}
                    icon={<MaterialCommunityIcons name="account-multiple-check-outline" size={width * 0.04} style={stylesCardDetails.iconStyle} />}
                />
                <CardDetailItem
                    description="Lugares disponíveis:"
                    count={10}
                    icon={<Icon name="table-bar" size={width * 0.036} style={stylesCardDetails.iconStyle} />}
                />
            </View>
            <Text style={stylesCardDetails.updateText}>Atualizado 30/04 às 17:45</Text>
        </>
    );
}

const CardDetailItem = ({ description, count, icon }) => {
    return (
        <View style={stylesCardDetails.footerCard}>
            <Text style={stylesCardDetails.description}>{description}</Text>
            <View style={stylesCardDetails.detailsCapacity}>
                <Text style={stylesCardDetails.peopleCount}>{count}</Text>
                {icon}
            </View>
        </View>
    );
}



export default CardDetails;