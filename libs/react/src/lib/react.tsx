import { Route, Link } from 'react-router-dom';

import styles from './react.module.scss';

export function React() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to React!</h1>
      <ul>
        <li>
          <Link to="/">react root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the react root route.</div>} />
    </div>
  );
}

export default React;
