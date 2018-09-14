import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SiderDrawer'

class  Layout extends Component {
    state = {
        ShowSideDrawer: false
        }
SideDrawerCloseHandler=() =>
{
        this.setState({
ShowSideDrawer:false
        })
}

SideDrawerToggleHandler = () => {
this.setState( (prevState) => {
    return {ShowSideDrawer: !prevState.ShowSideDrawer};
});

}
    render() {
        return (
            <Aux>
            <Toolbar DrawerToggleClicked={this.SideDrawerToggleHandler}/>
            <SideDrawer open={this.state.ShowSideDrawer} closed = {this.SideDrawerCloseHandler}/>
            <main className={classes.Content}>
            {this.props.children}
            </main>
            </Aux>

        );

    }
}

export default Layout;