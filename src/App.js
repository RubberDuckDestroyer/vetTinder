import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CardActions, Collapse, IconButton, List,ListItem, ListItemText, TextField, Typography} from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CancelIcon from '@material-ui/icons/Cancel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profileData from "./data/profiles.json"
import vetData from "./data/vets.json";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

function App() {
  const [currentCardIndex, setCardIndex] = React.useState(0);

  const [location, setLocation] = React.useState('');

  const getProfiles = (place_id) => {
    const res =  profileData.filter((user) => {
      return (user.works_at == place_id && user.name.first.includes("?") == false)
    })

    console.log(res)
    return res
  }
  
  const MapWithMarker = withScriptjs(withGoogleMap(props => 
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: props.location.lat, lng: props.location.lng }}
      >
      <Marker
        position={{ lat: props.location.lat, lng: props.location.lng }}
      />
    </GoogleMap>
    ));


  const updateLocation = (event) => {
    setLocation(event.target.value)
  }
  
  const [expanded,setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickNo = () => {

    vetData.forEach( (vet) => {
      vet.image = "img/vet-dog.jpg";
    })

      if (currentCardIndex == vetData.length - 1) {
        alert("No more card")
        setCardIndex(0)
      }    else { setCardIndex(currentCardIndex+1);}    
  }

  // const profileData = import('');
  // const vetProfile = JSON.parse(profileData);


  return (
    <div className="App">
      
      <div className="location-filter">

        <span>Finding vets around <TextField value={location} className="textfield" onChange={updateLocation} placeholder="Your Location"/></span>

        <hr></hr>

      </div>
      <div className="vet-card">
      {vetData.slice(currentCardIndex,currentCardIndex+1).map((vet,key) => (
        <Card >
          <CardHeader 
          className="vet-clinic"
            title = {vet.name}
            subheader="[add sth here]"
          />
          <div className="media-frame">
              {/* <CardMedia 
                className="media"
                image={vet.profile}
                title= "Vet example"
              />  */}

              <MapWithMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8CrNW7VK1qGRvrmJ0WiUx2ntC1n7M4XA&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={vet.location}
              />  
            
              
          </div>
          <CardContent className="place"> 
            <Typography className="textSecondary" component="p">
              Clinic location
            </Typography>
            
            <Typography component="p" className="vet-local" aria-label="Clinic profile">
                    {vet.vicinity}
                </Typography>
                
            
          </CardContent>
          <div className="icon">
          <CardActions disableSpacing className="actions">
            <IconButton className="no" aria-label="No" onClick={handleClickNo}>
              <CancelIcon/>
            </IconButton>
            <IconButton classNames="more"
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Yes, show vets"
            >
              <ExpandMoreIcon />
            </IconButton>
            <IconButton className="yes" aria-label="Yes">
              <FavoriteIcon/>
            </IconButton> 
            </CardActions>
            
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
              <List>
                {getProfiles(vet.place_id).map((profile,key) => (
                  
                <ListItem component="nav" className="vet-table" aria-label="Vet profile">
                    {profile.name.first}
                    
                  </ListItem>
                ))} 
              </List>
                
              </CardContent>
            </Collapse>
            </div>
      </Card>
      ))} 
      </div>
    </div>
  );
}

export default App;
