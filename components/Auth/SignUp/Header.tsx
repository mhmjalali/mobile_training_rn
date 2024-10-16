import React from 'react';
import {Image, Text} from 'react-native';
import {images} from "@/constants";

const SignInHeader: React.FC = () => {
    return (
        <>
            <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]"/>
            <Text className="text-2xl text-gray-400 font-pregular mt-3">Sign Up to <Text
                className="text-secondary">Aora</Text></Text>
        </>
    );
};

export default SignInHeader;