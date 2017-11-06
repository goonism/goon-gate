import React from "react";
import { Switch } from "react-router-dom";
import Animated from "react-dom-animated";

export default class AnimatedSwitch extends Switch {
	constructor(props) {
		super(props);
		const animate = new Animated.Value(0);
		animate.addListener(this.onAnimate);
		this.state = {
			display: "block",
			animate
		};
	}

  onAnimate = ({ value }) => {
  	if (value > 0.99) {
  		this.setState({
  			display: "inline"
  		});
  	} else {
  		this.setState({
  			display: "block"
  		});
  	}
  };

  componentWillMount() {
  	setTimeout(
  		() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
  		450
  	);
  }

  componentWillReceiveProps() {
  	setTimeout(
  		() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
  		450
  	);
  	Animated.spring(this.state.animate, { toValue: 0.5 }).start();
  }
  render() {
  	const style = {
  		display: this.state.display,
  		opacity: Animated.template`${this.state.animate}`,
  		transform: Animated.template`
				translate3d(0,${this.state.animate.interpolate({
		inputRange: [0, 1],
		outputRange: ["14.4px", "0px"]
	})},0)
			`
  	};

  	return <Animated.div style={style}>{super.render()}</Animated.div>;
  }
}
