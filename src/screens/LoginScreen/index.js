import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Index extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen created !</Text>
        <Button
          title="Go to home "
          onPress={() => this.props.navigation.navigate('Home')}
        />
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

export default Index;
