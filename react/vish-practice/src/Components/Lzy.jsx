import React from 'react';
export const LazyComponent = React.lazy(() => import('./LazyComponent').then(module => ({ default: module.MyComponent })));