import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'
import RightCardFooter from './RightCardFooter';
import LeftCardFooter from './LeftCardFooter';
import LinearGradient from 'react-native-linear-gradient';


const CardFooter = ({ trip }) => {
    return (
        <View style={styles.cardFooter}>
            <Header 
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors: ['silver', 'steelblue'],
                    start: { x: 1, y: 3.5 },
                    end: { x: 0, y: 0.5 },
                }}
                leftComponent={<LeftCardFooter />}
                centerComponent={
                    <View>
                        <Text style={styles.text}> Add Live/other feedback{trip.title}</Text>
                    </View>
                }
                rightComponent={<RightCardFooter />}
            />
        </View>
    );
};
CardFooter.defaultProps = {
    title: 'TripBook',
    name: {
        firstName: '',
        lastName: '',
    },
};
const styles = StyleSheet.create({
    cardFooter: {
        // alignItems: 'center',
        backgroundColor: '#001f7f',
        marginBottom: 0,
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
export default CardFooter;
