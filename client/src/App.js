import logo from './logo.svg';
import './App.css';
import { MdClose } from "react-icons/md"

function App() {
  return (
    <>
      <div className="container">
        <button className="btn btn-add">
          Add
        </button>

        <div className="addContainer">

          <form>
            <div className="close-btn"><MdClose /></div>
            <lable htmlFor="name">Name : </lable>
            <input type="text" id="name" name="name" />

            <lable htmlFor="email">Email : </lable>
            <input type="email" id="email" name="email" />

            <lable htmlFor="mobile">Mobile : </lable>
            <input type="number" id="mobile" name="mobile" />

            <button className="btn">Submit</button>

          </form>
        </div>

      </div>
    </>
  );
}

export default App;
