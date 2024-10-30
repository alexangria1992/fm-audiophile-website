import Nav from '@/components/Nav';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(./assets/home/desktop/image-hero.jpg)',
        height: '100vh',
        backgroundSize: '100%',
      }}
    >
      <Container>
        <Nav />
        <hr />
      </Container>
    </div>
  );
};

export default Home;
