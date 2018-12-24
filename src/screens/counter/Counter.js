import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CounterActions } from './CounterActions';
import styles from './styles';

@connect(state => ({ counter: state.counter }))
class Counter extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.shape({
      count: PropTypes.number,
    }),
  };

  static defaultProps = {
    counter: {
      count: 0,
    },
  };

  incrementCount = () => {
    const { dispatch } = this.props;
    dispatch(CounterActions.incrementCount());
  };

  render() {
    const { counter: { count } } = this.props;
    return (
      <View style={styles.container}>
        <Text>{count}</Text>
        <Button title="Tap Me" onPress={this.incrementCount} />
      </View>
    );
  }
}

export default Counter;
