import React, { lazy, Suspense } from 'react';

const LazyHeader = lazy(() =>
  import('./Header/Header' /* webpackChunkName: "Header" */),
);

const LazyMain = lazy(() =>
  import('./Main/Main' /* webpackChunkName: "Main" */),
);

const LazyFooter = lazy(() =>
  import('./Footer/Footer' /* webpackChunkName: "Footer" */),
);

const App = () => (
  <div className="wrapper">
    <Suspense fallback={<h1>...Loading</h1>}>
      <LazyHeader />
      <LazyMain />
      <LazyFooter />
    </Suspense>
  </div>
);

export default App;
