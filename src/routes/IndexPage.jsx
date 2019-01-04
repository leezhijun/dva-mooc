import React from 'react';
import { connect } from 'dva';
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
