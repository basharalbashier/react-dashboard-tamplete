import { Box } from "@mui/material";
import Header from "../../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box d isplay="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle={"Welcome to your dashboard fox"} />
      </Box>
    </Box>
  );
};

export default Dashboard;
