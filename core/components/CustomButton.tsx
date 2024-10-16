import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
    containerStyles?: string;
    textStyles?: string;
    title: string;
    handlePress: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
                                                       containerStyles = '',
                                                       textStyles = '',
                                                       title,
                                                       handlePress,
                                                       isLoading = false,
                                                       isDisabled = false
                                                   }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
            className={`bg-secondary rounded-lg min-h-[62px] 
            items-center justify-center ${containerStyles} 
            ${isDisabled ? "opacity-50" : isLoading ? "opacity-70" : ""}`}
        >
            <Text
                className={`text-primary font-psemibold text-lg ${textStyles}`}>
                {isLoading ? "Is Loading..." : title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;