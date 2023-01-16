import { useEffect, useState } from "react";

const custStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "350px",
    fontWeight: "500",
    fontFamily: ['Quicksand', "cursive"],
}

export const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    }
    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    }


    useEffect(()=>{setTimeout(handleNext, 3000)})

    return (
        <div className="flex bg-white text-black font-bold pd-3 justify-evenly">
                
                <div className="mb-1" onClick={handlePrevious}>{`<`}</div>
                    {slides.map((slide, index) => (
                        <div key={index} style={{ display: index === currentIndex ? "flex" : "none" }}>
                            <div style={custStyle} className="mx-7">{slide.caption1}</div>
                            <div style={custStyle} className="mx-7">{slide.caption2}</div>
                            <div style={custStyle} className="mx-7">{slide.caption3}</div>
                        </div>
                    ))}
                    <div className="mb-1" onClick={handleNext}>{`>`}</div>
                
            
        </div>
    );
}
