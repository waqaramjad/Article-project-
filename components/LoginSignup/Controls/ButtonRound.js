import React, {Component} from "react";
import {Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
  "buttonRound": {
    "backgroundColor": "#fff",
    "paddingTop": 12,
    "paddingRight": 12,
    "paddingBottom": 12,
    "paddingLeft": 12,
    "borderColor": "#ddd",
    "borderWidth": 1,
    "alignSelf": "center",
    "borderRadius": 20,
    "marginTop": 12,
    "marginLeft": 10,
    "marginRight": 10,
    "width": width - 30
  },
  "buttonRoundText": {
    "color": "#333",
    "alignSelf": "center",
    "fontSize": 14
  },
});

export default class ButtonRound extends Component {
  render = () => {
    return (
      <TouchableOpacity style={[styles.buttonRound, this.props.style]}
                        onPress={this.props.onPress}>
        <Text style={styles.buttonRoundText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
