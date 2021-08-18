import React from 'react'
import { formatCNY } from './../../../../tools/currency';

interface SaleInfoProps {
  /**
   * 标签价格
   * 单位分
   */
  staticPrice: number;
  /**
   * 折扣价
   * 单位分
   */
  preferentialPrice?: number;
}

const SaleInfo = (props: SaleInfoProps) => {
  const realPrice = props.preferentialPrice ? props.preferentialPrice : props.staticPrice
  return (
    <div>
      <div>
        <span>{formatCNY(realPrice)}</span>
       {props.preferentialPrice && <span style={{textDecoration: 'line-through'}}>{formatCNY(props.staticPrice)}</span>}
      </div>
      
    </div>
  )
}

export default SaleInfo
