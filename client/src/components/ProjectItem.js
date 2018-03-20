// import React, { Component } from 'react';
import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card_style: {
    width: 700,
    display: 'inline',
    margin: 10
  }
}

class ProjectItem extends Component {
  render() {
    return (
      <div>
        <h1>Project Item</h1>
        <p>A single project item</p>
          <Card style={style.card_style}>
            <CardHeader
              title="Workflow Project Title"
              subtitle="Zakir, Dan, Tim"
            />
            <CardActions>
              <FlatButton label="Edit" />
              <FlatButton label="Delete" />
            </CardActions>
            <CardText>
              THIS EXAMPLE DOES NOT EXPAND...
              <ul>
                <li>Task: Build App</li>
                <li>Assigned To:</li>
                <li>Steps:</li>
                <ol>
                  <li>Create React App</li>
                  <li>NPM install dependencies</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.</li>
                  <li>Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.</li>
                  <li>Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</li>
                  <li>Create React App</li>
                </ol>
              </ul>
              <ul>
                <li>Task: Number Two</li>
                <li>Assigned To:</li>
                <li>Steps:</li>
                <ol>
                  <li>Create React App</li>
                  <li>NPM install dependencies</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.</li>
                  <li>Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.</li>
                  <li>Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</li>
                  <li>Create React App</li>
                </ol>
              </ul>
              <ul>
                <li>Task: Number Three</li>
                <li>Assigned To:</li>
                <li>Steps:</li>
                <ol>
                  <li>Create React App</li>
                  <li>NPM install dependencies</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.</li>
                  <li>Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.</li>
                  <li>Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</li>
                  <li>Create React App</li>
                </ol>
              </ul>
            </CardText>
          </Card>
      </div>
    );
  }
}


// const ProjectItem = (props) => (
//       <div>
//         <h1>{props.project.title}</h1>
//         <p>A single project item</p>
//           <Card style={style.card_style}>
//             <CardHeader
//               title={props.project.title}
//               subtitle={props.project.team}
//             />
//             <CardActions>
//               <FlatButton label="Edit" />
//               <FlatButton label="Delete" />
//             </CardActions>
//             <CardText>
//               THIS EXAMPLE DOES NOT EXPAND...
//
//                 <ul>
//                   {props.project.tasks.map((task, index) =>
//                       <li>{task}</li>
//                     )}
//                 </ul>
//
//             </CardText>
//           </Card>
//       </div>
//     );


export default ProjectItem;
