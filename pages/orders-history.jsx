import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Layout from '../components/Layout';

function ordersHistory() {
  return (
    <Layout title="Your Recent Orders">
      <div className="orders-page-title-container">
        <p>your previous orders</p>
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
                <TableCell align="right">5</TableCell>
                <TableCell align="right">
                  <button className="order-details-cta">Details</button>
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
                <TableCell align="right">5500/-</TableCell>
                <TableCell align="right">3</TableCell>
                <TableCell align="right">
                  <button className="order-details-cta">Details</button>
                </TableCell>
              </TableRow>
              <TableRow
                //   key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src="/converse.webp"
                    alt="orders-image"
                    className="orders-image"
                  />
                </TableCell>
                <TableCell align="right">3500/-</TableCell>
                <TableCell align="right">3</TableCell>
                <TableCell align="right">
                  <button className="order-details-cta">Details</button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}

export default ordersHistory;
