import React from "react";
import { 
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    Image,
    Text
    } from "react-native";

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

type ButtonProps = TouchableOpacityProps & {
    title: string
}

export function ButtonIcon({ title, ...rest }: ButtonProps){
    return (
        <TouchableOpacity 
        style={styles.container} 
        {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}