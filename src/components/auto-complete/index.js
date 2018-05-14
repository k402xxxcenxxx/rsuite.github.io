import React from 'react';
import { AutoComplete, InputGroup, Icon } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'AutoComplete',
  examples: ['basic', 'email', 'render-item', 'disabled', 'input-group'],
  dependencies: { InputGroup, AutoComplete, Icon }
});
