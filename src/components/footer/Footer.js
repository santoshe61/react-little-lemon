import { Box, Stack } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const wrapperStyle = {
    position: "absolute",
    bottom: "0",
    background: "#ffd800",
    textAlign: "center",
    left: 0,
    right: 0,
    background: '#495e57',
}

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    '&:hover': {
        cursor: 'pointer',
        // padding: '2px'
    }
}

const Footer = () => {
    return <Box component='footer' p="2rem 8%" m='auto' style={wrapperStyle}>
        <Stack direction="row" textAlign="left" justifyContent="space-between" >
            <Stack direction='column' color="#fff">
                <h3 style={{margin: 0, padding: 0}}>Contact Us</h3>
                <ul style={{listStyle: 'none', margin: 0, padding: "0.4rem 1.2rem"}}>
                    <li>Address: Delhi, India</li>
                    <li>Email: little_lemon@example.com</li>
                    <li>Phone: +91 8888888888</li>
                </ul>
            </Stack>
            <Stack direction='row' textAlign='center' alignItems='center' spacing={2} >
            <a style={linkStyle} rel="noopener" target="_blank" href='https://facebook.com' >
                <FacebookIcon sx={{fontSize: '2rem', color: 'white', cursor: 'pointer' }}/>
            </a>
            <a style={linkStyle} rel="noopener" target="_blank" href='https://youtube.com' >
                <YouTubeIcon sx={{fontSize: '2rem', color: 'white', cursor: 'pointer'}}/>
            </a>
            <a style={linkStyle} rel="noopener" target="_blank" href='https://instagram.com' >
                <InstagramIcon sx={{fontSize: '2rem', color: 'white', cursor: 'pointer' }}/>
            </a>
            <a style={linkStyle} rel="noopener" target="_blank" href='https://twitter.com' >
                <TwitterIcon sx={{fontSize: '2rem', color: 'white', cursor: 'pointer' }}/>
            </a>
                
                
                

            </Stack>
            <Stack direction='column' color="#fff">
                <h3 style={{margin: 0, padding: 0}}>Opening times</h3>
                <ul style={{listStyle: 'none', margin: 0, padding: "0.4rem 1.2rem"}}>
                    <li>Monday - Friday: 9:00 - 22:00</li>
                    <li>Saturday - Sunday: 10:00 - 24:00</li>
                </ul>
            </Stack>
        </Stack>
    </Box>
};

export default Footer;