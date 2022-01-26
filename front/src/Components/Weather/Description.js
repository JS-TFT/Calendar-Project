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
          시간이 걸릴 수 있습니다! 조금만 기다려 주세요!
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
