import React, { useContext } from 'react';
import { useAuth } from '../contexts/authentication';

import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';

export default function Routes(){
 
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <SignRoutes />;
};