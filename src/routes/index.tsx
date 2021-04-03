// import { useAuth } from '../contexts/authentication';

// import SignRoutes from './SignRoutes';
// import OtherRoutes from './OtherRoutes';

// export default function Routes(){
 
//   const { signed } = useAuth();
//   console.log(signed)
//   return signed ? <OtherRoutes /> : <SignRoutes />;
// };

import React from 'react';
import { useAuth } from '../contexts/authentication';

import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;