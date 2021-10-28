import '../common/styles/globals.css';
import { wrapper } from 'src/common/store/store';

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp);
