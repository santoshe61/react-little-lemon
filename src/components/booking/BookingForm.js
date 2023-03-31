import { Box, Container, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Stack, TextField } from "@mui/material"
import { useState } from "react";
import Button from "../shared/Button";

const currentDt = new Date();
const currentDate = `${currentDt.getDate()}-${currentDt.getMonth() + 1}-${currentDt.getFullYear()}`;
const maxDate = `${currentDt.getDate()}-${currentDt.getMonth() + 2}-${currentDt.getFullYear()}`;

const BookingForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        numberOfGuests: 1,
        ocassion: 'none',
        takePreference: 'indoor',
        additionalRequest: ''
    });

    const formSubmitHandler = (e) => {
        e.preventDefault();

        console.log(formData);

        if(formData.name.trim().length < 3 || formData.email.trim().length < 5 || formData.date === '' || formData.time === '') {
            alert('Please type valid data');
            return ;
        }

        alert('Booking Confirmed, Thank you for the booking. ', ' See you on ');
        setFormData({
            name: '',
            email: '',
            date: '',
            time: '',
            numberOfGuests: 1,
            ocassion: 'none',
            takePreference: 'indoor',
            additionalRequest: ''
        });
    }

    return <Box component='section' width="100vw" pb={30} id="booking">
        <Box component='form' direction='row' p='2rem 20%' onSubmit={formSubmitHandler} >
            <Grid container justifyContent='space-between' >
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 'bolder', mt: '0.5rem'}}>Your Name</FormLabel>
                    <TextField 
                        variant="outlined"
                        size="small"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                        fullWidth
                        sx={{background: 'white'}}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 'bolder', mt: '0.5rem'}}>Your Email</FormLabel>
                    <TextField 
                        variant="outlined"
                        size="small"
                        type='email'
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        fullWidth
                        sx={{background: 'white'}}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 'bolder', mt: '0.5rem'}}>Choose date</FormLabel>
                    <TextField 
                        variant="outlined"
                        size="small"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData(prev => ({...prev, date: e.target.value}))}
                        fullWidth
                        sx={{background: 'white'}}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 'bolder', mt: '0.5rem'}}>Choose time</FormLabel>
                    <TextField 
                        variant="outlined"
                        size="small"
                        type='time'
                        value={formData.time}
                        onChange={(e) => setFormData(prev => ({...prev, time: e.target.value}))}
                        fullWidth
                        sx={{background: 'white'}}
                        InputProps={{
                            inputProps: { 
                                max: maxDate, min: new Date()
                            }
                        }}
                    />
                </FormControl>
            </Grid>

            <Grid item  width="30%"  xs={12} sm={12} md={3} lg={3} xl={3}>
                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 'bolder', mt: '0.5rem'}}>Number of guests</FormLabel>
                    <TextField 
                        variant="outlined"
                        size="small"
                        type='number'
                        InputProps={{
                            inputProps: { 
                                max: 10, min: 1 
                            }
                        }}
                        value={formData.numberOfGuests}
                        onChange={(e) => setFormData(prev => ({...prev, numberOfGuests: e.target.value}))}
                        fullWidth
                        sx={{background: 'white'}}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 'bolder', mt: '0.5rem'}}>Ocassion</FormLabel>
                        <TextField 
                            value={formData.ocassion}
                            onChange={(e) => setFormData(prev => ({...prev, ocassion: e.target.value}))}
                            sx={{background: 'white'}}
                            variant="outlined"
                            size="small"
                            select
                        >
                        <MenuItem value="none" >None</MenuItem>
                        <MenuItem value="birthday" >Birthday</MenuItem>
                        <MenuItem value="engagement" >Engagement</MenuItem>
                        <MenuItem value="aniversary" >Aniversary</MenuItem>
                    </TextField>
                </FormControl>
                <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 'bolder', mt: '0.5rem'}}>Take preference</FormLabel>
                        <TextField 
                            value={formData.takePreference}
                            onChange={(e) => setFormData(prev => ({...prev, takePreference: e.target.value}))}
                            sx={{background: 'white'}}
                            variant="outlined"
                            size="small"
                            select
                        >
                        <MenuItem value="indoor" >Indoor</MenuItem>
                        <MenuItem value="outdoor" >Uutdoor</MenuItem>
                    </TextField>
                </FormControl>
            </Grid>

            <Grid item width="30%"  xs={12} sm={12} md={4} lg={4} xl={4}>
                <FormControl fullWidth >
                    <FormLabel sx={{ fontWeight: 'bolder', mt: '0.5rem'}}>Additional Requests</FormLabel>
                    <TextField 
                        variant="outlined"
                        size="large"
                        value={formData.additionalRequest}
                        onChange={(e) => setFormData(prev => ({...prev, additionalRequest: e.target.value}))}
                        fullWidth
                        sx={{background: 'white'}}
                        multiline
                    />
                </FormControl>
            </Grid>
            </Grid>
            <Box width="250px" m="2rem auto">
                <Button type="submit">Make Reservation</Button>
            </Box>
        </Box>
    </Box>
};

export default BookingForm;