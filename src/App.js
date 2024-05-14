import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Toolbar, Typography } from '@mui/material';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography>
            <Switch>
              <Route exact path='/' component={FirstComponent} />
              <Route exact path='/first-component' component={FirstComponent} />
              <Route exact path='/second-component' component={SecondComponent} />
              <Route exact path='/third-component' component={ThirdComponent} />
            </Switch>
          </Typography>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
