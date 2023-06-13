import Header from './Header/Header';


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
      }}
    >
      <Header />
    </div>
  );
};
