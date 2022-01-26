import { Box, Grid, Typography } from '@material-ui/core';
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
          <Box>
            <Typography variant="h4" color="primary">
              {cityData.find((data) => data.code === selectedCity).name}
            </Typography>
          </Box>
          {dustFilterList.length !== 0 ? (
            <Grid container spacing={3}>
              {dustFilterList.map((dustCard) => (
                <DustCard key={dustCard.dataTime} dustData={dustCard} />
              ))}
            </Grid>
          ) : (
            <Box>
              <Typography variant="h4" color="textSecondary">
                No Content...
              </Typography>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Content;
