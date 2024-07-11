import { Text, View, Image } from 'react-native';
import { Input } from '@/components/input';

export default function Index() {
    return ( 
        <View className="flex-1 items-center justify-center">
            <Image source={require("@/assets/logo.png")} className="h-8 w-full p-1" resizeMode="contain" />
            <Text className="text-zinc-400 font-regular text-center text-lg mt-">Planeje sua proxima viagem!</Text>
            <View>
                <Input variant="primary">
                    <Input.Field />
                </Input>
            </View>
        </View>
    )

}