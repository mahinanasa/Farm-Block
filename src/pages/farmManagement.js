import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import { Box } from '@mui/material';
const FarmManagemnt = () => (
  <>
    <Head>
      <title>
        Farm Managemnt | AL Rawabi Farm (Al Ain)
      </title>
    </Head>
    <Box sx={{ p: 3 }}>
        Farm Management Page

          </Box>
    </>

    );

    FarmManagemnt.getLayout = (page) => (
        <DashboardLayout>
          {page}
        </DashboardLayout>
      );
      
      export default FarmManagemnt;