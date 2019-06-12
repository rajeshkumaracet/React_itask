import React, { Component } from 'react';
import "./App.css";
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';
class Form extends Component {
     constructor(props) {
          super(props);
          this.state = {
               task: "",
               status: ""
          }
          this.formHandler = this.formHandler.bind(this);
          this.submitHandler = this.submitHandler.bind(this);
     }


     formHandler(e) {
          this.setState({
               [e.target.name]: e.target.value
          })
     }

     submitHandler(e) {
          e.preventDefault();
          console.log(this.props)
          this.props.add(this.state);

          toast.notify(" 😄 Woohoo! Task Added!", {
               duration: 2000,
               position: "top"
          });

          this.setState({
               task: "",
               status: ""

          })


     }

     render() {
          return (


               <div className="formAlign">
                    <div className="row">
                         <div className="col-6 offset-3">
                              <form onSubmit={this.submitHandler}>
                                   <div className="form-group">
                                        <label>TaskName</label>
                                        <input type="text" className="form-control" placeholder="-E.g: Go to School!" name="task" value={this.state.task} onChange={this.formHandler} />
                                   </div>
                                   <div className="form-group">
                                        <label required>Choose Status</label>
                                        <select className="form-control" name="status" value={this.state.status} onChange={this.formHandler}>
                                             <option >Select</option>
                                             <option value="Completed">Completed</option>
                                             <option value="Pending">Pending</option>
                                             <option value="Closed">Closed</option>
                                        </select>
                                   </div>
                                   <button type="submit" className="btn btn-primary btn-block">Add Task</button>
                              </form>
                         </div>
                    </div>
               </div>
          )
     }
}

export default Form;
