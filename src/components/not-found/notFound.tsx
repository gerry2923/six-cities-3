import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <Fragment>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1 style={{
        width: 'fit-content',
        height: 'min-content',
        margin: '10px auto 40px',
        fontSize: '56px',
        fontWeight: 'bold'
      }}
      >404.<br />
        <small style={{
          margin: '0 auto',
        }}
        >Page Not Found
        </small>
      </h1>

      <Link to={AppRoute.Main}
        style={{
          width: 'fit-content',
          display: 'block',
          margin: '0 auto',
          fontSize: '32px',
          textDecoration: 'underline'
        }}
      >
        go to main page
      </Link>
    </Fragment>
  );
}


export default NotFound;
