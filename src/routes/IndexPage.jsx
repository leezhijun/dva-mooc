import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import { Link } from 'dva/router'
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
    <Link to='/login'>default</Link>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
