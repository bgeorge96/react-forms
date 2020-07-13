import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import {withRouter,Link} from 'react-router-dom';
import routes from '../Routes';


class AppNav extends React.Component {
    constructor(props) {
        super(props);
    
        this.activeRoute = this.activeRoute.bind(this);
    }
    
    activeRoute(routeName) {
        return this.props.location.pathname === routeName ? true : false;
    }

    render(){
        return (
            <React.Fragment>
                <AppBar position="fixed" className={this.props.classes.appBar}>
                    <Toolbar>
                    <Typography variant="h6" noWrap>
                        Brandon's Application
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={this.props.classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: this.props.classes.drawerPaper,
                    }}
                    >
                    <Toolbar />
                    <div className={this.props.classes.drawerContainer}>
                        <MenuList>
                            {routes.map((prop, key) => {
                                return (
                                    <Link to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                                    <MenuItem selected={this.activeRoute(prop.path)}>
                                        <ListItemIcon>
                                            <prop.icon />
                                        </ListItemIcon>
                                        <ListItemText primary={prop.sidebarName} />
                                    </MenuItem>
                                    </Link>
                                );
                            })}
                        </MenuList>
                    </div>
                </Drawer>
            </React.Fragment>
        )
    }
}

export default withRouter(AppNav);