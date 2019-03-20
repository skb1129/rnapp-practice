import React, {PureComponent} from 'react';
import {Button} from 'react-native';

import logModuleInfo from './logModuleInfo';

logModuleInfo('TheHugeModule.js file');

class TheHugeModule extends PureComponent {
  constructor(props) {
    super(props);
    logModuleInfo('TheHugeModule Constructor');
  }

  render() {
    return (
      <Button title="I am the huge module!" />
    );
  }
}

export default TheHugeModule;
