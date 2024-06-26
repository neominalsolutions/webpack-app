import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import AboutPage from './pages/AboutPage'; senkron load işlemi
import './style.scss';
//import ReactMemoSample from './pages/reactMemo/ReactMemoSample';
import UseMemoSample from './pages/useMemo/UseMemoSample';
import UseCallBackSample from './pages/useCallback/UseCallBackSample';
import UseRefSample from './pages/useRef/UserRefSample';
import ReactXSSSample from './pages/reactXSS/ReactXSSSample';
import UseReducerSample from './pages/useReducer/UseReducerSample';
import UseFetchSample from './pages/customHook/UseFetchSample';
import { HelmetProvider } from 'react-helmet-async';

const AboutPage = React.lazy(() => import('./pages/AboutPage')); // asenkron bir load işlemi
const ReactMemoSample = React.lazy(
	() => import('./pages/reactMemo/ReactMemoSample')
); // asenkron bir load işlemi

const router = createBrowserRouter([
	{
		path: '',
		Component: App,
		children: [
			{
				path: '/about',
				Component: AboutPage,
			},
			{
				path: '/reactMemo',
				Component: ReactMemoSample,
			},
			{
				path: '/useMemo',
				Component: UseMemoSample,
			},
			{
				path: '/useCallback',
				Component: UseCallBackSample,
			},
			{
				path: '/useRef',
				Component: UseRefSample,
			},
			{
				path: '/reactXSS',
				Component: ReactXSSSample,
			},
			{
				path: '/useReducer',
				Component: UseReducerSample,
			},
			{
				path: '/useFetch',
				Component: UseFetchSample,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<Suspense fallback={<>... Loading</>}>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</Suspense>
);
