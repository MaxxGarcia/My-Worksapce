import React, {Component} from 'react'
import './styles.css'

class KidLink extends Component {
    state = {
        positionX: -125,
        isMoving: "none",
        leftRight: 1,
        isStanding: "block",
        upSpecial: "none",
        intervalID: null,
        pause: false,
        indicatorStyle: {
            backgroundColor: "rgba(255,230,230,1)"
        },
        plainStyle: {
            backgroundColor: "rgba(255,255,255,0)"
        }
    }



    moveLeft = () => {
        this.setState(prev => ({
          positionX: prev.positionX -= 2,
          leftRight: -1,
          isMoving: "block",
          isStanding: "none",
          upSpecial: "none"
        }))

    }
    moveRight = () => {
        this.setState(prev => ({
          positionX: prev.positionX += 2,
          leftRight: 1,
          isMoving: "block",
          isStanding: "none",
          upSpecial: "none"
        }))
    }
    upBspecial = () => {
        this.setState({
            isMoving: "none",
            isStanding: "none",
            upSpecial: "block",
            pause: true
        })
    }

    handleMouseDownL = () => {
        clearInterval(this.state.intervalID)
        this.setState({
            intervalID: setInterval(this.moveLeft, 10)
        })
    }
    handleMouseDownR = () => {
        clearInterval(this.state.intervalID)
        this.setState({
            intervalID: setInterval(this.moveRight, 10)
        })
    }
    handleFinish = () => {
        this.setState({
            isMoving: "none",
            isStanding: "block",
            upSpecial: "none",
            pause: false
        })
    }

    handleNavigationAbout = () => {
        if(this.state.positionX < -60){
            return this.state.indicatorStyle
        } else {
            return this.state.plainStyle
        }
    }
    handleNavigationPortfolio = () => {
        if(this.state.positionX >= -60 && this.state.positionX <= 60){
            return this.state.indicatorStyle
        } else {
            return this.state.plainStyle
        }
    }
    handleNavigationJournal = () => {
        if(this.state.positionX > 60){
            return this.state.indicatorStyle
        } else {
            return this.state.plainStyle
        }
    }

    handleNavigation = () => {
        if(this.state.positionX >= -60 && this.state.positionX <= 60){
            console.log(this.props);
            return this.props.history.push("/")
        } else if(this.state.positionX > 60){
            return this.props.history.push("/dev_journal")
        } else if(this.state.positionX < -60){
            return null
        }
    }

    handleMouseDownS = () => {
        this.upBspecial()
        setTimeout(this.handleFinish, 750)
        setTimeout(this.handleNavigation, 800)
    }
    handleMouseUp = (e) => {
        if(this.state.pause === false){
            clearInterval(this.state.intervalID)
            this.setState(prev => ({
              isMoving: "none",
              isStanding: "block",
              upSpecial: "none",
              intervalID: null,
              pause: false
            }))
        }
    }
    handleKeyPress = (e) => {
        e.preventDefault()
        if (e.which === 37){
            this.handleMouseDownL()
        } else if (e.which === 39) {
            this.handleMouseDownR()
        }  else if (e.which === 13) {
            this.handleMouseDownS()
        }   else if (e.which === 32) {
            this.handleMouseDownS()
        } else {
            console.log("fail");
        }
    }

    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyPress)
        window.addEventListener('keyup', this.handleMouseUp)
    }

    componentWillUnmount(){
        window.removeEventListener('keyup', this.handleMouseUp)
        window.removeEventListener('keydown', this.handleKeyPress)
    }

    render(){
        const movement = {
            display:`${this.state.isMoving}`,
            left: `${this.state.positionX}px`,
            transform: `scaleX(${this.state.leftRight})`
        }
        const stand = {
            display:`${this.state.isStanding}`,
            left: `${this.state.positionX}px`
        }
        const upBAttack = {
            display:`${this.state.upSpecial}`,
            left: `${this.state.positionX}px`
        }
        return(
            <div className="home-container">
                <div className="home-navigation">
                    <Link className="link-nav" to="/portfolio"><div className="home-about home-navKey home-hover" style={this.handleNavigationAbout()}>Remain</div></Link>
                    <Link className="link-nav" to="/"><div className="home-portfolio home-navKey home-hover" style={this.handleNavigationPortfolio()}>Back to Homepage</div></Link>
                    <Link className="link-nav" to="/notes"><div className="home-journal home-navKey home-hover" style={this.handleNavigationJournal()}>Jump to Dev Journal</div></Link>
                </div>
                <div className="home-avitar-container">
                    <div className="avitarMove" style={movement}></div>
                    <div className="avitarAttack" style={upBAttack}></div>
                    <div className="avitarStand" style={stand}></div>
                </div>
                <div className="controls-container">
                    <div className="toggleAvi aviLeft" onKeyDown={this.handleKeyPress} onKeyUp={this.handleMouseUp} onTouchEnd={this.handleMouseUp} onTouchStart={this.handleMouseDownL} onMouseUp={this.handleMouseUp} onMouseDown={this.handleMouseDownL}>
                        <div className="leftArrow"></div>
                    </div>
                    <div className="toggleAvi aviRight" onTouchEnd={this.handleMouseUp} onTouchStart={this.handleMouseDownR} onMouseUp={this.handleMouseUp} onMouseDown={this.handleMouseDownR}>
                        <div className="rightArrow"></div>
                    </div>
                    <div className="toggleAvi aviUpB" onClick={this.handleMouseDownS}></div>
                </div>
            </div>
        )
    }
}
export default KidLink
