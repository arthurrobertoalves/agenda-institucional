import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../Pages/Welcome/index'
import SignIn from '../Pages/SignIn/index'
import Home from '../Pages/Home/index'
import SignUp from '../Pages/SignUp/index'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
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
                name="Welcome"
                component={Welcome}
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
