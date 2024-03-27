import { Box, FormControlLabel, FormGroup, Switch, styled} from '@mui/material'
import React from 'react'
import Post from './Post'

function Feed({mode  , setMode}) {
  const CustomBox=styled('div')({
     display:'flex',
     justifyContent:"flex-end"
  })
  return (
    <Box  flex={4} p={2}>
      <FormGroup >
      <FormControlLabel control={<Switch />} label="Dark"onClick={()=>setMode(mode==="light" ? 'dark':'light')} />
      </FormGroup>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </Box>
  )
}

export default Feed