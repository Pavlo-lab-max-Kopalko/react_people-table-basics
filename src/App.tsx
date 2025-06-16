import './App.scss';
import { Link, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { PeoplePage } from './components/PeoplePage';
import classNames from 'classnames';

export const App = () => {
  const location = useLocation();

  return (
    <div data-cy="app">
      <nav
        data-cy="nav"
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classNames('navbar-item', {
                'has-background-grey-lighter': location.pathname === '/',
              })}
            >
              Home
            </Link>

            <Link
              to="/people"
              className={classNames('navbar-item', {
                'has-background-grey-lighter':
                  location.pathname.startsWith('/people'),
              })}
            >
              People
            </Link>
          </div>
        </div>
      </nav>

      <main className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home Page</h1>} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route path="/people">
              <Route index element={<PeoplePage />} />
              <Route path=":slug" element={<PeoplePage />} />
            </Route>
          </Routes>
        </div>
      </main>
    </div>
  );
};
