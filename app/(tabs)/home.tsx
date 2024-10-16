import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from "@/constants";

const Home: React.FC = () => {

    const handleProfile = () => {
        console.log("profile clicked")
    }

    return (
        <View className="bg-primary px-6 pt-16 h-full">
            <View className="flex-row items-center justify-between">
                <View>
                    <Text className="text-md font-pbold text-gray-600">Welcome Back</Text>
                    <Text className="text-xl font-pbold text-white">Mohammad Jalali</Text>
                </View>
                <TouchableOpacity className="bg-gray-600 p-2 rounded-full" onPress={handleProfile}>
                    <Image source={icons.profile} resizeMode="contain" className="w-5 h-5"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;