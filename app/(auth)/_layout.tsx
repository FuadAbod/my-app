import { useAuth } from "@/components/AuthProviders";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
    const {user} = useAuth();

    if (user) {
        return <Redirect href='/(profile_creation_page)/profile_creation' />
    }

    return <Stack />
    
}
