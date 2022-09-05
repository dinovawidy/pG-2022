import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';



const Widget = ({ type }) => {

  let data; 

  //temporary data
  const amount=2000;
  const diff= 20;

  const styleUser={color: "crimson", backgroundColor: "rgba(255,0,0,0.2)"};
  const styleOrder={color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)"};
  const styleEarning={color: "green", backgroundColor: "rgba(0,128,0,0.2)"};
  const styleBalance={color: "purple", backgroundColor: "rgba(128,0,128,0.2)"};

    switch (type) {
      case "user":
        data = {
          title: "USERS",
          isMoney: false,
          link: "See All Users",
          icon: <PersonOutlineOutlinedIcon className="icon" style={styleUser} />  ,
        };
        break;
        case "order":
        data= {
          title: "TRANSACTION",
          isMoney: false,
          link: "View All Transaction",
          icon: <ShoppingCartOutlinedIcon className="icon" style={styleOrder} />  ,
        };
        break;
        case "earning":
        data= {
          title: "EARNINGS",
          isMoney: false,
          link: "View Earnings",
          icon: <MonetizationOnOutlinedIcon className="icon" style={styleEarning} />  ,
        };
        break;
        case "balance":
        data = {
          title: "BALANCE",
          isMoney: false,
          link: "See Detail",
          icon: <AccountBalanceWalletOutlinedIcon className="icon" style={styleBalance} />  ,
        };
        break;
        default:
          break;
    }

    
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
              {data.isMoney && "$"} {amount} 
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="precentage positive">
                <KeyboardArrowUpIcon />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget