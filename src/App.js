import React from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './firebase/firebase'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      course: {}
    };
  }

  // componentDidMount() {
  //   db.collection("course")
  //     .get()
  //     .then(querySnapshot => {
  //       const data = querySnapshot.docs.map(doc => doc.data());
  //       console.log(data);
  //       this.setState({ users: data });
  //     });
  // }
  componentDidMount(){
    console.log("hello....")
    db.collection("course").doc("7VwZ2vJFO9RjZZLfDoXm")
    .get()
    .then(doc => {
      console.log(doc.data())
      this.setState({
        course: doc.data()
      })
    })
  }

   resetTestUser = () => {
    const testUser = db.collection("profile").where('mobile_number','==','1234567890');
    testUser
    .get()
    .then(querySnapshot => {
      console.log(querySnapshot.length)
      querySnapshot.forEach(doc => {
        doc.ref.delete()
        .then(() => {
          console.log("Document successfully deleted!")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        })  
      })
    }).catch(error => {
      console.error("Document does not exist", error);
    })
  }

  render() {
    return (
      <div className="row">
          <div className="col-lg-6 col-md-6 col-s-12 mb-4">
            <h5>{this.state.course.title}</h5>
          </div>
          <button
          onClick={this.resetTestUser}>
            Rest Test User
          </button>
      </div>
    );
  }
}
  

// function App() {

//   const getCourse = () => {
//     // const cityRef = db.collection('course').doc('7VwZ2vJFO9RjZZLfDoXm');
//     console.log("inside getCourse")
//     db.collection("course")
//     .get()
//     .then(querySnapshot => {
//       const data = querySnapshot.docs.map(doc => doc.data());
//       console.log(data);
//       // this.setState({ users: data });
//     });
//   }

//   const course = getCourse()
//   return (
//     <div>
//       <p>
//       HELLO
//       </p>
        
//     </div>
//   );
// }

export default App;
