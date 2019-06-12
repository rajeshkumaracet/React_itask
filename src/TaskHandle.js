import React, { Component } from 'react';
import Form from "./Form";
import Completed from "./Completed";
import Pending from './Pending';
import Closed from './Closed';
import App from "./App";
import { Route, Switch } from "react-router-dom";


class TaskHandle extends Component {
     constructor(props) {
          super(props);
          this.state = {
               tasks: []
          }

          this.catchFormData = this.catchFormData.bind(this);
     }

     catchFormData(task) {
          this.setState({
               tasks: [...this.state.tasks, task]
          })
     }

     render() {

          let comp = [];
          let closed = [];
          let pending = [];
          if (this.state.tasks.length > 0) {
               comp = this.state.tasks.filter(cur => cur.status === "Completed" ? cur.task : "")
               closed = this.state.tasks.filter(cur => cur.status === "Closed" ? cur.task : "")
               pending = this.state.tasks.filter(cur => cur.status === "Pending" ? cur.task : "")

          }

          return (
               <div>

                    <Form add={this.catchFormData} />

                    <Switch>
                         <Route exact path="/completed" render={() => <Completed iTask={comp} />} />
                         <Route exact path="/pending" render={() => <Pending iTask={pending} />} />
                         <Route exact path="/closed" render={() => <Closed iTask={closed} />} />
                         <Route render={() => <h1>Page Not Found!</h1>} />
                    </Switch>

               </div>
          )
     }
}

export default TaskHandle;
