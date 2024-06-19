import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeaturedJobs from './FeaturedJobs';
import PopularJobs from './PopularJobs';

export default function Home({ route }) {
    const { name, email } = route.params;

    const jobData = [
        { id: '1', jobTitle: 'Software Engineer', companyName: 'Facebook', amount: '$180,000', location: 'Accra, Ghana', icon: require('../assets/facebook.png'), backgroundColor: '#3385ff' },
        { id: '2', jobTitle: 'Project Manager', companyName: 'Google', amount: '$160,000', location: 'Kumasi, Ghana', icon: require('../assets/google.png'), backgroundColor: '#002966' },
        { id: '3', jobTitle: 'Backend Developer', companyName: 'Nvidia', amount: '$200,000', location: 'Beijing, China', icon: require('../assets/nvidia.png'), backgroundColor: '#00b33c' },
        { id: '4', jobTitle: 'Data Analyst', companyName: 'TikTok', amount: '$120,000', location: 'Accra, Ghana', icon: require('../assets/tiktok.png'), backgroundColor: '#000' },
        { id: '5', jobTitle: 'System Administrator', companyName: 'Apple', amount: '$540,000', location: 'New York, USA', icon: require('../assets/apple.png'), backgroundColor: '#5c8a8a' },
        { id: '6', jobTitle: 'Customer Service', companyName: 'Wells Fargo', amount: '$230,000', location: 'Cape Coast, Ghana', icon: require('../assets/wells fargo.png'), backgroundColor: '#ff8c66' },
        { id: '7', jobTitle: 'Game Developer', companyName: 'Ubisoft', amount: '$800,000', location: 'Accra, Ghana', icon: require('../assets/ubisoft.png'), backgroundColor: '#004d99' },
        { id: '8', jobTitle: 'Assistant Manager', companyName: 'Starbucks', amount: '$5,000', location: 'Accra, Ghana', icon: require('../assets/starbucks.png'), backgroundColor: '#009933' },
    ];

    const popularJobData = [
        { id: '1', jobTitle: 'Jr Executive', companyName: 'Burger King', amount: '$96,000/y', location: 'Los Angeles, US', icon: require('../assets/burger_king.png'), backgroundColor: '#fff' },
        { id: '2', jobTitle: 'Sales Manager', companyName: 'Beats', amount: '$84,000/y', location: 'Florida, US', icon: require('../assets/beats.png'), backgroundColor: '#fff' },
        { id: '3', jobTitle: 'Software Engineer', companyName: 'Facebook', amount: '$86,000/y', location: 'Florida, US', icon: require('../assets/facebook.png'), backgroundColor: '#fff' },
        { id: '4', jobTitle: 'Backend Developer', companyName: 'Nvidia', amount: '$90,000/y', location: 'Los Angeles, US', icon: require('../assets/nvidia.png'), backgroundColor: '#fff' },
        { id: '5', jobTitle: 'Chef', companyName: 'KFC', amount: '$60,000/y', location: 'Florida, US', icon: require('../assets/kfc.png'), backgroundColor: '#fff' },
        { id: '6', jobTitle: 'System Admin', companyName: 'Apple', amount: '$72,000/y', location: 'Florida, US', icon: require('../assets/apple.png'), backgroundColor: '#fff' },
        { id: '7', jobTitle: 'Frontend Dev', companyName: 'Twitter', amount: '$75,000/y', location: 'Los Angeles, US', icon: require('../assets/twitter.png'), backgroundColor: '#fff' },
        { id: '8', jobTitle: 'Sound Engineer', companyName: 'JBL', amount: '$50,000/y', location: 'Florida, US', icon: require('../assets/jbl.png'), backgroundColor: '#fff' }
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.names}>{name}</Text>
                <Text style={styles.mail}>{email} </Text>
                <View style={styles.image}>
                    <Image source={require('../assets/Ellipse.png')} />
                    <View>
                        <Text style={styles.dot}>.</Text>
                    </View>
                </View>
                <View style={styles.iconContainer}>
                    <TextInput placeholder='Search a job or position' style={styles.jobsearch} />
                    <View style={styles.searchIcon}>
                        <Icon name='search' color={'#bfbfbf'} size={20} />
                        <View style={styles.slider}>
                            <Icon name="sliders" size={30} color={'#bfbfbf'} />
                        </View>
                    </View>
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.largeText}>Featured Jobs</Text>
                            <Text style={styles.smallText}>See all</Text>
                        </View>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={jobData}
                            renderItem={({ item }) => (
                                <FeaturedJobs
                                    jobTitle={item.jobTitle}
                                    companyName={item.companyName}
                                    backgroundColor={item.backgroundColor}
                                    amount={item.amount}
                                    location={item.location}
                                    icon={item.icon}
                                />
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.largeText}>Popular Jobs</Text>
                        <Text style={styles.smallText}>See all</Text>
                    </View>
                    <View style={{height:360,paddingBottom:10}}>
                    <FlatList
                    
                        showsHorizontalScrollIndicator={false}
                        data={popularJobData}
                        renderItem={({ item }) => (
                            <PopularJobs
                                jobTitle={item.jobTitle}
                                companyName={item.companyName}
                                backgroundColor={item.backgroundColor}
                                amount={item.amount}
                                location={item.location}
                                icon={item.icon}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Set the background color to gray
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 30,
    },
    image: {
        display: 'flex',
        alignSelf: 'flex-end',
        marginTop: -50,
    },
    dot: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'red',
        marginTop: -75,
        marginLeft: 38,
    },
    names: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    mail: {
        color: '#bfbfbf',
        fontSize: 16,
    },
    jobsearch: {
        width: 263,
        height: 48,
        backgroundColor: '#e6e6e6',
        borderRadius: 15,
        paddingLeft: 40,
        marginVertical: 20,
    },
    searchIcon: {
        top: -55,
        left: 15,
    },
    slider: {
        display: 'flex',
        alignSelf: 'flex-end',
        marginHorizontal: 30,
        backgroundColor: '#e6e6e6',
        borderRadius: 15,
        top: -33,
        padding: 10,
    },
    iconContainer: {
        marginVertical: 10,
      
        
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    largeText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    smallText: {
        marginRight: 22,
        color: '#bfbfbf',
        fontSize: 14,
    },
});
