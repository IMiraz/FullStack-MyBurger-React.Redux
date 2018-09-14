import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'



const SideDrawer =(props) => {


    return(
    <Aux>
    <Backdrop show/>
        <div>
            <div className={classes.Logo}>
           <Logo/>
        </div>
    <nav>
       <NavigationItems/>
     </nav>
    </div>
        </Aux>

);
}
export default SideDrawer;