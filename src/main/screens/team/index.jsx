import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../themes";
import { mockDataTeam } from "../../../data/demoData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../../components/Header";
import Serifng from "../../../mod/apiRequestController";
//import CircularIndeterminate from "../../../mod/circularActivity";
import { useState } from "react";
const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dealer = new Serifng("employees");

  const [tempMok, setTemp] = useState([]);
  if (tempMok.length === 0) {
    dealer
      .makeGetRequest()
      .then((data) => {
        if (data.length !== 0) {
          setTemp(data);
        } else {
          mockDataTeam.forEach((item) => {
            delete item["id"];
            item.age.toString();
            dealer
              .makePostRequest(item)
              .then((response) => console.log(response))
              .catch((e) => console.log("You got an Error bro : ${e}"));
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });


  }

  // tempMok = data;
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={tempMok} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
/**
 * import Serifng from '../../mod/postRequest'


const Team = async() => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dealer = new Serifng("employees");
  // var mockDataTeam = await dealer.makeGetRequest(dealer.route);


 */
