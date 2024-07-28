// props = read-only properties that are shared between components.
//          A parent component can send data to a child component
//          <Component key=valud />



import "./student.css";
import PropTypes from "prop-types";

function Student(props) {
    return (
      <div>
          <table>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Student</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>{props.id}</td>
                  <td>{props.name}</td>
                  <td>{props.age}</td>
                  <td>{props.student ? "Yes" : "No"}</td>
              </tr>
              </tbody>
          </table>
      </div>
    );
}
// propTypes = a mechanism that ensures that the passed value is
//             of the correct datatype.
//              age: PropTypes.number


// They do not stop the execution, but give an error on the console, if
// wrong type is passed
Student.propTypes = {
    "id": PropTypes.number,
    "name": PropTypes.string,
    "age": PropTypes.number,
    "student": PropTypes.bool,
}

// defaultProps = default value for props in case thaey are not
//                passed from the parent component
//                name: "Guest"
Student.defaultProps = {
    "id": 0,
    "name": "John Doe",
    "age": 56,
    "student": false,
}

export default Student;