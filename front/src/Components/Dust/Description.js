import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../Styles/styles';

const Description = () => {
  const styles = useStyles();

  return (
    <Box className={styles.box}>
      <Typography variant="h4" color="primary">
        미세먼지 농도
      </Typography>

      <Box className={styles.box}>
        <Grid container spacing={2}>
          <Grid item md={3} sm={6} xs={12}>
            <Typography variant="h6" align='center'>0 ~ 30</Typography>
            <Typography variant="h5" align='center' color="primary">
              좋음
            </Typography>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Typography variant="h6" align='center'>31 ~ 80</Typography>
            <Typography variant="h5" align='center' color="textSecondary">
              보통
            </Typography>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Typography variant="h6" align='center'>81 ~ 150</Typography>
            <Typography variant="h5" align='center' color="secondary">
              나쁨
            </Typography>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Typography variant="h6" align='center'>151 이상</Typography>
            <Typography variant="h5" align='center' color="secondary">
              매우 나쁨
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container justifyContent='flex-end'>
        <Grid item sm={5} xs={12}>
        <Typography variant="subtitle1" align='center'>미세먼지(PM10) 단위: ㎍/㎥</Typography>
        </Grid>
        <Grid item sm={7} xs={12}>
          <Typography variant="subtitle1" align='right'>
            한국환경공단_에어코리아_대기오염통계 현황
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" align='right'>
            에어코리아_대기오염통계 서비스_기술문서_v1.0
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Description;
