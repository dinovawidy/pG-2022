import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
          <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={50} text={"50%"} strokeWidth={2} />
        </div>
        <p className="title">Total Sales</p>
        <p className="amount">Rp. 10.000.000</p>
        <p className="desc">Total jumlah transaksi. Belum termasuk Bulan ini.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              Target
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">Rp. 200.000.000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Minggu Ini
            </div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">Rp. 200.000.000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Bulan Ini
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">Rp. 200.000.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured