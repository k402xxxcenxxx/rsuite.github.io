import React from 'react';
import { Tree } from '../../rsuiteSource';
import data from '../../resources/data/city';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Tree',
  examples: ['basic'],
  dependencies: {
    Tree,
    data
  }
});
