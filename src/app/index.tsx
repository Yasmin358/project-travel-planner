import { Text, View, Image } from 'react-native';
import { Input } from '@/components/input';
import { MapPin, Calendar as IconCalendar, Settings2, UserRoundPlus, ArrowRight } from "lucide-react-native";
import { colors } from "@/styles/colors";
import { Button } from '@/components/button';

export default function Index() {
    return ( 
        <View className="flex-1 items-center justify-center px-5">
            <Image style={{ height: 32 }}source={require("@/assets/logo.png")} resizeMode="contain" />
            <Text className="text-zinc-400 font-regular text-center text-lg mt-">Planeje sua proxima viagem!</Text>
            <View className="w-full bg-zinc-900 p-4 rounded-xl my-8 border border-zinc-800">
                <Input>
                    <MapPin color={colors.zinc[400]} size={20} />
                    <Input.Field 
                        placeholder="Para Onde?"
                    />
                </Input>
                <Input>
                    <IconCalendar color={colors.zinc[400]} size={20} />
                    <Input.Field 
                        placeholder="Quando?"
                    />
                </Input>
                <View className="border-b py-3 border-zinc-800">
                    <Button variant="secondary">
                        <Button.Title>Alterar local/data</Button.Title>
                        <Settings2 color={colors.zinc[200]} size={20} />
                    </Button>
                </View>
                <Input>
                    <UserRoundPlus color={colors.zinc[400]} size={20} />
                    <Input.Field 
                        placeholder="Quem vai com você?"
                    />
                </Input>
                <Button>
                    <Button.Title>Continuar</Button.Title>
                    <ArrowRight color={colors.rose[900]} size={20} />
                </Button>
            </View>
            <Text className="text-zinc-500 font-regular text-center text-base">
                Ao planejar sua viagem pela plann.er você automaticamente concorda com os nossos{" "} 
                 <Text className="text-zinc-300 underline">Termos de uso e Politicas de privacidade </Text>
            </Text>
        </View>
    )

}