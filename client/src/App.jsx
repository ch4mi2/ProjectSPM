import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AppRoutes from './routes/app-routes';

function App() {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
