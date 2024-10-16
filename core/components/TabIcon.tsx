import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

interface TabIconProps {
    icon: ImageSourcePropType;
    color: string;
    name: string;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6"/>
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color}}>
                {name}
            </Text>
        </View>
    );
};

export default TabIcon;