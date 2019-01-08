import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class HomeScreen extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen created !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
