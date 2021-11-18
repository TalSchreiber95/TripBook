import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const LeftCardHeader = ({ trip }) => {
    return (
        <View>
            <Text style={styles.text}>20c</Text>
        </View>
    );
};
LeftCardHeader.defaultProps = {
    title: 'TripBook',
    name: {
        firstName: '',
        lastName: '',
    },
};
const styles = StyleSheet.create({
    leftCardHeader: {
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
export default LeftCardHeader;
