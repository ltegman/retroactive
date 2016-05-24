import Blink from '../src/Blink';
import Marquee from '../src/Marquee';
import React from 'react';
import { render } from 'react-dom';

const testElements = (
  <div>
    <Blink>This should blink</Blink>
    <Marquee>This should scroll</Marquee>
  </div>
);

render(testElements, document.getElementById('app'));
