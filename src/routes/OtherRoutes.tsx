// import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

// import Home from '../pages/Home';

// export default function OtherRoutes(){
//  return (
//    <BrowserRouter>
//      <Route path="/" component={Home} />
//    </BrowserRouter>
//  );
// };

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';

const OtherRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
};

export default OtherRoutes;