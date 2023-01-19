import { useEffect, useState } from "react";



export const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        let x=(currentIndex + 1) % slides.length
        setCurrentIndex(x);
    }
    const handlePrevious = () => {
        let x=(currentIndex - 1 + slides.length) % slides.length
        setCurrentIndex(x);
    }

   
    function custStyle(index) {
        return(
        {whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontWeight: "500",
        fontFamily: ['Quicksand', "cursive"],
        display: index === currentIndex ? "" : "none"})
    }

    useEffect(() => { setTimeout(handleNext, 9000) })

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 bg-purple-100 px-10">
                {slides.map((slide, index) => ( 
                    <>
                        <div style={custStyle(index)}>{slide.caption1}</div>
                        <div style={custStyle(index)}>{slide.caption2}</div>
                        <div style={custStyle(index)}>{slide.caption3}</div>
                    </>
                ))}
                </div>
        </div>

    );
}
