import { Box, Switch, Typography} from '@mui/material'
import React from 'react'
import Post from './Post'

function Feed({mode  , setMode}) {
 
  return (
    <Box  flex={4} p={2}>
      <Switch  onChange={(e)=>setMode(mode==="light" ? 'dark':'light')} sx={{display:{sx:'block',md:'none'}}} />
      <Typography variant='span' sx={{display:{sx:'block',md:'none'}}}>Dark Mode</Typography>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </Box>
  )
}

export default Feed