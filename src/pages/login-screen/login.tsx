import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../components/const';
import { Helmet } from 'react-helmet-async';

function Login() {
  return (
    <>
      <Helmet>
        <title>Логин</title>
      </Helmet>
      <Header userEmail={'Oliver@gmail.com'} favoritesCount={1} />
      <div>
        <h2 style={{
          margin: '0 auto',
          width: 'fit-content',
        }}
        >Тут будет страница входа
        </h2>
        <Link to={AppRoute.Main} style={{
          margin: '0 auto',
          width: 'fit-content',
          textDecoration: 'underline',
          display: 'block',
          paddingTop: '20px',
          color: '#5D0EC0',
          cursor: 'pointer',
          fontSize: '16px',

        }}
        >
          На главную страницу
        </Link>
      </div>

    </>
  );
}

export default Login;
