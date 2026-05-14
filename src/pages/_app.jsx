import '../styles/globals.css';
import TravenceAssistant from '../components/TravenceAssistant';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <TravenceAssistant />
    </>
  );
}
