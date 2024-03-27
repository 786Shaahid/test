import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      <Box position='fixed'>
        <Typography variant='h4' fontWeight='100' mb={2}>Online Friends</Typography>
        <AvatarGroup total={5} sx={{mr:20}}>
      <Avatar  sx={{height:50,width:50}} alt="Remy Sharp" src="https://media.istockphoto.com/id/929063744/photo/portrait-of-handsome-man-against-black-background.jpg?s=2048x2048&w=is&k=20&c=1wJevuZH9TSvE9JCZ5hlVm28yWvQp-hyOoJ2yLW4uSo=" />
      <Avatar  sx={{height:50,width:50}} alt="Travis Howard" src="https://media.istockphoto.com/id/1189491089/photo/profile-view-of-young-happy-indian-businessman-in-suit-smiling.jpg?s=2048x2048&w=is&k=20&c=uoZVXCIVQtIhsPRcCRBnmEMd0YY9ipiDMzfcXfhI8IE=" />
      <Avatar  sx={{height:50,width:50}} alt="Trevor Henderson " src="https://media.istockphoto.com/id/1180205868/photo/thoughtful-senior-man.jpg?s=2048x2048&w=is&k=20&c=tsxg2uWrpqAmMb-bLVtZi4O13ecJ_L7g9xePWCO4Q6o=" />
      <Avatar  sx={{height:50,width:50}} alt="Cindy Baker" src="https://media.istockphoto.com/id/1189491089/photo/profile-view-of-young-happy-indian-businessman-in-suit-smiling.jpg?s=2048x2048&w=is&k=20&c=uoZVXCIVQtIhsPRcCRBnmEMd0YY9ipiDMzfcXfhI8IE=" />
      <Avatar  sx={{height:50,width:50}} alt="Agnes Walker" src="https://media.istockphoto.com/id/1189491089/photo/profile-view-of-young-happy-indian-businessman-in-suit-smiling.jpg?s=2048x2048&w=is&k=20&c=uoZVXCIVQtIhsPRcCRBnmEMd0YY9ipiDMzfcXfhI8IE=" />
    </AvatarGroup>
    <Typography variant='h4' fontWeight={100} mt={5}> 
         Latest Photos
    </Typography>
    <ImageList cols={3} rowHeight={150}>
      <ImageListItem>
        <img alt='pic' src='https://media.istockphoto.com/id/1329936184/photo/head-shot-portrait-of-smiling-businesswoman-intern-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=MCbv5iIu9hUd3tFVP-UP_gx4BrvXqfUD5lzNpBL9P7g='/>
      </ImageListItem>
      <ImageListItem>
        <img alt='pic' src='https://media.istockphoto.com/id/1329936184/photo/head-shot-portrait-of-smiling-businesswoman-intern-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=MCbv5iIu9hUd3tFVP-UP_gx4BrvXqfUD5lzNpBL9P7g='/>
      </ImageListItem>
      <ImageListItem>
        <img alt='pic' src='https://media.istockphoto.com/id/1329936184/photo/head-shot-portrait-of-smiling-businesswoman-intern-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=MCbv5iIu9hUd3tFVP-UP_gx4BrvXqfUD5lzNpBL9P7g='/>
      </ImageListItem>
    </ImageList>
    <Typography variant='h4' fontWeight={100} mt={2}>Latest Conversions</Typography>
    <List>
      <ListItem>
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/929063744/photo/portrait-of-handsome-man-against-black-background.jpg?s=1024x1024&w=is&k=20&c=pEN6PLpDHMd3yUXPKFargk2cemWO9Y66smhlMCjvA9g=" />
                </ListItemAvatar>
                <ListItemText
                      primary="This is me"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                      }
                />

      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/929063744/photo/portrait-of-handsome-man-against-black-background.jpg?s=1024x1024&w=is&k=20&c=pEN6PLpDHMd3yUXPKFargk2cemWO9Y66smhlMCjvA9g=" />
                </ListItemAvatar>
                <ListItemText
                      primary="This is me"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                      }
                />

      </ListItem>
    </List>
      </Box>
      </Box>
  )
}

export default Rightbar