import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField, Typography} from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

function App() {

  const [location, setLocation] = React.useState('');


  const updateLocation = (event) => {
    setLocation(event.target.value)
  }
  
  return (
    <div className="App">
      
      <div className="location-filter">

        <span>Finding vets around <TextField value={location} onChange={updateLocation} placeholder="Your Location"/></span>
      </div>
      <div className="vet-card">
        <Card className={"vet-clinic"}>
          <CardHeader 
            title = "Name"
            subheader="[add sth here]"
          />
          <CardMedia 
            className={"media"}
            image="./img/vet-dog.jpg"
            title= "Vet example"
            />
          <CardContent>
            <Typography className="textSecondary" component="p">
              Clinic location
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
