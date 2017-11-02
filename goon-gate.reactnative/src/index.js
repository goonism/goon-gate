import React from 'react';

import {
	Router,
	Stack,
	Scene
} from 'react-native-router-flux';

import Home from 'scenes/Home';

const getSceneStyle = () => ({
	backgroundColor: '#F5FCFF',
	shadowOpacity: 1,
	shadowRadius: 3,
});

const App = () => (
  <Router getSceneStyle={getSceneStyle}>
    <Stack key="root">
			<Scene key="home" component={Home}/>
    </Stack>
  </Router>
);

export default App;
