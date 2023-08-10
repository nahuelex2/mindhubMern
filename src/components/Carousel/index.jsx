import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import Slide from './slide';

export default function Carousel() {
    const images = [
        { image: 'src/assets/Brighton.jpg', name: 'Brighton' },
        { image: 'src/assets/Cambridge.jpg', name: 'Cambridge' },
        { image: 'src/assets/Chicago.jpg', name: 'Chicago' },
        { image: 'src/assets/Havana.jpg', name: 'Havana' },
        { image: 'src/assets/Houston.jpg', name: 'Houston' },
        { image: 'src/assets/London.jpg', name: 'London' },
        { image: 'src/assets/Los-Angeles.jpg', name: 'Los Angeles' },
        { image: 'src/assets/Montreal.jpg', name: 'Montreal' },
        { image: 'src/assets/New-York.jpg', name: 'New York' },
        { image: 'src/assets/Northwitch.jpg', name: 'Northwitch' },
        { image: 'src/assets/Philadelphia.jpg', name: 'Philadelphia' },
        { image: 'src/assets/Toronto.jpg', name: 'Toronto' },
    ]

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0])

    const selectNewImage = (index, images, next = true) => {


        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0)
            : condition ? selectedIndex - 1 : images.length - 1

        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }


    const previous = () => {
        // const condition = selectedIndex > 0;
        // const nextIndex = condition ? setSelectedIndex - 1 : images.length - 1;
        // setSelectedImage(images[nextIndex]);

        selectNewImage(selectedIndex, images, false)
    }

    const next = () => {
        // selectNewImage(selectedIndex,images,false)
        // const condition = selectedIndex < images.length - 1;
        // const nextIndex = condition ? selectedIndex + 1 : 0;
        // setSelectedImage(selectedIndex, images[nextIndex]);
        selectNewImage(selectedIndex, images, true)
    }

    function agruparEnGrupos(arrayOriginal, tamanoGrupo) {
        const grupos = [];

        for (let i = 0; i < arrayOriginal.length; i += tamanoGrupo) {
            grupos.push(arrayOriginal.slice(i, i + tamanoGrupo));
        }

        return grupos;
    }
    const imagesgrouped = agruparEnGrupos(images, 4)
    const [selectedIndex2, setSelectedIndex2] = useState(0);
    const [selectedgroupeImage, setSelectedgroupeImage] = useState(imagesgrouped[0])

    const prev = () => {
        // const condition = selectedIndex > 0;
        // const nextIndex = condition ? setSelectedIndex - 1 : images.length - 1;
        // setSelectedImage(images[nextIndex]);
        const condition = selectedIndex2 > 0
        const nextIndex = condition ? selectedIndex2 - 1 : imagesgrouped.length - 1
        setSelectedgroupeImage(imagesgrouped[nextIndex])
        setSelectedIndex2(nextIndex)
    }
    const transition = () => {
        const test = document.getElementsByClassName('test')
        console.log(test);
        test.style.opacity = '0'
    }
    const next2 = () => {
        const condition = selectedIndex2 < imagesgrouped.length - 1
        const nextIndex = condition ? selectedIndex2 + 1 : 0
        setSelectedgroupeImage(imagesgrouped[nextIndex])
        setSelectedIndex2(nextIndex)
        // selectNewImage(selectedIndex,images,false)
        // const condition = selectedIndex < images.length - 1;
        // const nextIndex = condition ? selectedIndex + 1 : 0;
        // setSelectedImage(selectedIndex, images[nextIndex]);

    }

    let slideRef = useRef();


    return (
        <>
            {/* <div>


                <img src={selectedImage.image} alt={selectedImage.name} className='CarouselImg' />
                <div>
                    <button onClick={previous}>prev</button>
                    <button onClick={next}>next</button>
                </div>
            </div> */}

            <div className='carousel-container'>


                <button className='carrousel__button  carrousel__button--prev' onClick={prev}>Prev</button>

                <div className="slide roll-outro" ref={slideRef}>
                    {selectedgroupeImage.map((image, key) =>
                        <Slide key={key} image={image} />

                    )}

                </div>

                <button className='carrousel__button  carrousel__button--next' onClick={next2}>Next</button>
            </div>
        </>
    )

}