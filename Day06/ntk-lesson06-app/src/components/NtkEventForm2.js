import React, { Component } from 'react'

export default class NtkEventForm2 extends Component {
  constructor(props) {
        super(props);
        this.state = {
            studentName:'',
            age:0,
            course:'ReactJS'
        }
    }

    handleChange = (event)=>{
        let name = event.target.name;
        let val = event.target.value;

        this.setState(
            {
                [name]:val
            }
        )
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        alert("Name:" + this.state.studentName + "\n Age:" + this.state.age)
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h1>Event Form - Tổng hợp</h1>
                <hr/>
                <form>
                    <div>
                        <label htmlFor='studentName'>Student Name:</label>
                        <input name='studentName' 
                            value={this.state.studentName} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='age'>Student Age:</label>
                        <input name='age' value={this.state.age} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor='course'>Course:</label>
                        <select name='course' value={this.state.course} onChange={this.handleChange}>
                            <option value={'HTML5'}>HTML5</option>
                            <option value={'ReactJS'}>ReactJS</option>
                            <option value={'PHP'}>PHP</option>
                        </select>
                    </div>

                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
