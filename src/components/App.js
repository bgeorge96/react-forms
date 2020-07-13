import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import AppNav from './AppNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '../Routes';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppNav classes={classes} />
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            {routes.map((routeInfo, key) => {
              console.log('route', routeInfo.path);
              console.log('comp', routeInfo.component);
              return (
                <Route
                  exact
                  path={routeInfo.path}
                  component={routeInfo.component}
                  key={key}
                />
              );
            })}
            {/* <Route path='/help'>
                        <Typography paragraph>
                            Help Page!
                        </Typography>
                    </Route>
                    <Route path='/'>
                        <Typography paragraph>
                            Home Page!
                        </Typography>
                    </Route> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}
