import { Suspense, lazy } from '@lynx-js/react';
import './styles.css'

const LazyComponent = lazy(
  () =>
    import('http://localhost:3000/remote.lynx.bundle', {
      with: { type: 'component' },
    }),
);

export function App() {
  return (
    <view className='theme'>
      <text className='global-red'>host text with global-red</text>
      <Suspense fallback={<text>Loading...</text>}>
        <LazyComponent/>
      </Suspense>
    </view>
  );
}