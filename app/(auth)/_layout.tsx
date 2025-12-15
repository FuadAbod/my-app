import { useAuth } from "@/components/AuthProviders";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
    const {user} = useAuth();
    console.log(user)
    
    if (user) {
        return <Redirect href='/(home)/profile_creation' />
    }

    return <Stack />
    
}
