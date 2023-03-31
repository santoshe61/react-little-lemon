
import { Box, Grid, Stack, Typography } from "@mui/material";
import greekSalad from '../../assets/Salad.jpg';
import bruschetta from '../../assets/Bruchetta.svg';
import LemonDessert from '../../assets/LemonDessert.jpg';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Button from "../shared/Button";

const specialData = [
    {
        id: 1,
        img: greekSalad,
        title: "Greek Salad",
        price: 102,
        description:
        "The famous greek salad of crispy lettuce, peppers, olives and our India style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        id: 2,
        img: bruschetta,
        title: "Bruschetta",
        price: 50,
        description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        id: 3,
        img: LemonDessert,
        title: "Lemon Dessert",
        price: 50,
        description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
    {
        id: 4,
        img: "https://www.cookwithmanali.com/wp-content/uploads/2022/04/Cold-Coffee-500x500.jpg",
        title: "Cold Coffee",
        price: 106,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, at hic molestiae veritatis amet quo voluptatibus? Praesentium quod placeat ipsam maxime, fugit quae rerum reprehenderit odio veniam. Voluptatem, ad consequuntur!",
      },
      {
        id: 5,
        img: "https://www.texanerin.com/content/uploads/2014/08/honey-lemonade-2-650x975.jpg",
        title: "Lemonade",
        price: 80,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, at hic molestiae veritatis amet quo voluptatibus? Praesentium quod placeat ipsam maxime, fugit quae rerum reprehenderit odio veniam. Voluptatem, ad consequuntur!",
      },
      {
        id: 6,
        img: "https://cdn.cdnparenting.com/articles/2018/07/361921454-H.webp",
        title: "Cold",
        price: "on MRP",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, at hic molestiae veritatis amet quo voluptatibus? Praesentium quod placeat ipsam maxime, fugit quae rerum reprehenderit odio veniam. Voluptatem, ad consequuntur!",
      },
];


const Main = () => {
    return <Box component="section" p="10rem 15%" m='auto' position="relative" id="menu">
        <Box>
            <Typography variant="h2" sx={{fontWeight: 'bold'}}>Our Menu</Typography>
        </Box>
        <Grid container width="100%" justifyContent="space-between" mt="2rem" gap={3}>
            {specialData.map(item => (
                <Grid item key={item.id} bgcolor="#edefee" maxWidth="300px" width="300px" borderRadius='16px 16px 0 0' justifyContent="space-between">
                    <img src={item.img} alt={item.title + " image"} style={{width:'300px', height: '150px', objectFit: 'cover', borderRadius: '16px 16px 0 0'}} />
                    <Stack p="1.5rem" direction='column'>
                        <Box sx={{fontSize: '18px', fontWeight: '600', display: 'flex', justifyContent: 'space-between'}}>
                            <h3>{item.title}</h3>
                            <h4 style={{color: 'orange'}}>{typeof item.price === "number" ? <span>&#8377;</span> : ''} {item.price}</h4>
                        </Box>
                        <Box>
                            <p style={{fontSize: '1rem', lineHeight: '1.5', color: '#333', margin: '1rem 0'}}>{item.description}</p>
                        </Box>
                        <Box mt={6} >
                            <span style={{cursor: 'pointer'}}>Order a delivery</span> {<DeliveryDiningIcon sx={{position: "relative", top: '7px', left: '10px'}} />}
                        </Box>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    </Box>
};

export default Main;