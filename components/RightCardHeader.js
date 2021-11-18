import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const RightCardHeader = ({ trip }) => {
    return (
        <View >
            <Text style={styles.text}>Info+</Text>
        </View>
    );
};
RightCardHeader.defaultProps = {
    title: 'TripBook',
    name: {
        firstName: '',
        lastName: '',
    },
};
const styles = StyleSheet.create({
    rightCardHeader: {
        // alignItems: 'right',
        marginBottom: 20,
    },
    text: {
        color: 'gold',
        fontSize: 15,
        letterSpacing: 2,
    },
});
export default RightCardHeader;
