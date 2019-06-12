import React, { Component } from 'react';
import "./App.css";

class Closed extends Component {
     render() {

          const listItems = this.props.iTask.map((link, i) =>


               <div className="col-4">
                    <div>
                         <div className="card text-white bg-danger mt-5 ml-3 mr-3 mb-2">
                              <div className="card-body">
                               <h4 className="card-text text-center" key={i}><i class="fa fa-window-close"></i> {link.task}</h4>

                              </div>
                         </div>

                    </div>
               </div>



          );


          return (
               <div>
                    {this.props.iTask.length <= 0 ?
                         <div className="jumbotron jumbotron-fluid jumbo">
                              <div className="container">
                                   <h1 className="display-4 text-center">Oops! No Task Found!</h1>
                                   <p className="lead"></p>
                              </div>
                         </div>
                         :
                         <div>
                           <h1 className="text-center text-white">Here the Tasks! 🤕</h1>
                         <div class="row">

                                   {listItems}
                                   <br />

                         </div>
                         </div>
                    }

               </div>
          )
     }
}

export default Closed;


