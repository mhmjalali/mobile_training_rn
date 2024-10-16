import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import SignInHeader from "./Header";
import SignInForm from "./Form";

const SignInComponent: React.FC = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: "100%"}}>
                <View className="w-full h-full px-4 justify-center">
                    <SignInHeader/>
                    <SignInForm/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignInComponent;