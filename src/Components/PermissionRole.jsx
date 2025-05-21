import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  TextField,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import {
  fetchRoles,
  fetchPermissions,
  addpermisssion_role,
  fetchPermissionsForRole,
} from "../api/translationapi";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
//import { DataGridPro } from '@mui/x-data-grid-pro';
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { GridToolbar } from "@mui/x-data-grid-premium";
import { useSnackbar } from "notistack";
import Dropdown from "./Dropdown";
import { Hide } from "devextreme-react/cjs/data-grid";
// import { Width } from "devextreme-react/cjs/chart";
// import { Hide } from "devextreme-react/cjs/data-grid";
const PermissionRole = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [allPermissions, setAllPermissions] = useState([]);
  const [checkedPermissions, setCheckedPermissions] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [loadingPermissions, setLoadingPermissions] = useState(false);
  // const [rowSelectionModel, setRowSelectionModel] = React.useState({
  //   type: "include",
  //   ids: new Set(checkedPermissions),
  // });
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      // hide:true,
      // hide:true,
      // renderCell: (params) => (
      //   <Checkbox
      //     checked={checkedPermissions.includes(params.row.id)}
      //     onChange={() => handleToggle(params.row.id)()}
      //   />
      // ),
    },
    {
      field: "description",
      headerName: "Permission",
      flex: 1,
      //editable: true,
    },
  ];
  useEffect(() => {
    const getRoles = async () => {
      const data = await fetchRoles();
      setRoles(data);
      if (data.length > 0) {
        setSelectedRole(data[0]);
      }
      const allPerms = await fetchPermissions();
      setAllPermissions(allPerms);
    };
    getRoles();
  }, []);

  const loadPermissions = async () => {
    if (!selectedRole) return;
    setLoadingPermissions(true);
    try {
      const assignedPerms = await fetchPermissionsForRole(selectedRole.id);

      // assignedPerms contains: pid, pname, rpid (0 or 1)
      const mappedPermissions = assignedPerms.map((p) => ({
        id: p.pid,
        description: p.pname,
      }));
      console.log("allpermissions", mappedPermissions);
      setAllPermissions(mappedPermissions);
      // console.log('allpermissions',allPermissions);
      const checkedIds = assignedPerms
        .filter((p) => p.rpid === 1)
        .map((p) => p.pid);

      setCheckedPermissions(checkedIds);
      console.log("Updated checkedPermissions:", checkedIds);
    } catch (error) {
      console.error("Failed to load permissions", error);
    } finally {
      setLoadingPermissions(false);
    }
  };

  useEffect(() => {
    loadPermissions();
  }, [selectedRole?.id]);

  //   useEffect(() => {
  //   console.log("Updated checkedPermissions:", checkedPermissions);
  // }, [checkedPermissions]);

  const handleToggle = (permissionId) => () => {
    setCheckedPermissions((prev) =>
      prev.includes(permissionId)
        ? prev.filter((id) => id !== permissionId)
        : [...prev, permissionId]
    );
  };

  const handleSave = async () => {
    if (!selectedRole) return;
    try {
      console.log("permissionIds", checkedPermissions);
      setIsSaving(true);
      await addpermisssion_role({
        roleId: selectedRole.id,
        permissionIds: checkedPermissions,
      });
      enqueueSnackbar("Permissions assigned successfully!", {
        variant: "success",
      });
      console.log("Permissions assigned successfully.");
    } catch (error) {
      console.error("Error assigning permissions:", error);
    } finally {
      setIsSaving(false);
    }
  };
  console.log("checked permsisons", checkedPermissions);
  return (
    <Box sx={{ width: 500 }}>
      <Dropdown
        options={roles}
        selected={selectedRole}
        onSelect={setSelectedRole}
        label="Role"
      />
      {selectedRole && (
        <>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Permissions
          </Typography>
          <Box sx={{ position: "relative", height: 400 }}>
            <DataGridPremium
              sx={{
                border: "1px solid black",
                borderRadius: 1,
                "& .MuiDataGrid-columnHeaders": {
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "17px",
                  fontfamily: "Tahoma",
                },
              }}
              rows={allPermissions}
              columns={columns}
              getRowId={(row) => row.id} //is a unique key for each row
              disableRowSelectionOnClick
              // hideFooter
              fullWidth
              // loading={!allPermissions.length}
              columnVisibilityModel={{
                id: false,
              }}
              loading={false}
              pagination
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 4,
                  },
                },
              }}
              pageSizeOptions={[4, 8, 12]}
              checkboxSelection
              //rowSelectionModel=rowselectionmodel
              rowSelectionModel={{
                type: "include",
                ids: new Set(checkedPermissions),
              }}
              onRowSelectionModelChange={(newSelectionModel) => {
                console.log("new selection model", newSelectionModel);
                //newSelectionModel.ids.values
                setCheckedPermissions([...newSelectionModel.ids.values()]);
              }}
              // rowSelectionModel={checkedPermissions ?? []}
              // onRowSelectionModelChange={(newSelectionModel) => {
              //   setCheckedPermissions(Array.isArray(newSelectionModel) ? newSelectionModel : []);
              // }}

              showToolbar
              slots={{ toolbar: GridToolbar }}
            />
            {loadingPermissions && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                  flexDirection: "row",
                  gap: 2,
                  pointerEvents: "none",
                }}
              >
                <CircularProgress
                  size={50}
                  thickness={4}
                  sx={{ color: "grey" }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "grey",
                    fontFamily: "cursive",
                  }}
                >
                  Loading...
                </Typography>
              </Box>
            )}
          </Box>
        </>
      )}
      {selectedRole && (
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={handleSave}
          color="primary"
          fullWidth
          loading={isSaving}
        >
          {isSaving ? "Saving ..." : "Save"}
        </Button>
      )}
    </Box>
  );
};
export default PermissionRole;
