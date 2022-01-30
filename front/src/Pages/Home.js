import { React, useEffect } from "react";
import { Container } from "@material-ui/core";
import Calendar from "../Components/Calendar/Calendar";
import axios from "axios";
import { useRecoilState } from "recoil";
import { eventListState } from "../Recoil/atoms";
import { REACT_APP_API_ENDPOINT } from "../Constants/AppVariables";

const Home = () => {
  const [, setEventList] = useRecoilState(eventListState);

  useEffect(() => {
    const fetchEventData = async () => {
      const res = await axios.get(`${REACT_APP_API_ENDPOINT}`);
      setEventList(res.data);
    };

    fetchEventData();
  }, [setEventList]);

  return (
    <Container>
      <Calendar />
    </Container>
  );
};

export default Home;
