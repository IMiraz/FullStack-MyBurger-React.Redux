import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SiderDrawer'

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
            <Toolbar
            isAuthenticated={this.props.isAuthenticated}
             DrawerToggleClicked={this.SideDrawerToggleHandler}/>
            <SideDrawer
            isAuthenticated={this.props.isAuthenticated}
              open={this.state.ShowSideDrawer} closed = {this.SideDrawerCloseHandler}/>
            <main className={classes.Content}>
            {this.props.children}
            </main>
            </Aux>

        );

    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.token !== null
    }


}

export  default connect(mapStateToProps)(Layout);