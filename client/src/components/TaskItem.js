import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
import DropDownMenuTask from './DropDownMenu';
import {Link} from 'react-router-dom';



const TaskItem = props => (


  <Card style={props.style} zDepth={5}>
    <CardText>
      <h3 className="TaskText">{props.task.description || 'No Tasks In this status'}</h3>
      <p className="TaskText">Assigned to: {props.task.assigned_to} </p>
      <CardActions>
        <Link to="/Tasks/edit"><RaisedButton className="edit" label="Edit Task" /></Link>
      </CardActions>
    </CardText>
    <DropDownMenuTask />
  </Card>
)





export default TaskItem;
