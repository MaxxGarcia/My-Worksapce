import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { UniverseName, } from "./stylesheets/text"
import { getUniverses } from "./redux"


class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      fillings: ["AliceBlue", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"],
      scores: [],
    }
    this.canvas = React.createRef();
    this.setUpContext = this.setUpContext.bind(this);
  }
  setUpContext() {
    let ctx = this.canvas.current.getContext('2d');
    const count = universe => {
      return universe.children && universe.children.reduce((sum, child) => sum + count(child), 1)
    }
    for (let i = 0; i < this.props.universes.length; i++) {
      this.setState(prevState => {
        return {
          ...prevState,
          scores: [...prevState.scores, count(this.props.universes[i])]
        }
      })
    }

    let width = 100;
    let currX = 0;

    ctx.translate(220, 390);
    ctx.rotate(1 * Math.PI);

    for (var i = 0; i < this.state.scores.length; i++) {
      ctx.fillStyle = this.state.fillings[i];
      ctx.fillRect(currX, 0, width, this.state.scores[i] * 2);
      currX += width + 10;
    }
  }
  componentDidMount() {
    this.props.getUniverses()
      .then(this.setUpContext);
  }
  render() {
    return (
      <section className="simpleBarChart">
        <UniverseName>Number of Children:</UniverseName>
        {this.props.universes.map((universe, i) => {
          return <div key={universe + i} style={{ color: this.state.fillings[i], fontSize: "20px" }}>{universe.name}: {this.state.scores[i]}</div>
        })}
        <canvas ref={this.canvas} style={{ border: "solid thin white" }} id="myCanvas" width="800" height="400" />
      </section>
    );
  }
}

export default withRouter(connect(state => state, { getUniverses })(BarChart));
