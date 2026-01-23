import supabase from '@/lib/supabase';
export const tokenProvider = async () => {
  // Create a single supabase client for interacting with your database
  
  const { data,error } = await supabase.functions.invoke('stream-token',{body: { name: 'Functions' }})
  

  return data.token;
}