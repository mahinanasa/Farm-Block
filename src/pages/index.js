import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Grid,Pagination } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { products } from '../__mocks__/products';
import { ProductCard } from '../components/dashboard/productList';
import ProgressLoader from '../components/common/progressLoader';
const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [productsArr, setProductsArr] = useState([]);
  
  useEffect(()=>{
    paginate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const paginate = (pageVal = 1) => {
    setProductsArr(products.slice((pageVal - 1) * limit, pageVal * limit))
  };
  const handleChange = (value) => {
    setPage(value)
    paginate(value)
  };
return (
  <>
    <Head>
      <title>
        Dashboard | AL Rawabi Farm (Al Ain)
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
   
      {
        productsArr.length > 0 
        ? <>
               <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
             
            {productsArr.map((product,i) => (
              <Grid
                item
                key={product.id}
                lg={3}
                md={6}
                xs={12}
              >
                <ProductCard product={product} 
                index={i} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            size="small"
            count={Math.ceil(products.length / limit)} 
            page={page} 
            onChange={(event, value)=>handleChange(value)} 
          />
        </Box>
        </>
        : 
        <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
          
        }}
      >
          <ProgressLoader />
                </Box>
      }
   
      </Container>
    </Box>
  </>
)
        }

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
