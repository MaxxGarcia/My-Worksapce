const dollarsFunction = (props) => {
    if (props.location.price < 500){
      return "$"
    }
    else if (props.location.price < 1000){
      return "$$"
    } else if (props.location.price >= 1000){
      return "$$$"
    }
  }

  export default dollarsFunction;