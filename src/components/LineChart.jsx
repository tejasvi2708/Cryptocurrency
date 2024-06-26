import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2"; 

import { Col, Row, Typography } from 'antd';

const { Title } = Typography;
const LineChart = ({coinHistory,currentPrice,coinName}) => {
    const coinPrice=[];
    const coinTimeStamp=[];


    const fiveYearsAgoTimestamp = new Date().setFullYear(new Date().getFullYear() - 5);

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
      
    }

    // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    //     coinTimeStamp.push(
    //       new Date(
    //         coinHistory?.data?.history[i].timestamp * 1000
    //       ).toLocaleDateString()
    //     );
    //   }
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        const historyTimestamp = coinHistory?.data?.history[i].timestamp * 1000;
        if (historyTimestamp >= fiveYearsAgoTimestamp) {
          coinPrice.push(coinHistory?.data?.history[i].price);
          coinTimeStamp.push(new Date(historyTimestamp).toLocaleDateString());
        }
      }
    const data = {
        labels: coinTimeStamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip,
        Legend
      );
  return (
   <>
     <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
   </>
  )
}

export default LineChart