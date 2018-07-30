import React, { Component } from 'react'
import { NodeWrapper, Description, UniverseName, Button, VanishingUl, Modal, ModalContent, Close, ModalHeader, ModalBody, ModalFooter, ModalButton } from "./stylesheets/text"
import { connect } from "react-redux";
import Form from './Form'
import { getUniverses } from "./redux"

class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description || "",
            nodeShow: false,
            descriptionShow: false,
            modalShow: false,
            address: this.props.address,
            universes: this.props.universes,
            _id: this.props._id,
            passingColor: !this.props.passingColor,
            passingNumber: this.props.passingNumber
        }
        this.toggleNode = this.toggleNode.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
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
    toggleDescription() {
        this.setState(prevState => {
            return {
                ...prevState,
                descriptionShow: !prevState.descriptionShow,
            }
        })
    }
    render() {
        const { description, name, address } = this.state;
        const { children } = this.props;
        return (
            <NodeWrapper>
                <UniverseName><Button onClick={this.toggleNode}> + </Button> {name} <ModalButton onClick={this.toggleModal}> Add Child </ModalButton></UniverseName>
                <VanishingUl show={this.state.nodeShow} passingColor={this.state.passingColor}>
                    <Button onClick={this.toggleDescription}>+</Button><UniverseName>Description</UniverseName>
                    <VanishingUl show={this.state.descriptionShow} passingColor={this.state.passingColor}>
                        <Description>{description}</Description>
                    </VanishingUl>
                    {children && children.map((child, i) => <Node {...child} address={`${address}.children[${i}]`} universes={this.props.universes} increment={this.props.increment} _id={this.state._id} key={child + i} passingColor={this.state.passingColor} passingNumber = {this.state.passingNumber}/>)}
                </VanishingUl>
                <Modal show={this.state.modalShow} >
                    <ModalContent>
                        <ModalHeader>
                            <Close onClick={this.toggleModal}> X </Close>
                        </ModalHeader>
                        <ModalBody>
                            <Form address={address} toggleNode={this.toggleNode} toggleModal={this.toggleModal} _id={this.state._id} />
                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </NodeWrapper>
        )
    }
}

export default connect(state => state, { getUniverses })(Node);