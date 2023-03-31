import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Stack,
  TextField,
  passwordField,
} from "@mui/material";
import { useState } from "react";
import Button from "../shared/Button";

const currentDt = new Date();
const currentDate = `${currentDt.getDate()}-${
  currentDt.getMonth() + 1
}-${currentDt.getFullYear()}`;
const maxDate = `${currentDt.getDate()}-${
  currentDt.getMonth() + 2
}-${currentDt.getFullYear()}`;

const BookingForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log(formData);

    if (
      formData.email.trim().length < 5 ||
      formData.password.trim().length < 6
    ) {
      alert("Please type valid data");
      return;
    }

    alert("Logged in ... taking you to your dashboard.");
    alert("Kidding ..... There is no dashboard for this sample site.");
    setFormData({
      password: "",
      email: "",
    });
  };

  return (
    <Box component="section" width="100vw" pb={30} id="booking">
      <Box
        component="form"
        direction="row"
        p="2rem 20%"
        onSubmit={formSubmitHandler}
      >
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <FormControl fullWidth>
              <FormLabel sx={{ fontWeight: "bolder", mt: "0.5rem" }}>
                Email
              </FormLabel>
              <TextField
                variant="outlined"
                size="small"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                fullWidth
                sx={{ background: "white" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ fontWeight: "bolder", mt: "0.5rem" }}>
                Password
              </FormLabel>
              <TextField
                type="password"
                variant="outlined"
                size="small"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                fullWidth
                sx={{ background: "white" }}
              />
            </FormControl>
            <Box width="250px" m="2rem auto">
              <Button type="submit">Login</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BookingForm;
