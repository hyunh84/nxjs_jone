import "../public/resources/css/font.css";
import "../public/resources/css/base.css";
import "../public/resources/css/layout.css";
import "../public/resources/css/contents.css";
import "../public/resources/css/animation.css";
import "../public/resources/css/layout_mo.css";
import "../public/resources/css/contents_mo.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}