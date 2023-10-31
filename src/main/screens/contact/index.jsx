import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../../data/demoData";
import Header from "../../../components/Header";
import { useTheme } from "@mui/material";
import { useState } from "react";
import Serifng from "../../../mod/apiRequestController";
import { tokens } from "../../../themes";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dealer = new Serifng("contacts/");

  const [tempMok, setTemp] = useState([]);
  if (tempMok.length === 0) {
    dealer
      .makeGetRequest()
      .then((data) => {
        if (data.length !== 0) {
          setTemp(data);
        } else {
          mockDataContacts.forEach((item) => {
            delete item["id"];
            dealer
              .makePostRequest(item)
              .then((response) => console.log(response))
              .catch((e) => console.log(`You got an Error bro : ${e}`));
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={tempMok}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
