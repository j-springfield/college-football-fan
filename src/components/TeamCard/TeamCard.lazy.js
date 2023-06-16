import React, { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader.js';

const LazyTeamCard = lazy(() => import('./TeamCard'));

const TeamCard = props => (
  <Suspense fallback={<Loader/>}>
    <LazyTeamCard {...props} />
  </Suspense>
);

export default TeamCard;
