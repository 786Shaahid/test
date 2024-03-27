import { Avatar, Box, Button, ButtonGroup, Fab,  Modal,  Stack,  TextField,  Tooltip, Typography, styled } from '@mui/material';
import { Add as AddIcon, DateRange, EmojiEmotionsOutlined, Image,PersonAddAlt1,VideoCameraBack } from '@mui/icons-material';
import React, { useState } from 'react'



function Add() {
    const [open,setOpen]=useState(false);
const StyleModal=styled(Modal)({
  display:'flex',
  justifyContent:"center",
  alignItems:"center"
})

const UserBox=styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:'10px',
  marginBottom:"20px"  
})

  return (
    <>
    <Tooltip title="Delete" sx={{position:"fixed",bottom:20,left:{xs:"calc(50%)",md:30}}} onClick={()=>setOpen(!open)}>
  <Fab aria-label='add' color='primary'>
    <AddIcon />
  </Fab>
</Tooltip>
<StyleModal
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  width={400} height={350} borderRadius={2} p={3} bgcolor={"background.default"} color={"text.primary"}  >
    <Typography  variant="h6" textAlign={'center'}>
        Create Post
    </Typography>
<UserBox> 
 <Avatar 
 src='https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.webp?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU='
 alt='pic'
 sx={{width:"20", height:"20"}}
 
/>
<Typography variant='span' fontWeight={500}> John</Typography>

</UserBox>
<TextField sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's in your mind"
          variant="standard"
        />
        <Stack direction='row' spacing={2} mt={2} mb={2}>
         <EmojiEmotionsOutlined color='primary' />
                         <Image color='primary' />
              <VideoCameraBack  color='primary'/>
                 <PersonAddAlt1 color='primary' />
        </Stack>
        <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
  <Button>Post</Button>
  <Button><DateRange/></Button>
</ButtonGroup>
  </Box>
</StyleModal>
    </>
  )
}

export default Add;
