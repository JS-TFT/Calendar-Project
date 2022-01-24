import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedCityState } from '../../Recoil/atoms';
import { dustFilterListState } from '../../Recoil/selectors';
import DustCard from './DustCard';
import { cityData } from './DustList';

const Content = () => {
  const selectedCity = useRecoilValue(selectedCityState);
  const dustFilterList = useRecoilValue(dustFilterListState);

  return (
    <>
      {selectedCity && (
        <>
          <Typography variant="h4" color="primary">
            {cityData.find((data) => data.code === selectedCity).name}
          </Typography>
          <Grid container spacing={3}>
            {dustFilterList.map((dustCard) => (
              <DustCard key={dustCard.dataTime} dustData={dustCard} />
            ))}
          </Grid>
          
        </>
      )}
    </>
  );
};

export default Content;
