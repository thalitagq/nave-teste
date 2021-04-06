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
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import EditNaver from '../components/EditNaver'
import Navbar from '../components/Navbar';
import AddNaver from '../components/AddNaver';

const OtherRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={AddNaver}/>
        <Route path="/update" component={EditNaver} />
      </Switch>
    </BrowserRouter>
  );
};

export default OtherRoutes;