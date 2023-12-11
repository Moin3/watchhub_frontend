import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import  styled  from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import { IoIosStar } from "react-icons/io";

const StyledCard = styled(Card)`
  margin: 5px 20px 50px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.085);
  transition: transform 0.3s ease-in-out;
  width:300px;
  height: 350px;
  font-family: Poppins;
  position: relative;
  
  &:hover {
    transform: scale(1.02);

  }
`;

const StyledCardMedia = styled(CardMedia)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const MediaBox=styled(Box)`
  width: 120px;
  height: 140px;
`;
const MediaContainer=styled(Box)`
  width: '100%';
  display: flex;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;
`;

const StyledCardContent = styled(CardContent)`
  padding: 16px;
`;


const ProductCard = ({ product }) => {
  const { title, description, imageUrl } = product;


  return (
    <StyledCard>
      <MediaContainer>
        <MediaBox>
          <StyledCardMedia
            component="img"
            alt={title}
            image={imageUrl}
            title={title}
          />
        </MediaBox>
      </MediaContainer>
      
      <StyledCardContent >
        <Typography variant="h6" sx={{fontFamily: 'Poppins'}}>{title}</Typography>
        <Typography variant="body2" color="textSecondary" sx={{fontFamily: 'Poppins',fontSize:'11px',letterSpacing:'1px',wordSpacing:'2px',fontStyle:'italic',color:'black',fontWeight:'400'}} component="p">
            {description}
        </Typography>
        <Box>
          <Typography sx={{display:'flex',alignItems:'center',fontFamily: 'Poppins',fontSize:12,position:'absolute',bottom:45}}>Ratting : 4.5 <IoIosStar style={{color:'orangered',marginLeft:'3px',fontSize:'13px'}}/></Typography>
        </Box>
      </StyledCardContent>
      <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',position:'absolute',bottom:0}}>
                <IconButton size="large">
                  <ShoppingCart sx={{color:'black'}} />
                </IconButton>
              <Typography variant="p" sx={{mr:3}}>$100</Typography>
          </Box>
    </StyledCard>
  );
};

export default ProductCard;
