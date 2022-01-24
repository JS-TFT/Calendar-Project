import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../Styles/styles';

const Description = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography variant="h4" color="primary">
        날씨 API
      </Typography>
      <Box className={classes.box}>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam fugiat ipsa placeat neque, officia vero. Consectetur quisquam molestias quis sit, fuga, quae modi vel sequi quo tempore, eos voluptas!
        </Typography>
        <Grid container></Grid>
        <Typography variant="subtitle1" align="right" color="textPrimary">
          기상청_지상(종관, ASOS) 일자료 조회서비스
        </Typography>
        <Typography variant="subtitle2" align="right" color="textSecondary">
          기상청02_지상(종관,ASOS)일자료_조회서비스_오픈API활용가이드
        </Typography>
      </Box>
    </Box>
  );
};

export default Description;
