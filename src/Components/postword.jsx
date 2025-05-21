import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { fetchLanguages ,addWordWithTranslations } from "../api/translationapi"; 


const PostWord = () => {
  const [languages, setLanguages] = useState([]);
  const [text, setText] = useState("");
  const [languageCode, setLanguageCode] = useState("");
  const [translations, setTranslations] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

   useEffect(() => {
     const loadLanguages = async () => {
       const data = await fetchLanguages();
       setLanguages(data);
     };
     loadLanguages();
   }, []);

  const handleTranslationChange = (lang, value) => {
    setTranslations((prev) => ({ ...prev, [lang]: value }));
  };

  const handleSubmit = async () => {
    try {
      await addWordWithTranslations(text, languageCode, translations);
      setSuccessMsg("Word and translations added successfully!");
      setText("");
      setTranslations({});
    } catch {
      setSuccessMsg("Something went wrong.");
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add a Word with Translations
      </Typography>

      <TextField
        label="Word"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        margin="normal"
      />

      <TextField
        select
        label="Language"
        fullWidth
        value={languageCode}
        onChange={(e) => setLanguageCode(e.target.value)}
        margin="normal"
      >
        {languages.map((lang) => (
          <MenuItem key={lang.id} value={lang.name}>
            {lang.name}
          </MenuItem>
        ))}
      </TextField>

      <Box mt={3}>
        <Typography variant="h6">Translations</Typography>
        <Grid container spacing={2}>
          {languages
            .filter((lang) => lang.name !== languageCode)
            .map((lang) => (
              <Grid item xs={12} sm={6} key={lang.id}>
                <TextField
                  label={`Translation in ${lang.name}`}
                  fullWidth
                  value={translations[lang.name] || ""}
                  onChange={(e) => handleTranslationChange(lang.name, e.target.value)}
                />
              </Grid>
            ))}
        </Grid>
      </Box>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>

      {successMsg && (
        <Typography color="success.main" sx={{ mt: 2 }}>
          {successMsg}
        </Typography>
      )}
    </Paper>
  );
};

export default PostWord;
