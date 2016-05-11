import Blink from '../src/Blink';
import React from 'react';
import { render } from 'react-dom';

render(<Blink>This should blink</Blink>, document.getElementById('app'));
