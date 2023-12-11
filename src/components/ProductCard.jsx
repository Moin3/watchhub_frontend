import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import  styled  from '@emotion/styled';
import IconButton from '@mui/material/IconButton';

const StyledCard = styled(Card)`
  margin: 5px 20px 50px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.085);
  transition: transform 0.3s ease-in-out;
  width:230px;
  font-family: Poppins;
  
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
  width: 100%;
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
        <Typography variant="body2" color="textSecondary" sx={{fontFamily: 'Poppins',fontSize:'11px',letterSpacing:'1.2px',wordSpacing:'3px'}} component="p">
            {description}
        </Typography>
          <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <IconButton size="large">
                  <ShoppingCart sx={{color:'orangered'}} />
                </IconButton>
              <Typography variant="p">$100</Typography>
          </Box>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductCard;
