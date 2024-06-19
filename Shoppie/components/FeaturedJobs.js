import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure you have this import

export default function FeaturedJobs({ jobTitle,companyName,backgroundColor, amount, location, icon }) {
    return (
        <View style={[styles.card, { backgroundColor }]}>
            
            <View style={styles.iconContainer}>
                <Image source={icon} style={styles.icon} />
            </View>
            <View style={styles.topPart}>
            <View style={styles.textContainer}>
                <Text style={styles.jobTitle}>{jobTitle}</Text>
                <Text style={styles.companyName}>{companyName}</Text>

            </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.amount}>{amount}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 5,
    },
    iconContainer: {
        
       
        left:10,
        backgroundColor:'#fff',
        width:50,
        height:50,
        borderRadius:8,
    },
    icon: {
        width: 40,
        height: 40,
        marginHorizontal:5,
        marginVertical:5,
        borderRadius: 20,
    
    },
    textContainer: {
        marginTop: -40,
        marginBottom:60,
        
        
    
    },
    jobTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft:90,
        marginTop:-10,
        marginBottom:8
        
        
    },
    companyName: {
        fontSize: 14,
        color: '#fff',
        marginLeft:90
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    location: {
        fontSize: 14,
        color: '#fff',
    },
    
});
