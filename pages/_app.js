import "../style.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // console.log(pageProps);
  // console.log(Component);
  return <Component {...pageProps} />;
}
