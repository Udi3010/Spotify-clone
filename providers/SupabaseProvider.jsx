"use client";
// import { Database } from "@types_db";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";


const SupabaseProvider = ({children})=>{
    const [supabaseClient] = useState(()=>
        createClientComponentClient()
    );

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    );
}

export default SupabaseProvider;