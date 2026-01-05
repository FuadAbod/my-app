import { useAuth } from '@/components/AuthProviders'
import UserListItem from '@/components/UserListItem'
import supabase from '@/lib/supabase'
import { Profile } from '@/types/Profile'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

const UsersScreen = () => {
  
    const [users,setUsers] = useState<Profile[]>([])
    
    const {user} = useAuth()

    if (!user) return <ActivityIndicator />
    useEffect(() => {
        
        const fetchUsers = async () => {
            let { data, error } = await supabase
            .from('profiles')
            .select('*')
            .neq('id', user.id); // exclude me

            if (!error){
            setUsers(data ??[]);
            }
    };
    fetchUsers();
  }, []);
    return (
        <FlatList
        data={users}
        renderItem={({item}) => <UserListItem user={item} />} 
        />
    )
}

export default UsersScreen
