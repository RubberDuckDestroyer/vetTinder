import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CardActions, Collapse, IconButton, List,ListItem, ListItemText, TextField, Typography} from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CancelIcon from '@material-ui/icons/Cancel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profileData from "./data/profiles.json"
import vetData from "./data/vets.json"

function App() {

  const [location, setLocation] = React.useState('');


  const updateLocation = (event) => {
    setLocation(event.target.value)
  }
  
  const [expanded,setExpaned] = React.useState(false);

  const handleExpandClick = () => {
    setExpaned(!expanded);
  };

  // const profileData = import('');
  console.log(profileData);

  // const vetProfile = JSON.parse(profileData);


  return (
    <div className="App">
      
      <div className="location-filter">

        <span>Finding vets around <TextField value={location} onChange={updateLocation} placeholder="Your Location"/></span>
      </div>
      <div className="vet-card">
        <Card className="vet-clinic">
          <CardHeader 
            title = "Name"
            subheader="[add sth here]"
          />
          <CardMedia 
            className="media"
            image="img/vet-dog.jpg"
            title= "Vet example"
            />
          <CardContent> 
            <Typography className="textSecondary" component="p">
              Clinic location
            </Typography>
            <List>
                {vetData.slice(1,2).map((vet,key) => (
                <ListItem component="nav" className="vet-local" aria-label="Clinic profile">
                    {vet.vicinity}
                  </ListItem>
                ))} 
                </List>
          </CardContent>
          <CardActions disableSpacing className="actions">
            <IconButton aria-label="No">
              <CancelIcon/>
            </IconButton>
            <IconButton classNames="rightBut"
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Yes, show vets"
            >
              <ExpandMoreIcon />
              </IconButton> 
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
              <List>
                {profileData.map((profile,key) => (
                <ListItem component="nav" className="vet-table" aria-label="Vet profile">
                    {profile.name.first}
                  </ListItem>
                ))} 
              </List>
                
              </CardContent>
            </Collapse>
      </Card>
      </div>
    </div>
  );
}

export default App;
