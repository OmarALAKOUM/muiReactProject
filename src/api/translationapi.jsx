import axiosInstance from "./instance.jsx";

export const fetchLanguages = async () => {
  const response = await axiosInstance.get("/languages");
  return response.data;
};

export const fetchRoles = async () => {
  const response = await axiosInstance.get("/roles");
  return response.data;
};

export const fetchPermissions = async () => {
  const response = await axiosInstance.get("/permissions");
  return response.data;
};

export const translateWord = async (from, to, text) => {
  try {
    const response = await axiosInstance.post(
      `/translate?from=${from}&to=${to}`,
      { text }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error translating word:",
      error.response?.data || error.message
    );
  }
};

export const addWordWithTranslations = async (
  text,
  languageCode,
  translations
) => {
  try {
    const response = await axiosInstance.post("/word", {
      text,
      languageCode,
      translations,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error adding word and translations:",
      error.response?.data || error.message
    );
  }
};

export const addpermisssion_role = async (permrole) => {
  try {
    console.log("permrole", permrole);
    const response = await axiosInstance.post(
      "assignpermissionstorole",
      permrole
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const fetchPermissionsForRole = async (roleId) => {
  try {
    const response = await axiosInstance.get(`/roles/${roleId}/permissions`);
   // console.log('oermissionrolesfetched',response.data);
    return response.data;
  } catch (error) {
    console.error("error fetching permssions to role", error);
  }
};
