import { useAuth } from "@/components/AuthProviders";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
    const {user} = useAuth();

    console.log("user data",user)
    if (user) {
        return <Redirect href="/(home)" />
    }

    return <Stack />
    
}
