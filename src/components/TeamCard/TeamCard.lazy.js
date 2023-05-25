import React, { lazy, Suspense } from 'react';

const LazyTeamCard = lazy(() => import('./TeamCard'));

const TeamCard = props => (
  <Suspense fallback={null}>
    <LazyTeamCard {...props} />
  </Suspense>
);

export default TeamCard;
