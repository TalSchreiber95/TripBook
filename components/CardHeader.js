import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LeftCardHeader from './LeftCardHeader';
import RightCardHeader from './RightCardHeader';
import { Header } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

const CardHeader = ({ trip }) => {
    return (
        <View style={styles.cardHeader}>
            <Header style={styles.header}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors: ['black', 'blue'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 3.5 },
                }}
                leftComponent={<View><LeftCardHeader /></View>}
                centerComponent={
                    <View>
                        <Text style={styles.text}>{trip.tripName}</Text>
                    </View>
                }
                rightComponent={<View><RightCardHeader /></View>}
            />
        </View>
    );
};
CardHeader.defaultProps = {
    title: 'TripBook',
    name: {
        firstName: '',
        lastName: '',
    },
};
const styles = StyleSheet.create({
    cardHeader: {
        // alignItems: 'center',
        backgroundColor: '#001f7f',
        marginBottom: 0,
        // height:200,
    },
    barHeader: {
        // color:'red',
        // backgroundColor:"blue",
        // height:40
    },
    text: {
        color: 'gold',
        fontSize: 15,
        letterSpacing: 2,
    },
    name: {
        color: 'white',
        fontSize: 20,
        paddingBottom: 20,
        paddingTop: 10,
    },
});
export default CardHeader;
