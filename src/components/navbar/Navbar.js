import { Box, Hidden, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.svg';


const Navbar = () => {

    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
        '&:hover': {
            cursor: 'pointer',
            // padding: '2px'
        }
    }

    return <Box component="nav" display='flex' justifyContent='center' px="15%">
        <Stack direction="row"  py="1.2rem" width="100%" maxWidth="2500px">
            <Box width="50%">
                <Link to='/'>
                    <Box>
                        <img src={logo} alt="Little Lemon Logo" />
                    </Box>
                </Link>
            </Box>
            <Stack direction="row" justifyContent="space-between" alignItems='center' width="50%">
                <Box>
                    <Link style={linkStyle} to='/' >Home</Link>
                </Box>
                <Hidden only={['xs', 'sm']}>
                <Box>
                    <Link style={linkStyle} to='/menu' >Menu</Link>
                    {/* <a style={linkStyle} href="#menu">Menu</a> */}
                </Box>
                </Hidden>
                <Box>
                    <Link style={linkStyle} to='/booking' >Booking</Link>
                </Box>
                <Hidden only="xs">
                <Box>
                    <Link style={linkStyle} to='/login' >Login</Link>
                </Box>
                </Hidden>
            </Stack>
        </Stack>
    </Box>
}

export default Navbar;