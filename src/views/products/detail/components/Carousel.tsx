import React from 'react'
import Slider from "react-slick";

interface CarouseSlide {
  type: 'video' | 'image',
  url: string
}

interface CarouselProps {
  onPreview?: (images: string[], currentIndex: number) => void
  dataSource: CarouseSlide[]
}
const Carousel = (props: CarouselProps) => {
  const images = props.dataSource.reduce((collection, current) => {
    if (current.type === 'image') {
      collection.push(current.url)
    }
    return collection;
  }, [] as string[])
  return (
    <Slider lazyLoad="progressive" autoplay>
      {props.dataSource.map((data, index) => {
        const onClick = data.type === 'image' ? () => {
          props.onPreview?.(images, index)
        } : undefined
        return <div key={index} data-testid={'slider' + index} onClick={onClick}>
          { data.type === 'image' ?<img src={data.url} alt="product_img" /> : <video src={data.url}/>}
        </div>
      })}
    </Slider>
  )
}

export default Carousel
