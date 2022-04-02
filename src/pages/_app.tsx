import * as React from 'react';
import type {AppProps} from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import createEmotionCache from '../../utility/createEmotionCache';
import Layout from '../components/Layout';

import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps} = props;

	return (
		<CacheProvider value={emotionCache}>
			<CssBaseline/>
			<Layout>
				<Component {...pageProps}/>
			</Layout>
		</CacheProvider>
	)
}

// function MyApp({Component, pageProps}: AppProps) {
// 	return (
// 		<Layout>
// 			<Component {...pageProps} />
// 		</Layout>
// 	);
// }

export default MyApp;
