import React, {Component} from 'react'
import './styles.css'
import surgeSprite from "./i8aic.png";

class Sprite extends Component {
    constructor(){
        super();
        this.state = { 
            ball:{
                position: "absolute",
                top: "300px",
                left: "400px",
                topNum: 300,
                leftNum: 400,
            },
            surge:{
                animation: "surgeStatic 550ms steps(3, end) infinite",
                position: "absolute",
                top: "300px",
                left: "400px",
                topNum: 300,
                leftNum: 400,
                backgroundImage: `url(${surgeSprite})`,
                backgroundSize: "1150%",
                height: "65px",
                width: "38px"
            }
        }
    }
    componentDidMount(){
        window.addEventListener("keydown", (e) => {
            if(this.state.surge.leftNum <= window.screen.width -50 && this.state.surge.leftNum >= 0 && this.state.surge.topNum <= window.screen.height -180 && this.state.surge.topNum >= -20){
                if(e.key === "w" || e.code === "space"){
                    this.setState(prevState => ({
                       surge: {
                            ...prevState.surge,
                            topNum: prevState.surge.topNum - 20,
                            top: `${this.state.surge.topNum}px`,
                            animation: "surgeJump 550ms steps(4, end) infinite"
                        }
                    }))
                    } else if (e.key === "d"){
                        this.setState(prevState => ({
                        surge: {
                            ...prevState.surge,
                            leftNum: prevState.surge.leftNum + 20,
                            left: `${this.state.surge.leftNum}px`,
                            animation: "surgeRight 550ms steps(3, end) infinite",
                            transform: "",
                        }
                    }))
                }else if (e.key === "a"){
                    this.setState(prevState => ({
                    surge: {
                        ...prevState.surge,
                        leftNum: prevState.surge.leftNum - 20,
                        left: `${this.state.surge.leftNum}px`,
                        animation: "surgeRight 550ms steps(3, end) infinite",
                        transform: "scaleX(-1)",
                    }
                }))
            }
            } else if (this.state.surge.leftNum >= window.screen.width -50) {
                this.setState(prevState => ({
                surge: {
                    ...prevState.surge,
                    animation: "surgeBump 10000ms steps(1, end) infinite",
                    leftNum: prevState.surge.leftNum - 50,
                    left: `${this.state.surge.leftNum}px`,
            }
            }))
            }else if (this.state.surge.leftNum <= 0) {
                this.setState(prevState => ({
                surge: {
                    ...prevState.surge,
                    animation: "surgeBump 10000ms steps(1, end) infinite",
                    leftNum: prevState.surge.leftNum + 50,
                    left: `${this.state.surge.leftNum}px`,
            }
            }))
            }
        })
        window.addEventListener("keyup", (e) => {
            this.setState(prevState => ({
                surge:{
                    ...prevState.surge,
                    animation: "surgeStatic 550ms steps(3, end) infinite",
                }
            }))
        })
    }
    drag(e){
        e.dataTransfer.setData('text', e.target.id)
    }
    drop(e){
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
    }
    allowDrop(e){
        e.preventDefault();
    }
    render(){
        return (
            <div >
                <div className="spriteWrapper">
                    {/* <div className="sprite a"></div>
                    <div className="sprite b"></div>
                    <div className="sprite c"></div> */}
                    {/* <div style={this.state.ball}className="sprite d"></div> */}
                    <div id="surge" style={this.state.surge} className="surge" draggable="true" onDragStart="drag(event)"></div>
                </div>
                
                <div id="dragbox" onDrop={this.state.dropdrop} onDragOver={this.state.drag} >
                </div>
            </div >
        )
    }
}

export default Sprite
