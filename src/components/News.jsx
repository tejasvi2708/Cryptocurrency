import React, { useEffect, useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { _useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({query,count}) => {
  const [cryptoNews, setNews]=useState([]);
   count=count?5:10;
  useEffect(()=>{
    async function getNews(){
      const res = await _useGetCryptoNewsQuery("cryptocurrency", count);
      //  console.log(">>>", res);
      setNews(res.data);
    }
    getNews();
  }, []);


  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.map((news,i)=>(
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={5}>{news.title}</Title>
                  <img src={news?.thumbnail || demoImage} alt="" width="100"height="100"/>
                </div>
                <p>{news.excerpt.length > 200 ? `${news.excerpt.substring(0, 200)}...` : news.excerpt}</p>
                <div className="provider-container">
                <div>
                  <Avatar src={news.publisher?.favicon || demoImage} alt="" />
                  <Text className="provider-name">{news.publisher?.name}</Text>
                </div>
                <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
              </div>
              </a>
            </Card>
          </Col>
      ))}
      </Row>
  )
}

export default News