import React from 'react';

import classes from './NavigationItems.css'

import NavigationItem from '../NavigationItem/NavigationItem'

const NavigationItems = (props) =>
(
<ul className={classes.NavigationItems}>

<NavigationItem link="/" exact active> Burger Builder
</NavigationItem>
<NavigationItem link="/orders">
Orders
</NavigationItem>
{props.isAuthenticated ?<NavigationItem link="/auth">
Logout</NavigationItem>:<NavigationItem link="/logout">
Authentication</NavigationItem>}

</ul>

);

export default NavigationItems