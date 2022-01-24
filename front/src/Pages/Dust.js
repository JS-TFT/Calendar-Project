import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import axios from 'axios';
import Filter from '../Components/Dust/Filter';
import Content from '../Components/Dust/Content';
import { useRecoilState } from 'recoil';
import { dustDataState } from '../Recoil/atoms';
import Description from '../Components/Dust/Description';

const Dust = () => {
  const [, setDustData] = useRecoilState(dustDataState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: {
            response: {
              body: { items: dustData },
            },
          },
        } = await axios.get('http://localhost:3065/dust');
        setDustData(dustData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [setDustData]);

  return (
    <Container>
      <Filter />
      <Description />
      <Content />
    </Container>
  );
};

export default Dust;
