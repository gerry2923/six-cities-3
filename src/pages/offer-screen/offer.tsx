import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';

function Offer() {
  const params = useParams();
  // eslint-disable-next-line no-console
  console.log(params);

  return (
    <Fragment>
      <Helmet>
        <title>Предложение</title>
      </Helmet>
      <Header userEmail={'oliver@mail.ru'} favoritesCount={0} />
      <div>
        <h2 style={{
          margin: '0 auto',
          width: 'fit-content',
          marginTop: '50px',
        }}
        >
          Тут будут предложения
        </h2>
      </div>
    </Fragment>

  );
}

export default Offer;
