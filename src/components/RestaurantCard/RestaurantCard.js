import React, { Component } from 'react'
import style from './RestaurantCard.module.css'
import { Card } from 'antd'


export class RestaurantCard extends Component {
  render() {
    return (
      <>
        <Card className={style.CardCustom}>
          <p>test</p>
        </Card>
      </>
    )
  }
}

export default RestaurantCard
