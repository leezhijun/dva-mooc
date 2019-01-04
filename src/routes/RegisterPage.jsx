import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/public/Loading';

const LoadableComponent = Loadable({
  loader: () => import('../components/Register'),
  loading: Loading,
});

export default class RegisterPage extends Component {
  render() {
    return <LoadableComponent/>;
  }
}
