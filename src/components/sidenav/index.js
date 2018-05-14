import React from 'react';
import { Sidenav, Nav, Button, Icon, Toggle, Dropdown } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Sidenav',
  examples: ['basic', 'appearance', 'toggle', 'divider-panel'],
  dependencies: {
    Icon,
    Button,
    Sidenav,
    Dropdown,
    Toggle,
    Nav
  }
});
