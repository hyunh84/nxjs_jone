import "../styles/css/font.css";
import "../styles/css/base.css";
import "../styles/css/layout.css";
import "../styles/css/contents.css";
import "../styles/css/animation.css";
import "../styles/css/layout_mo.css";
import "../styles/css/contents_mo.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}