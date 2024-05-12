import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StatusCountsContext from './StatusCountsContext';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Declined from './Pages/Declined';
import Details from './Pages/Details';

const App = () => {
    return (
        <StatusCountsContext>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addCandidate' element={<AddCandidate />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/confirmed' element={<Confirmed />} />
                    <Route path='/declined' element={<Declined />} />
                    <Route path='/details/:id' element={<Details />} />
                </Routes>
            </Layout>
        </StatusCountsContext>
    );
}

export default App;