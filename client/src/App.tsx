import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import Header from './pages/Header/views/Header';
import Footer from './pages/Footer/views/Footer';
import Container from '@mui/material/Container';
import { store } from './common/store/RootStore';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Container maxWidth="lg">
        <Provider store={store}>
          <Router />
        </Provider>
      </Container>
      <Footer prop1={'플레이 팩'} />
    </QueryClientProvider>
  );
}

export default App;
