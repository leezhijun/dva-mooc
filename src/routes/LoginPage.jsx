import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/public/Loading';

const LoadableComponent = Loadable({
  loader: () => import('../components/Login'),
  loading: Loading,
});

export default class LoginPage extends Component {
  render() {
    return <LoadableComponent/>;
  }
}
