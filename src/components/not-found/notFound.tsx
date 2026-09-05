import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { Helmet } from 'react-helmet-async';

const variants = {
  page: {text: 'Page Not Found', o: '😣'},
  offer: {text: 'We have no offers with that ID', o: '🤯'}
};

type TNotFoundProps = {
  type: keyof typeof variants;
}

function NotFound({type}: TNotFoundProps) :JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1 style={{
        width: 'fit-content',
        height: 'min-content',
        margin: '70px auto 40px',
        fontSize: '56px',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
      >{`4${variants[type].o}4.`}<br />
        <small style={{
          margin: '0 auto',
        }}
        >{`Oooops! ${variants[type].text}`}
        </small>
      </h1>

      <Link to={AppRoute.Main}
        style={{
          width: 'fit-content',
          display: 'block',
          margin: '0 auto',
          fontSize: '32px',
          textDecoration: 'underline',
          color: '#000066',
        }}
      >
        go to main page
      </Link>
    </Fragment>
  );
}


export default NotFound;
