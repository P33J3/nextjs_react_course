import '../styles/globals.css'
import Layout from '../components/layout/Layout';

/* this is considered the root component that nextjs will render, object destructuring is used to pull information out of the props.
Component is a prop which holds the pages' contents
pageProps holds the props which pages might be getting; it is dynamic and changes depending on the page.
Eg, Wrapping Component with the <Layout> Component, transfer all the styles from into the components
It allows you to wrap one component instead of individually wrapping each component with your styles.|| When you have a general component 
you want to apply to the entire app, you use this file
  */

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
