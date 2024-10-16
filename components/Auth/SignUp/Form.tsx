import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {icons} from "@/constants";
import * as yup from 'yup';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import CustomButton from "@/core/components/CustomButton";
import {Link, router} from "expo-router";

interface FormData {
    name: string;
    email: string;
    password: string;
}

const schema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
}).required();

const SignInForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        router.push("/home")
    };

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View className="w-full pt-14 gap-4">
            <View>
                <Text className="text-white font-semibold mb-2 text-lg">Name</Text>
                <Controller
                    control={control}
                    name="name"
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            className={`w-full rounded-lg p-4 text-white font-psemibold bg-gray-800 ${errors.name ? "border-2 border-red-700" : ""}`}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Enter your name"
                            placeholderTextColor="#fff"
                        />
                    )}
                />
                {errors.name && <Text className="text-red-800">{errors.name.message}</Text>}
            </View>
            <View>
                <Text className="text-white font-semibold mb-2 text-lg">Email</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            className={`w-full rounded-lg p-4 text-white font-psemibold bg-gray-800 ${errors.email ? "border-2 border-red-700" : ""}`}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Enter your email"
                            placeholderTextColor="#fff"
                            keyboardType="email-address"
                        />
                    )}
                />
                {errors.email && <Text className="text-red-800">{errors.email.message}</Text>}
            </View>
            <View>
                <Text className="text-white font-semibold mb-2 text-lg">Password</Text>
                <Controller
                    control={control}
                    name="password"
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            className={`w-full rounded-lg p-4 text-white font-psemibold bg-gray-800 ${errors.password ? "border-2 border-red-700" : ""}`}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Enter your password"
                            placeholderTextColor="#fff"
                            secureTextEntry={showPassword}
                        />
                    )}
                />
                <TouchableOpacity onPress={handlePasswordVisibility}
                                  className="absolute right-3 top-[50px]">
                    <Image source={showPassword ? icons.eye : icons.eyeHide} className="w-8 h-8"/>
                </TouchableOpacity>
                {errors.password && <Text className="text-red-800">{errors.password.message}</Text>}
            </View>
            <View>
                <CustomButton containerStyles="w-full mt-10" title="Sign Up"
                              isDisabled={Object.keys(errors).length > 0}
                              handlePress={handleSubmit(onSubmit)}/>
            </View>
            <View>
                <Text className="text-white text-center text-md">Have an Account? {' '}
                    <Link href="/sign-in" className="font-semibold text-secondary">Sign In</Link>
                </Text>
            </View>
        </View>
    );
};

export default SignInForm;