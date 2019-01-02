import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
    <Button>default</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
