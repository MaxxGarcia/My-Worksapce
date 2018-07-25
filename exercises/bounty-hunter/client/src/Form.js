import React, { Component } from "react";
import { connect } from 'react-redux';
import { newBounty, getBounties } from './redux'
import BountyList from './BountyList'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            bountyFirstName: '',
            bountyLastName: '',
            bountyLiving: 'Unknown',
            bountyAmount: 0,
            bountyType: "Unknown",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.newBounty(this.state)
    }
    componentDidMount(){
        window.onload = this.props.getBounties()
      }
    render() {
        const { bountyFirstName, bountyLastName, bountyLiving, bountyAmount, bountyType } = this.state;
        return (
            <div className="formWrapper">
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name="bountyFirstName" onChange={this.handleChange} placeholder="Bounty First Name?" value={bountyFirstName} />
                    <input type='text' name="bountyLastName" onChange={this.handleChange} placeholder="Bounty Last Name?" value={bountyLastName} />
                    <select type='text' name="bountyLiving" onChange={this.handleChange} placeholder="Is Bounty Alive?" value={bountyLiving}>
                        <option value="Unknown">Unknown</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <input type='number' name="bountyAmount" onChange={this.handleChange} placeholder="Bount Amount" value={bountyAmount} />
                    <select type='text' name="bountyType" onChange={this.handleChange} placeholder="Bounty Type" value={bountyType}>
                        <option value="Unknown" >Unknown</option>
                        <option value="Jedi">Jedi</option>
                        <option value="Sith">Sith</option>
                    </select>
                    <button>Add Bounty</button>
                </form>
                <div>
                    <BountyList />
                </div>
            </div>
        )
    }
}

export default connect(state => state, { newBounty, getBounties })(Form);