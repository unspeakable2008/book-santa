import React from "react"
import {createDrawerNavigator} from "react-navigation-drawer"
import {AppTabNavigator} from "./AppTabNavigator"
import CustomSidebarMenu from "./CustomSidebarMenu"
import SettingScreen from "../screens/SettingScreen"
import MyDonationScreen from "../screens/MyDonationScreen"
export const AppDrawNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    Setting:{screen:SettingScreen},
    MyDonations:{screen:MyDonationScreen}
},
{
contentComponent:CustomSidebarMenu
},
{
    initialRouteName:"Home"
}
)
