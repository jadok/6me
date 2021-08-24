import { AppProps } from 'next/app'
import '../styles/template.scss'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
