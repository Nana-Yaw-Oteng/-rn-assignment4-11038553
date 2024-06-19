import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PopularJobs({ jobTitle, companyName, backgroundColor, amount, location, icon }) {
    return (
        <View style={[styles.card, { backgroundColor }]}>
            <View style={styles.iconContainer}>
                <Image source={icon} style={styles.icon} />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.jobCompanyContainer}>
                    <Text style={styles.jobTitle}>{jobTitle}</Text>
                    <Text style={styles.companyName}>{companyName}</Text>
                </View>
                <View style={styles.amountLocationContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                    <Text style={styles.location}>{location}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: '#fff',
    },
    iconContainer: {
        marginRight: 10,
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    jobCompanyContainer: {
        flexDirection: 'column',
    },
    jobTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    companyName: {
        fontSize: 14,
        color: '#888',
    },
    amountLocationContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    amount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    location: {
        fontSize: 12,
        color: '#888',
    },
});
