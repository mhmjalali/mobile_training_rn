import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import SignUpHeader from "./Header";
import SignUpForm from "./Form";

const SignUpComponent: React.FC = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: "100%"}}>
                <View className="w-full h-full px-4 justify-center">
                    <SignUpHeader/>
                    <SignUpForm/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpComponent;