import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import './configure';
import {LocalizedApp} from './App';

AppRegistry.registerComponent(appName, () => LocalizedApp);
