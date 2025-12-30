import supabase from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';
import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

type AuthContext = {
    session:Session | null;
    user:User | null
}

const AuthContext = createContext<AuthContext>({
    session: null,
    user: null
}

)
export default function AuthProviders({children }:PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null)
    const [profile,setProfile] = useState();
   
    
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
    })
}, [])
    useEffect(() => {
        if (!session?.user) {
            return;
        }
        const fetchProfile = async () => {
            let {data, error} = await supabase.from('profiles').select('*').eq('id',session.user.id).single()
            setProfile(data);
        }
        
    },[session?.user])
    console.log("hw")
    console.log(session?.user.id)
    console.log(profile)

    return (
    <AuthContext.Provider value= {{session, user: session?.user ?? null}}> {children}</AuthContext.Provider>
)
}


export const useAuth = () => useContext(AuthContext)