import { Box, Hidden, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import imgSrc from "../../assets/Food.jpg";
import Button from "../shared/Button";

const Heading = () => {
    return <Box component='header' p="0 15%" m='auto' bgcolor="#495e57" height="400px" position='relative'>
        <Stack direction='row' width="100%"  maxWidth="2500px">
            <Stack width="50%">
                <Typography variant="h2" mt='2rem' fontWeight="bold" color="#f4ce14">Little Lemon</Typography>
                <Typography variant="h5" fontWeight="bold" color="white">India</Typography>
                <Typography maxWidth="400px" my="2rem" variant="body2" fontWeight="bold" color="white">We are a family owned Mediterrnean resturent, focused on traditional recipes served with a modern twist</Typography>
                <Link to='/booking' style={{textDecoration: 'none'}} >
                    <Box width="220px">
                        <Button>Reserve a Table</Button>
                    </Box>
                </Link>
            </Stack>
            <Hidden only={['xs', 'sm', 'md']}>
            <Stack width="50%" alignItems='flex-end'>
                <Box width="400px"  >
                    <img src={imgSrc} width="100%"  height="100%" style={{aspectRatio: '5/6', borderRadius: '1.5rem', objectFit: 'cover', transform: 'translateY(10%)'}} alt="our cook holding a tablet with delicoues baguettes"/>
                </Box>
            </Stack>
            </Hidden>
        </Stack>
    </Box>
};

export default Heading;