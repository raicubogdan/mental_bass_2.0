import { SxProps } from '@mui/material';

export const eventDetails: SxProps = {
  height: '100%',
  width: '100%',
  background: 'black'
}

export const eventDetailsContainer: SxProps = {
  mt: {lg: '16rem', sm:'6rem', xs:'8rem'},
  width:'100%',
  display: 'flex',
  flexDirection: {lg: 'row', md:'row', sm:'row', xs:'column'},
  justifyContent: 'space-around',
  alignItems:'center'
}

export const eventDetailsData: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  fontFamily: 'orbitron',
  fontSize: {lg: '5vh', md: '4vh', sm:'4vw', xs: '3vh'},
  color: 'white',
}

export const eventCoverContainer: SxProps = {
  mt: {md: '2rem', sm:'2rem',  xs:'2rem'},
  display:'flex',
  alignItems: 'center'
}

export const eventCover: SxProps = {
  height: {lg:'20vw', md:'20vw', sm:'40vh', xs:'20vh'},
  width: {lg:'40vw', md:'35vw', sm:'80vh', xs:'40vh'},
  // backgroundImage: `url("https://i.ibb.co/G7KgynZ/cover.jpg")`,
  // backgroundImage: `url("https://i.ibb.co/JqdSzvV/mini-cover.png")`,
  backgroundImage: `url("https://i.ibb.co/jyj5BFP/Screenshot-from-2022-03-09-23-04-39.png")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
}

export const eventDetailsItem: SxProps = {
  mb: '5vh'
}
