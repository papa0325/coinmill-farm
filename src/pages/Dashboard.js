import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';

const Dashboard = () => (
  <>
    <Helmet>
      <title>CoinFarms | Home</title>
    </Helmet>
    <Box
      sx={{
        minHeight: '100%',
        padding:'40px',
        color: 'white'
      }}
    >
      <h1>CoinMill, the next gen of Defi</h1>
    </Box>
  </>
);

export default Dashboard;
