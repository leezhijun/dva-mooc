import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/public/loading';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

export default class App extends Component {
  render() {
    return <LoadableComponent/>;
  }
}
