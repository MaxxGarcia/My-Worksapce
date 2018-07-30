import React, { Component } from 'react';
import { connect } from 'react-redux';
import Node from "./Node";
import { getUniverses } from "./redux"
import { withRouter } from 'react-router-dom'
import { UniverseButton, Modal, ModalContent, ModalHeader, Close, ModalBody, ModalFooter } from "./stylesheets/text"
import UniverseForm from "./UniverseForm"

class Universes extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleNode = this.toggleNode.bind(this)
  }
  componentDidMount() {
    this.props.getUniverses();
  }
  toggleModal() {
    this.setState(prevState => {
      return {
        ...prevState,
        modalShow: !prevState.modalShow,
      }
    })
  }
  toggleNode() {
    this.setState(prevState => {
        return {
            ...prevState,
            nodeShow: !prevState.nodeShow,
        }
    })
}
  render() {
    return (
      <div className="universesWrapper">
        {this.props.universes.map((universe, i) => {
          return <Node {...universe} key={universe + i} address={`this.props.universes[${i}]`} _id={universe._id} passingColor={String(false)} passingNumber={i}></Node>
        })}
        <div><UniverseButton onClick={this.toggleModal}> Add Universe</UniverseButton></div>
        <Modal show={this.state.modalShow} >
          <ModalContent>
            <ModalHeader>
              <Close onClick={this.toggleModal}> X </Close>
            </ModalHeader>
            <ModalBody>
              <UniverseForm toggleModal={this.toggleModal} />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div >
    );
  }
}

export default withRouter(connect(state => state, { getUniverses })(Universes));
