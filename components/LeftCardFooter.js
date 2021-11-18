import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const LeftCardFooter = ({ trip }) => {
    return (
        <View>
            <Text style={styles.text}>feedbacks</Text>
        </View>
    );
};
LeftCardFooter.defaultProps = {
    title: 'TripBook',
    name: {
        firstName: '',
        lastName: '',
    },
};
const styles = StyleSheet.create({
    leftCardFooter: {
        // alignItems: 'start',
        marginBottom: 20,
        color:'white',
    },
    text: {
        color: 'gold',
        fontSize: 15,
        letterSpacing: 2,
    },
});
export default LeftCardFooter;
