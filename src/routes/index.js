import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider, useAuth } from "../contexts/AuthContent";

import Welcome from "../Pages/Welcome";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";
import Loading from "../Pages/Loading";
import SignUp from "../Pages/SignUp";
import { useNavigation } from "@react-navigation/native";

import { useEffect } from "react";
import { supabase } from "../lib/supabase";
export default function RootLayout() {
    return (

        <AuthProvider>
            <Routes />
        </AuthProvider>)
}


const Stack = createNativeStackNavigator();

function Routes() {


    const { setAuth } = useAuth()
    const navigation = useNavigation()

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                setAuth(session.user)
                navigation.navigate('Home')
                return;
            }

            setAuth(null)
            navigation.navigate('Welcome')



        })
    }, [])

    return (
        <Stack.Navigator><Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
        />
            <Stack.Screen
                name="Loading"
                component={Loading}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />



        </Stack.Navigator>
    );
}
