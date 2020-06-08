import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Pane } from 'evergreen-ui';
import './App.css';
import { Header } from './components/header';
import { DocumentsPage } from './pages/Documents';
import { ResourcesPage } from './pages/Resources';
import { DocumentPage } from './pages/Document';

function App() {
    return (
        <Router>
            <Pane
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                background="tint2"
            >
                <Header />
                <Pane
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <Switch>
                        <Route path="/resources">
                            <ResourcesPage />
                        </Route>
                        <Route path="/document/:id">
                            <DocumentPage />
                        </Route>
                        <Route path="/">
                            <DocumentsPage />
                        </Route>
                    </Switch>
                </Pane>
            </Pane>
        </Router>
    );
}

export default App;
