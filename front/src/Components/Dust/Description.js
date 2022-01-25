import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../Styles/styles';
import { dustStateList } from './DustList';

const Description = () => {
  const styles = useStyles();

  return (
    <Box className={styles.box}>
      <Typography variant="h4" color="primary">
        미세먼지 농도
      </Typography>
      <Box className={styles.box}>
        <Grid container spacing={2}>
          {dustStateList.map((data) => (
            <Grid item md={3} sm={6} xs={12}>
              <Typography variant="h6" align="center">
                {data.text}
              </Typography>
              <Typography variant="h5" align="center" color={data.color}>
                {data.state}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid container>
        <Grid item sm={5} xs={12}>
          <Typography variant="subtitle1" align="right">
            미세먼지(PM10) 단위: ㎍/㎥
          </Typography>
        </Grid>
        <Grid item sm={7} xs={12}>
          <Typography variant="subtitle1" align="right" color="textPrimary">
            한국환경공단_에어코리아_대기오염통계 현황
          </Typography>
          <Typography variant="subtitle2" align="right" color="textSecondary">
            에어코리아_대기오염통계 서비스_기술문서_v1.0
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Description;
