import { createClient , SupabaseClient} from '@supabase/supabase-js'
import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl: string= 'https://jrxgluhygcmvfrkwylvv.supabase.co'
const supabaseKey:string= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyeGdsdWh5Z2NtdmZya3d5bHZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MDg1MDYsImV4cCI6MjAyNjA4NDUwNn0.gjXhcXFosi2qR3zymqBWyN0kmmBrd0Pkxl5qPGViOPI'
export const supabase:SupabaseClient = createClient(supabaseUrl, supabaseKey, {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
// AppState.addEventListener('change', (state) => {
//     if (state === 'active') {
//       supabase.auth.startAutoRefresh()
//     } else {
//       supabase.auth.stopAutoRefresh()
//     }
//   })