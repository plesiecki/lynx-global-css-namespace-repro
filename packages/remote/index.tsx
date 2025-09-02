import '@lynx-js/preact-devtools'
import '@lynx-js/react/debug'
import './styles.css'

export default function Remote() {
  return (
    <view>
      <text className='global-red'>remote text with global-red</text>
      <text className='local-red'>remote text with local-red</text>
    </view>
  );
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}