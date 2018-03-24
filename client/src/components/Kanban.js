import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
// import Grid from 'material-ui/Grid';
import { Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
import DropDownMenuTask from './DropDownMenu';
import {Link} from 'react-router-dom';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

const style = {

  card_styleToDo: {
    width: 300,
    margin: 10,
    textAlign: 'center',
    background: '#FFFFA5'

  },
  card_styleProgress: {
    width: 300,
    margin: 10,
    textAlign: 'center',
    background: '#1ba8b1'

  },
  card_styleReview: {
    width: 300,
    margin: 10,
    textAlign: 'center',
    background: '#ff7455'

  },
  card_styleCompleted: {
    width: 300,
    margin: 10,
    textAlign: 'center',
    background: '#17F76A',
    justifyContent: 'center'

  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token,
    currentProject:state.currentProject
  }
}

class ConnectedKanbanBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentProject: props.currentProject
    }
  }



  componentWillMount() {
    console.log('BELOW IS STATE/PROJECT BEFORE MOUNT', this.props.currentProject)

  }



  render() {

    if (this.props.currentProject) {
      if (this.props.currentProject.tasks) {
        console.log('currentProject at RENDER',this.props.currentProject )

        // To Do
        var TasksToDo = this.props.currentProject.tasks.filter( task => {
          return task.task_status === "todo"
        })
        var ToDoTaskItems = TasksToDo.map(task => {
          return <TaskItem style={style.card_styleToDo} task={task}/>
        })

        // In Progress
        var TasksInProgress = this.props.currentProject.tasks.filter( task => {
          return (task.task_status === "progress")
        })
        var InProgressTaskItems = TasksInProgress.map(task => {
          return <TaskItem style={style.card_styleProgress} task={task}/>
        })

        // In Review
        var TasksInReview = this.props.currentProject.tasks.filter( task => {
          return task.task_status === "review"
        })
        var InReviewTaskItems = TasksInReview.map(task => {
          return <TaskItem style={style.card_styleReview} task={task}/>
        })

        // Completed
        var TasksCompleted = this.props.currentProject.tasks.filter( task => {
          return task.task_status === "completed"
        })
        var CompletedTaskItems = TasksCompleted.map(task => {
          return <TaskItem style={style.card_styleCompleted} task={task}/>
        })
      }
    }





    return (
  <MuiThemeProvider>
      <div>
        <h2 className="kanban">Kanban Board</h2>
          <Row around="xs" middle="xs">
            <Col>
              <Row center="xs">
                <Col>
                  <h3 className="kanban">To Do</h3>
                </Col>
              </Row>
              {ToDoTaskItems || (<TaskItem style={style.card_styleToDo} />)}
          </Col>

        <Col>
          <Row center="xs">
            <Col>
              <h3 className="kanban">In Progress</h3>
            </Col>
          </Row>
            {InProgressTaskItems || (<TaskItem style={style.card_styleProgress} />)}
        </Col>

        <Col>
          <Row center="xs">
            <Col>
              <h3 className="kanban">In Review</h3>
            </Col>
          </Row>
            {InReviewTaskItems || (<TaskItem style={style.card_styleReview} />)}
        </Col>

        <Col>
          <Row center="xs">
            <Col>
              <h3 className="kanban">Completed</h3>
            </Col>
          </Row>
            {CompletedTaskItems || (<TaskItem style={style.card_styleCompleted} />)}

        </Col>
      </Row>
    </div>
  </MuiThemeProvider>
    );
  }
}


const KanbanBoard = connect(mapStateToProps, null)(ConnectedKanbanBoard)
export default KanbanBoard;
