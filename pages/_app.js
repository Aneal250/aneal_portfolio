import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="my-20 mx-32">
      <Component {...pageProps} />
    </div>
  );
}
