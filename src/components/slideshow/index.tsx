'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Slideshow({ images }: { images: string[] }) {

  const [currentSlide, setCurrentSlide] = useState(1)

  const showSlides = (n: number) => {
    let i
    const slides = document.querySelectorAll('.slide')
    if (slides.length === 0) return;
    if (n > slides.length) n = 1
    if (n < 1) n = slides.length
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display: none')
    }
    slides[n - 1].setAttribute('style', 'display: block')
  }

  useEffect(() => {
    showSlides(currentSlide)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= images.length ? 1 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 1 ? images.length : prev - 1))
  }

  if (images.length === 1) {
    return (
      <div className='flex justify-center'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='relative h-[400px] w-[400px]'>
            <Image
              src={images[0]}
              alt='Slide 1'
              style={{ objectFit: 'contain' }}
              fill
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='relative h-[400px] w-[400px]'>
          {images.map((image, index) => (
            <div
              className='slide absolute left-0 top-0 h-full w-full'
              key={index}
              style={{ display: index === 0 ? 'block' : 'none' }}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ objectFit: 'contain' }}
                fill
              />
            </div>
          ))}
        </div>
        <div>
          <a className='cursor-pointer' onClick={prevSlide}>
            &#10094;
          </a>
          <a className='cursor-pointer' onClick={nextSlide}>
            &#10095;
          </a>
        </div>
      </div>
    </div>
  )
}
