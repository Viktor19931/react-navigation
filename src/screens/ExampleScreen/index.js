import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ExampleScreen extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ExampleScreen created !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExampleScreen;
