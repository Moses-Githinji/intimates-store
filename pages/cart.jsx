import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Layout from '../components/Layout';

function cart() {
  return (
    <Layout title="Shopping Cart">
      <div className="orders-page-title-container">
        <p>my shopping cart</p>
      </div>
      <div className="table-for-orders-history-container">
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                //   key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src="/duvet1.jpg"
                    alt="orders-image"
                    className="orders-image"
                  />
                </TableCell>
                <TableCell align="right">3500/-</TableCell>
                <TableCell align="right" sx={{ cursor: 'pointer' }}>
                  5
                </TableCell>
                <TableCell align="right">
                  <button
                    className="order-details-cta"
                    style={{ backgroundColor: '#a70f0f', color: 'white' }}
                  >
                    X
                  </button>
                </TableCell>
              </TableRow>
              <TableRow
                //   key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src="/duvet3.jpg"
                    alt="orders-image"
                    className="orders-image"
                  />
                </TableCell>
                <TableCell align="right">1500/-</TableCell>
                <TableCell align="right" sx={{ cursor: 'pointer' }}>
                  2
                </TableCell>
                <TableCell align="right">
                  <button
                    className="order-details-cta"
                    style={{ backgroundColor: '#a70f0f', color: 'white' }}
                  >
                    X
                  </button>
                </TableCell>
              </TableRow>
              <TableRow
                //   key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src="/bag1.webp"
                    alt="orders-image"
                    className="orders-image"
                  />
                </TableCell>
                <TableCell align="right">500/-</TableCell>
                <TableCell align="right" sx={{ cursor: 'pointer' }}>
                  1
                </TableCell>
                <TableCell align="right">
                  <button
                    className="order-details-cta"
                    style={{ backgroundColor: '#a70f0f', color: 'white' }}
                  >
                    X
                  </button>
                </TableCell>
              </TableRow>
              <TableRow
                //   key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src="/islanders.jpeg"
                    alt="orders-image"
                    className="orders-image"
                  />
                </TableCell>
                <TableCell align="right">3500/-</TableCell>
                <TableCell
                  align="right"
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  2
                </TableCell>
                <TableCell align="right">
                  <button
                    className="order-details-cta"
                    style={{ backgroundColor: '#a70f0f', color: 'white' }}
                  >
                    X
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="checkout-previous-btns-container">
        <button className="previous-page-btn">back</button>
        <button className="previous-page-btn">checkout</button>
      </div>
    </Layout>
  );
}

export default cart;
