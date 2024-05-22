import React, { useState } from 'react';
import { ScrollView, Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Bars3CenterLeftIcon } from 'react-native-heroicons/outline';
import { UserIcon } from 'react-native-heroicons/outline';
import { ShoppingBagIcon } from 'react-native-heroicons/outline';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import babelConfig from '../babel.config';
import { SafeAreaView } from 'react-native-safe-area-context';
import AutoSlider from '../components/AutoSlider';
import ExploreNavaratna from '../components/ExploreNavaratna';
import { ArrowRightCircleIcon } from 'react-native-heroicons/outline';
import GifImage from '@lowkey/react-native-gif';
import FastImage from 'react-native-fast-image';
import { PlusIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/FontAwesome';

const logos = [
    require('../assets/images/logo1.png'),
    require('../assets/images/logo2.png'),
    require('../assets/images/logo3.png'),
    require('../assets/images/logo4.png'),
    require('../assets/images/logo5.png'),
    require('../assets/images/logo6.png'),
    // Add more logos as needed
];
const partners = [
    require('../assets/images/partner1.png'),
    require('../assets/images/partner2.png'),
    require('../assets/images/partner3.png'),
    require('../assets/images/partner4.png'),
    require('../assets/images/partner5.png'),
    require('../assets/images/partner6.png'),
]
const HomeScreen = () => {
    const [service, setService] = useState(false);
    const [about, setAbout] = useState(false);
    const [why, setWhy] = useState(false);
    const handleService = () => {
        setService(!service);
    }
    const handleAbout = () => {
        setAbout(!about);
    }
    const handleWhy = () => {
        setWhy(!why);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View className="bg-slate-950 py-2" >
                    <Text className="text-slate-50 text-center">Welcome to Vedicgems ✨</Text>
                </View>
                <View className="py-5 bg-slate-50 flex-row justify-around items-center">
                    <TouchableOpacity><Bars3CenterLeftIcon size={35} color="black" /></TouchableOpacity>

                    <Image source={require('../assets/images/companyname.png')} style={{ width: 170, height: 40, alignSelf: 'center', marginRight: 20 }} />
                    <View className="flex-row gap-2">
                        <TouchableOpacity>
                            <UserIcon size={35} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ShoppingBagIcon size={35} color="black" />
                        </TouchableOpacity>
                    </View>




                </View>
            </View>
            <ScrollView >


                <View className="bg-slate-200 my-3 mx-4">
                    <View className=" flex-row items-center bg-slate-50 px-2 rounded-xl border-2 border-slate-500">
                        <MagnifyingGlassIcon size={30} color="black" />
                        <TextInput
                            className=" text-slate-950 p-2 "

                            placeholder="Search Products..."

                        />
                    </View>

                </View>
                <View className="bg-gray-100 flex-row gap-3 px-5 py-3" >
                    <TouchableOpacity >
                        <Image source={require('../assets/images/Navaratna.png')} style={{ height: 90, width: 180 }} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={require('../assets/images/Gemstone.png')} style={{ height: 90, width: 180 }} />
                    </TouchableOpacity>
                </View>
                <TouchableWithoutFeedback style={styles.featuredCard}>

                    <Image source={require('../assets/images/rubybanner.png')} style={{ width: '100%' }} />
                </TouchableWithoutFeedback>
                <View>
                    <Text className="text-slate-950 text-xl font-semibold text-center mt-4"> Featured in</Text>
                    <AutoSlider logos={logos} />
                </View>

                <View style={styles.exploreSection}>
                    <Text className="text-slate-950 text-lg text-center font-semibold mb-5">Explore Navaratnas</Text>
                    <ExploreNavaratna />
                </View>
                <TouchableOpacity className="mx-6" >
                    <Image source={require('../assets/images/middlebanner.jpg')} style={{ height: 125, width: 360, borderRadius: 20 }} />
                </TouchableOpacity>
                <View style={styles.productSection}>
                    <Text className="text-slate-900 text-lg font-semibold ml-3">Find Your Favorite</Text>
                    <ScrollView horizontal>
                        <TouchableOpacity>
                            <Text style={[styles.cardTitle, { borderColor: '#ea580c', borderWidth: 1 }]}>Rings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.cardTitle}>Pendants</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.cardTitle}>Bracelets</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <ScrollView horizontal className="mt-5">
                        <TouchableOpacity style={styles.productCard}>

                            <Image source={require('../assets/images/bluering.png')} style={styles.productImage} />
                            <Text className="text-md font-semibold" >Princess Diana Inspired Blue Sapphire Ring</Text>
                            <Text className="text-lg text-slate-900 mt-5">₹7090 - ₹146149</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productCard}>

                            <Image source={require('../assets/images/whitegoldring.png')} style={styles.productImage} />
                            <Text className="text-md font-semibold" >Round Opal Cathedral Ring with Diamond Halo</Text>
                            <Text className="text-lg text-slate-900 mt-5">₹649 - ₹1,809</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productCard}>

                            <Image source={require('../assets/images/whitering.png')} style={styles.productImage} />
                            <Text className="text-md font-semibold" >Solitaire Round Diamond Infinity Promise Ring</Text>
                            <Text className="text-lg text-slate-900 mt-5">₹169 - ₹159,179</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productCard}>

                            <Image source={require('../assets/images/rubyring.png')} style={styles.productImage} />
                            <Text className="text-md font-semibold" >Cushion Ruby and Half Moon Diamond Halo Ring</Text>
                            <Text className="text-lg text-slate-900 mt-5">₹1,319 - ₹142,359</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productCard}>

                            <Image source={require('../assets/images/greenring.png')} style={styles.productImage} />
                            <Text className="text-md font-semibold" >Emerald and Diamond Three Stone Ring</Text>
                            <Text className="text-lg text-slate-900 mt-5">₹3,239 - ₹78,149</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productCard}>

                            <Image source={require('../assets/images/yellowring.png')} style={styles.productImage} />
                            <Text className="text-md font-semibold" >Oval Yellow Sapphire Trillium Floral Shank Ring</Text>
                            <Text className="text-lg text-slate-900 mt-5">₹939 - ₹3,649</Text>
                        </TouchableOpacity>

                    </ScrollView>
                    <TouchableOpacity>
                        <Text className="text-slate-900 text-lg  text-center mt-5">View All</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.productSection}>
                    <Text className="text-slate-900 text-lg font-semibold ml-3">Guide to Your Gemstone</Text>
                    <ScrollView horizontal className="mt-5">
                        <TouchableOpacity style={styles.guideCard}>
                            <Image source={require('../assets/images/guide1.jpg')} style={styles.guideImage} />
                            <View className="flex-row items-center justify-around px-4 ">
                                <Text className="text-md font-semibold p-2 text-slate-900" >Fine Jewelry Care: 7 Mistakes You...</Text>
                                <ArrowRightCircleIcon size={20} color="orange" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.guideCard}>

                            <Image source={require('../assets/images/guide2.jpg')} style={styles.guideImage} />

                            <View className="flex-row items-center justify-evenly px-4 ">
                                <Text className="text-md font-semibold p-2 text-slate-900" >Manicure Files: 7 Celebrity Nail...</Text>
                                <ArrowRightCircleIcon size={20} color="orange" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.guideCard}>

                            <Image source={require('../assets/images/guide3.jpg')} style={styles.guideImage} />

                            <View className="flex-row items-center justify-around px-4 ">
                                <Text className="text-md font-semibold p-2 text-slate-900" >Summer Glow Up Loading: 7 Colored...</Text>
                                <ArrowRightCircleIcon size={20} color="orange" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.guideCard}>

                            <Image source={require('../assets/images/guide4.jpg')} style={styles.guideImage} />

                            <View className="flex-row items-center justify-around px-4 ">
                                <Text className="text-md font-semibold p-2 text-slate-900" >10 Best 1-Carat Diamond Ring...</Text>
                                <ArrowRightCircleIcon size={20} color="orange" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.guideCard}>

                            <Image source={require('../assets/images/guide5.jpg')} style={styles.guideImage} />

                            <View className="flex-row items-center justify-around px-4 ">
                                <Text className="text-md font-semibold p-2 text-slate-900" >Summer Glow Up Loading: 7 Colored...</Text>
                                <ArrowRightCircleIcon size={20} color="orange" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.guideCard}>

                            <Image source={require('../assets/images/guide6.jpg')} style={styles.guideImage} />

                            <View className="flex-row items-center justify-around px-4 ">
                                <Text className="text-md font-semibold p-2 text-slate-900" >5 Iconic Gigi Hadid’s ‘Next in...</Text>
                                <ArrowRightCircleIcon size={20} color="orange" />
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                </View>
                <View>
                    <Text className="text-slate-950 text-xl font-semibold text-center mt-4"> Our Partners</Text>
                    <AutoSlider logos={partners} />
                </View>
                <View>
                    <Text className="text-slate-950 text-xl font-semibold text-center my-4"> An Insider View</Text>
                    <View className="flex-row">
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'black' }}>
                            <FastImage
                                style={{ height: 150, width: 150, paddingHorizontal: 102, borderRadius: 20 }}
                                source={require('../assets/images/gif1.gif')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text className="text-slate-950 text-md font-semibold text-center my-3">Ethical Sourcing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'black' }}>
                            <FastImage
                                style={{ height: 150, width: 150, paddingHorizontal: 102, borderRadius: 20 }}
                                source={require('../assets/images/gif2.gif')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text className="text-slate-950 text-md font-semibold px-3 text-center my-3">Handcrafted to perfection</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row">
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'black' }}>
                            <FastImage
                                style={{ height: 150, width: 150, paddingHorizontal: 102, borderRadius: 20 }}
                                source={require('../assets/images/gif3.gif')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text className="text-slate-950 text-md font-semibold text-center my-3">Step by step inspection</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'black' }}>
                            <FastImage
                                style={{ height: 150, width: 150, paddingHorizontal: 102, borderRadius: 20 }}
                                source={require('../assets/images/gif4.gif')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text className="text-slate-950 text-md font-semibold text-center my-3">High Speed service</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View className="flex-row justify-between items-center pr-3 border-b-2 border-gray-300">
                    <Text className="text-gray-600 text-lg font-semibold text-left my-3 mx-2"> Customer Service</Text>
                    <TouchableOpacity onPress={() => handleService()}>
                        <PlusIcon size={25} color="black" />
                    </TouchableOpacity>

                   

                </View>
                {service && (
                        <View className="ml-2 border-b-2 border-gray-300">
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg  text-left my-3 mx-1">Gemstone Recommendation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg  text-left my-3 mx-1">FAQs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg  text-left my-3 mx-1">Order Status</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg  text-left my-3 mx-1">Return & Exchange</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg  text-left my-3 mx-1">Resize & Repair</Text>
                            </TouchableOpacity>
                         
                           
                        </View>
                    )}
                <View className="flex-row justify-between items-center pr-3 border-b-2 border-gray-300">
                    <Text className="text-gray-600 text-lg font-semibold text-left my-3 mx-2"> About Us</Text>
                    <TouchableOpacity onPress={()=> handleAbout()}>
                        <PlusIcon size={25} color="black" />
                    </TouchableOpacity>
                </View>
                {about && (
                        <View className="ml-2 border-b-2 border-gray-300">
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg  text-left my-3 mx-1">About Vedicgems</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg  text-left my-3 mx-1">Blog</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg  text-left my-3 mx-1">Terms and Conditions</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg  text-left my-3 mx-1">Privacy Policy</Text>
                            </TouchableOpacity>
                          
                         
                           
                        </View>
                    )}
                <View className="flex-row justify-between items-center pr-3 border-b-2 border-gray-300">
                    <Text className="text-gray-600 text-lg font-semibold text-left my-3 mx-2"> Why Vedicgems</Text>
                    <TouchableOpacity onPress={()=> handleWhy()}>
                        <PlusIcon size={25} color="black" />
                    </TouchableOpacity>
                </View>
                {why && (
                        <View className="ml-2 border-b-2 border-gray-300">
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg text-left my-3 mx-1">Pooja Energisation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg text-left my-3 mx-1">Consultation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg text-left my-3 mx-1">Free Shipping</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg text-left my-3 mx-1">Payment Options</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg text-left my-3 mx-1">Enhanced Warranty Plan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text className="text-gray-600 text-lg text-left my-3 mx-1">Certified Jewellery</Text>
                            </TouchableOpacity>
                           
                        </View>
                    )}
                <TouchableOpacity>
                    <Text className="text-slate-950 text-md font-semibold text-left my-4 mx-5">Refer a friend</Text>
                </TouchableOpacity>
                <View className="mt-4 pb-6 border-b-2 border-gray-500">
                    <Text className="text-slate-950 text-xl font-semibold text-left my-3 ml-3">Let's keep in touch! </Text>
                    <TextInput className="bg-slate-50 text-slate-950 p-2 mx-3 rounded-md border-2 border-orange-500" placeholder="Enter Email Address or Mobile Number" />
                    <TouchableOpacity className="bg-orange-400 my-3 mx-3 p-2 rounded-md">
                        <Text className=" text-slate-50 text-lg font-semibold text-center">Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-between mx-2 py-4 border-b-2 border-gray-500">
                    <View className="flex-row justify-around gap-5 mx-3">
                        <TouchableOpacity>
                            <Icon name="facebook-f" size={30} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="instagram" size={30} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="pinterest" size={30} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="youtube-square" size={30} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="twitter" size={30} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Icon name="wheelchair" size={30} color="#000" />
                    </TouchableOpacity>


                </View>
                <View className="flex-row justify-evenly items-center mb-5 mt-4">
                    <Image source={require('../assets/images/pay1.png')} style={{ height: 40, width: 70 }} />
                    <Image source={require('../assets/images/pay2.png')} style={{ height: 35, width: 80 }} />
                    <Image source={require('../assets/images/pay3.png')} style={{ height: 50, width: 80 }} />
                    <Image source={require('../assets/images/pay4.png')} style={{ height: 50, width: 80 }} />

                </View>
                <View className="flex-row justify-evenly items-center">
                    <Image source={require('../assets/images/pay5.png')} style={{ height: 50, width: 80 }} />
                    <Image source={require('../assets/images/pay6.png')} style={{ height: 35, width: 80 }} />
                    <Image source={require('../assets/images/pay7.png')} style={{ height: 50, width: 80 }} />
                    <Image source={require('../assets/images/pay8.png')} style={{ height: 50, width: 80 }} />

                </View>
                <View className="bg-gray-300 py-5 mt-5">
                    <Text className="text-center py-3"> © 2024 Vedicgems All Rights Reserved. | </Text>
                    <Text className="text-center"> Accessibility | Privacy Policy | T&C </Text>
                </View>

            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 10,
        backgroundColor: '#fff',
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    navSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    navCard: {
        width: '45%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    cardTitle: {
        fontWeight: 'medium',
        marginBottom: 10,
        backgroundColor: '#d1d5db',
        padding: 5,
        fontSize: 16,
        color: '#2d3748',
        borderRadius: 5,
        paddingHorizontal: 20,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    navImage: {
        height: 100,
        width: '100%',
    },
    cardButton: {
        marginTop: 10,
        color: 'blue',
    },
    featuredCard: {
        marginVertical: 10,
    },
    featuredImage: {
        height: 200,
        width: '100%',
    },
    exploreSection: {
        padding: 10,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    exploreItems: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    exploreItem: {
        width: '33%',
        textAlign: 'center',
        marginVertical: 5,
    },
    productSection: {
        padding: 10,
        marginTop: 10,

    },
    productCard: {
        width: 200,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    productImage: {
        height: 200,
        width: '100%',
    },
    guideImage: {
        height: 150,
        width: 200,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    guideCard: {
        width: 200,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,

        marginRight: 10,
    }
});

export default HomeScreen;
