import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import '../App.css';

const images = [
  {
    url: 'https://www.clipartmax.com/png/full/202-2026133_winking-puppy-angel-dog-with-angel-wings.png',
    title: 'Dog',
    width: '50%',
    path: '/dog',
  },
  {
    url: 'https://immortalmasks.com/shop/image/cache/data/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!MAY21/devilprod-800x800h.png',
    title: 'Dawg',
    width: '50%',
    path: '/dawg',
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 400,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: '420px',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.0001,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <div>
      <div style={{
        position: 'absolute', top: '8%', left: '12%', fontSize: '50px', 
        fontFamily: 'Helvetica', fontStyle: 'normal', color: 'black',
      }}>
        Welcome to Dog or Dawg Therapy! To talk to a kind friend, click Dog! For a sassy friend, click Dawg!
      </div>
    <img src="https://miro.medium.com/max/1400/1*0VWq1XOQ62Gf-X0tgWrc2A.jpeg"
    alt="dog"
    style={{
      height: '1015px',
      width: '1500px',}}/>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '1500px', 
    position: 'relative', bottom: '550px', justifyContent: 'space-between'}}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title} 
          style={{
            width: '425px',
          }}
          href={image.path}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'absolute',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton> 
      ))}
    </Box>
    </div>
  );
}