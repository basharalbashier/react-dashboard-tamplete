import { Box } from "@mui/material";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../store";

const Dashboard = () => {
  const countee = useSelector((state) => state.cont);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.inc());
  };
  const decrement = () => {
    dispatch(actions.dec());
  };
  const addBy = () => {
    dispatch(actions.addBy());
  };
  return (
    <Box m="20px">
      <Box d isplay="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle={"Welcome to your dashboard fox"} />
        <h1>Counter</h1>
        <h2>{countee}</h2>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>

        <button onClick={addBy}>Add 10</button>
      </Box>
    </Box>
  );
};

export default Dashboard;
