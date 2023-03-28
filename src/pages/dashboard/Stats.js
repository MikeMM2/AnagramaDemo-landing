// import { useEffect } from 'react';
// import { StatsContainer, Loading, ChartsContainer } from '../../components';
// import { useDispatch, useSelector } from 'react-redux';
// import { showStats } from '../../features/allJobs/allJobsSlice';
import React from 'react';

const Stats = () => {
  return <h1>Stats</h1>
}



// const Stats = () => {
//   const { isLoading, monthlyApplications } = useSelector(
//     (store) => store.allJobs
//   );

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(showStats());
//   }, []);
//   return (
//     <>
//       <StatsContainer />
//       {monthlyApplications.length > 0 && <ChartsContainer />}
//     </>
//   );
// };

export default Stats;
