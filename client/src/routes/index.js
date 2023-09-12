import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from '../pages/dashboard';
import Layout from '../components/layout';
import NotFound from '../pages/notFound';
import Job from '../components/job';

export const RouteContainer = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Layout><DashBoard /></Layout>} />
			<Route path='*' element={<Layout><NotFound /></Layout>} />
				<Route path='/jobs' element={<Layout><Job /></Layout>} />
		</Routes>
	</BrowserRouter>
);
