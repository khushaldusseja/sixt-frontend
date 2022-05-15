import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router'; // react-router v4
import { BrowserRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ToastContainer, Slide } from 'react-toastify';

import Loader from '../components/Loader.jsx';
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';

// Dynamically loaded components
const Landing = React.lazy(() => import('../modules/views/Landing/index.jsx'));


const DefaultRoot = ({ component: Component, path, exact, withHeader, withSidebar, activeItem, ...rest }) => {

    return (
        <Route
            path={path}
            exact={exact}
            render= { props => {
                const { match : {params: urlProps} = {}} = props;
                const { location: {state: navigationStateProps}} = props;
                const headerView = withHeader ? (
                    <Header>
                        <Component {...rest} {...urlProps} {...navigationStateProps} />
                    </Header>
                ) : (
                    <Component {...rest} {...urlProps} {...navigationStateProps} />
                );
                
                return (
                    <>
                        {
                            withSidebar && <Sidebar />
                        }
                        <div className='main-body'>
                            {headerView}
                        </div>
                    </>
                );
            }
         }
        />
    );

};

const getRoutes = props => {
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <DefaultRoot component={Landing} exact={true} path='/' withHeader= {false} withSidebar= {false}/> 
                </Switch>
            </BrowserRouter>
            <ToastContainer transition={Slide} />
        </Suspense>
    );
};

getRoutes.propTypes = {
    history: PropTypes.array,
};

export default getRoutes;

