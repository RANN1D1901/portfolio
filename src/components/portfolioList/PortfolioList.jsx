import React from 'react';
import "./PortfolioList.scss"
export default function PortfolioList({title}) {
  return(
      <li className='active'>
        {title}
      </li>
      )

}
