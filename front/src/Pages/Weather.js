import { Container } from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Content from '../Components/Weather/Content';
import Description from '../Components/Weather/Description';
import Filter from '../Components/Weather/Filter';
import { submitFormState } from '../Recoil/atoms';

const Weather = () => {
  const submitForm = useRecoilValue(submitFormState);

  return (
    <Container>
      <Filter />
      <Description />
      {submitForm && <Content />}
    </Container>
  );
};

export default Weather;
