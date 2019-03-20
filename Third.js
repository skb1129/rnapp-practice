import React, {PureComponent,Suspense,lazy} from 'react';
import {View} from 'react-native';

import logModuleInfo from './logModuleInfo';

logModuleInfo('Third.js file');

const TheHugeModule = lazy(() => import('./TheHugeModule'))

class Third extends PureComponent {
  static navigationOptions = {
    title: 'Third Screen'
  };

  constructor(props) {
    super(props);
    logModuleInfo('Third Constructor');
  }

  render() {
    const modules = require.getModules();
    const moduleIds = Object.keys(modules);
    const bigModuleId = moduleIds.find(moduleId => modules[moduleId].verboseName.includes('TheHugeModule'))
    console.log(modules[bigModuleId]);
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Suspense fallback={<View />}>
          <TheHugeModule />
        </Suspense>
      </View>
    );
  }
}

export default Third;
