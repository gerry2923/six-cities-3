function Spinner(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        height: '100vh',
        width: '100%',
        margin: '10% 0 0 0',
        padding: '0',
        overflowX: 'hidden',
      }}
    >
      <h1>
        Loading...
      </h1>
    </div>
  );
}

export default Spinner;
