import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import ArticlePage from '../components/ArticlePage';
import SourcePage from '../components/SourcePage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={ ArticlePage } exact={ true } />
                <Route path='/sources' component={ SourcePage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;
