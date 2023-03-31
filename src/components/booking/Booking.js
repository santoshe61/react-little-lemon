import { Box, Stack, Typography } from "@mui/material";
import Resturent from '../../assets/Restaurant.jpg';
import BookingForm from "./BookingForm";

const Booking = () => {

    return <Box component='main' padding="3rem 15%" bgcolor="#edefee">
        <Stack direction="column" justifyContent='center' alignItems="center" spacing="2rem">
            <Typography variant="h2" fontWeight='bold'>Booking</Typography>
            <Box p="0 15%">
                <img src={Resturent} alt="Our outdoor ambience" style={{borderRadius: '8px', width: '100%'}}/>
            </Box>
            <Stack>
                <BookingForm />
            </Stack>
        </Stack>
    </Box>
}

export default Booking;