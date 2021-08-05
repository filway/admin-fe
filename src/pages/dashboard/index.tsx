import { useEffect } from 'react';
import styles from './index.less';

export default function IndexPage() {

  useEffect(() => {
    fetch('/api/mock-demo')
      .then(res => res.json())
      .then(data => {
        console.log('mock-demo red data', data)
      })
      .catch(ex => {
        console.error('mock-demo error', ex)
      })
  }, [])

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
