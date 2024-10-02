import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    // AliceCarousel Ref for triggering slidePrev/slideNext programmatically
    let carouselRef = React.useRef(null);

    const slidePrev = () => carouselRef.current.slidePrev(); // Triggering AliceCarousel's prev slide
    const slideNext = () => carouselRef.current.slideNext(); // Triggering AliceCarousel's next slide

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    // Map data items into carousel items
    const items = data.slice(0, 10).map((item) => <HomeSectionCard key={item.id} product={item} />);

    return (
        <div className="space-y-4 py-10">
            {/* Section Name (now aligned to top left) */}
            <h2 className="text-2xl font-extrabold text-gray-800 text-left px-2">{sectionName}</h2>

            {/* Carousel Container */}
            <div className="relative">
                <AliceCarousel
                    ref={carouselRef}  // Use the ref to control the carousel
                    mouseTracking
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                
                {activeIndex !== items.length - 5 && (
                    <Button 
                        variant="contained" 
                        className="z-50 bg-white" 
                        onClick={slideNext}  // Trigger next slide
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(-50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon
                            sx={{
                                transform: 'rotate(90deg)',
                                color: 'black',
                            }}
                        />
                    </Button>
                )}

                <Button 
                    variant="contained" 
                    className="z-50" 
                    onClick={slidePrev}  // Trigger prev slide
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        left: '0rem',
                        transform: 'translateX(50%) rotate(-90deg)',
                        bgcolor: 'white',
                    }}
                    aria-label="prev"
                >
                    <KeyboardArrowLeftIcon
                        sx={{
                            transform: 'rotate(90deg)',
                            color: 'black',
                        }}
                    />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
