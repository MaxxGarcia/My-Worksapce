import React, { Component } from 'react';
import Form from './shared/Form.js'
import Toggler from './shared/Toggler.js'

class App extends Component {
  render() {
    return (
      <div>
        <Toggler render={props => {
          const { toggled, handleToggle } = props;
          return (
            <div>
              <button onClick={handleToggle}>Edit</button>
              {toggled && <Form inputs={{
                name: '',
                occupation: ''
              }} reset
                submit={inputData => alert("Target Nutralized")}
                render={props => {
                  const { handleSubmit, handleChange, inputs } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <input value={inputs.name} name="name" type="text" onChange={handleChange} />
                      <input value={inputs.occupation} name="occupation" type="text" onChange={handleChange} />
                      <button>Submit</button>
                    </form>
                  )
                }} />}
            </div>
          )
        }} />
      </div>
    )
  }
}


export default App;

{/* <div style={{backgroundColor: toggled ? 'red' : "blue"}}>
              <button onClick={handleToggle}> Change Color</button>
            </div>   */}





{/* <div>
            <button onClick={handleToggle}>Edit</button>
            {toggled && <EditForm>
              <form>
                <input type="text" placeholder="Enter Name"/>
                <input type="text" placeholder="Enter Email"/>
                <button>Submit</button>
              </form>
            </EditForm>
            }
          </div> */}