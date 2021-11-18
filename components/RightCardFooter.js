import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const RightCardFooter = ({ trip }) => {
    return (
        <View >
            <Text style={styles.text}>Gallery</Text>
        </View>
    );
};
RightCardFooter.defaultProps = {
    title: 'TripBook',
    name: {
        firstName: '',
        lastName: '',
    },
};
const styles = StyleSheet.create({
    rightCardFooter: {
        // alignItems: 'right',
        marginBottom: 20,
    },
    text: {
        color: 'gold',
        fontSize: 15,
        letterSpacing: 2,
    },
});
export default RightCardFooter;
