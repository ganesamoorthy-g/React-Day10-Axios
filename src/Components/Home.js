import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
    <section className="slider container mb-3">
            <Carousel>
              <Carousel.Item className="slide" interval={5000}>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/id/1297112490/photo/email-marketing-and-newsletter-concept-direct-email-sending-for-company.jpg?s=612x612&w=0&k=20&c=8-2N89tSOyUUpRmpOKwB73TGBx86A3_eURCxFbhOCKs="
                  alt="GUVI Learning Platform"
                  style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                />
              </Carousel.Item>
              <Carousel.Item className="slide" interval={1500}>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/id/1173361443/photo/newsletter-concept-or-email-marketing-sending-e-mails.jpg?s=612x612&w=0&k=20&c=Xibc57dqu9evf2m5pgDCRTAs8gSanygX4jWM4-I35Z0="
                  alt="Learning Place for Beginner in Native Language"
                  style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                />
              </Carousel.Item>
            </Carousel>
          </section>
        </>
  )
}

export default Home