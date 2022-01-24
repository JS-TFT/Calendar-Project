import { Typography } from '@material-ui/core';
import React from 'react';

const Description = () => {
  return (
    <>
      <Typography>
        <>0 ~ 30 좋음</>
      </Typography>
      <Typography>
        <>30 ~ 80 보통</>
      </Typography>
      <Typography>
        <>81 ~ 150 나쁨</>
      </Typography>
      <Typography>
        <>151이상 매우 나쁨</>
      </Typography>
    </>
  );
};

export default Description;
