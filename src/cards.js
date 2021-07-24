import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const card = () => (
  <div
    className="App"
    style={{ width: "600px", margin: "auto", padding: "50px" }}
  >
    <Carousel arrows infinite>
      <img src="https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/5cef330/2147483647/strip/true/crop/2048x924+0+85/resize/1440x650!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fcd%2Fd4%2Fdd1c6d734d4f8ff72c007c6c1fab%2Ftheboys-2048x1080-forpr.jpg" />
      <img src="https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/5cef330/2147483647/strip/true/crop/2048x924+0+85/resize/1440x650!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fcd%2Fd4%2Fdd1c6d734d4f8ff72c007c6c1fab%2Ftheboys-2048x1080-forpr.jpg" />
      <img src="https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/5cef330/2147483647/strip/true/crop/2048x924+0+85/resize/1440x650!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fcd%2Fd4%2Fdd1c6d734d4f8ff72c007c6c1fab%2Ftheboys-2048x1080-forpr.jpg" />
    </Carousel>
  </div>

);

export default card;