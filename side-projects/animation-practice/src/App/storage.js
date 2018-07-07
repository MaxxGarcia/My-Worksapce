window.addEventListener('keypress', (e)=>{
            // console.log(window.screen);
            if(this.state.ball.leftNum <= window.screen.width -180 && this.state.leftNum >= -30 && this.state.topNum <= window.screen.height -180 && this.state.topNum >= -20){
                if(e.key === "w"){
                this.setState(prevState => ({
                    topNum: prevState.topNum - 20,
                    top: `${this.state.topNum}px`
                }))
                }else if (e.key === "s"){
                    this.setState(prevState => ({
                        ball: {topNum: prevState.topNum + 20},
                        ball: {top: `${this.state.topNum}px`}
                }))  
                }else if (e.key === "a"){
                    this.setState(prevState => ({
                        leftNum: prevState.leftNum - 20,
                        left: `${this.state.leftNum}px`
                    }))  
                }else if (e.key === "d"){
                    this.setState(prevState => ({
                        leftNum: prevState.leftNum + 20,
                        left: `${this.state.leftNum}px`
                    }))  
                }else if (e.key === "d" && e.key === "w"){
                    this.setState(prevState => ({
                        leftNum: prevState.leftNum + 20,
                        left: `${this.state.leftNum}px`,
                        topNum: prevState.topNum - 20,
                        top: `${this.state.topNum}px`
                    }))  
                }
            } else if (this.state.ball.leftNum >= window.screen.width -180) {
                this.setState(prevState => ({
                leftNum: prevState.leftNum - 6,
                left: `${this.state.leftNum}px`
            }))
            }else if (this.state.leftNum <= -30) {
                this.setState(prevState => ({
                leftNum: prevState.leftNum + 6,
                left: `${this.state.leftNum}px`
            }))
            }else if (this.state.topNum <= -20) {
                this.setState(prevState => ({
                topNum: prevState.topNum + 10,
                top: `${this.state.topNum}px`
        }))
            }else if (this.state.topNum >= window.screen.height -180) {
                this.setState(prevState => ({
                topNum: prevState.topNum - 10,
                top: `${this.state.topNum}px`
        }))
            }
          })