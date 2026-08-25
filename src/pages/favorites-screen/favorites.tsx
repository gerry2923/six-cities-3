import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';

function Favorites() {
  return (
    <>
      <Helmet>
        <title>
          Любимые
        </title>
      </Helmet>
      <Header userEmail={'Oliver@gmail.com'} favoritesCount={2} />

      <div>
        <h2 style={{
          margin: '0 auto',
          width: 'fit-content',
          paddingTop: '20px',
          color: '#C81CDE',
        }}
        >
          Тут будут любимые предложения
        </h2>
      </div>
    </>
  );
}

export default Favorites;
