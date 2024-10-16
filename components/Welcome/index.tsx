import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {images} from "@/constants";
import {router} from "expo-router";
import CustomButton from "@/core/components/CustomButton";

const Welcome: React.FC = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: "100%"}}>
                <View className="w-full items-center px-4 h-full justify-center">
                    <Image source={images.logo} className="w-[120px] h-[84px]" resizeMode="contain"/>
                    <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain"/>
                    <View className="mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            Discover Endless Possibilities with {' '}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>
                        <Image source={images.path} className="w-[136px] h-[15px] bottom-2 left-52"
                               resizeMode="contain"/>
                    </View>
                    <Text className="text-gray-100 mt-7 text-center">
                        Where creativity meets innovation: embark on a journey of limitless exploration with Aora
                    </Text>
                    <CustomButton containerStyles="w-full mt-10" title="Continue with Email" handlePress={() => {
                        router.push("/sign-in")
                    }}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Welcome;