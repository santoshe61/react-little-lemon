import MuiButton from '@mui/material/Button'

const Button = (props) => {
    return <MuiButton variant="contained" color='warning' sx={{borderRadius: '20px', p:'0.7rem 1.2rem', fontSize: '1.4rem', fontWeight: 'bold', textTransform: 'none',}} fullWidth {...props}>{props.children}</MuiButton>
};

export default Button;