import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import User from '../pages/user';
import CustomTabBar from '../components/CustomTabBar';
import { AuthProviderList } from '../context/authContext_list';

const MyTabs = createBottomTabNavigator();
export default function BottomRoutes() {
    return (
        <AuthProviderList>
            <MyTabs.Navigator screenOptions={{
                headerShown: false
            }}
                tabBar={props => <CustomTabBar {...props} />}>
                <MyTabs.Screen name='List' component={List} />
                <MyTabs.Screen name='User' component={User} />
            </MyTabs.Navigator>
        </AuthProviderList>

    )
}
