import React from 'react';
import {
  ClassComponents, ErrorBoundryClass, ErrorPage,
} from './pages';

const App = () => (
  <ErrorBoundryClass>
    <ClassComponents />
    <ErrorPage />
  </ErrorBoundryClass>
);

export default App;
