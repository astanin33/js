import React, { useState } from 'react';

const Spoiler = ({ header = "+", open = false, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    const toggleSpoiler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div onClick={toggleSpoiler}>
                {header}
            </div>
            {isOpen && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Spoiler;


const App = () => {
    return (
        <div>
            <Spoiler header={<h1>Заголовок</h1>} open>
                Контент 1
                <p>
                    лорем іпсум тралівалі і тп.
                </p>
            </Spoiler>

            <Spoiler>
                <h2>Контент 2</h2>
                <p>
                    лорем іпсум тралівалі і тп.
                </p>
            </Spoiler>
        </div>
    );
};

export default App;



import React, { useState } from 'react';

const RangeInput = ({ min, max, ...props }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        if (props.onChange) {
            props.onChange(event);
        }
    };

    const isInvalid = value.length < min || value.length > max;

    return (
        <input
            {...props}
            value={value}
            onChange={handleChange}
            style={{ borderColor: isInvalid ? 'red' : 'initial' }}
        />
    );
};

export default RangeInput;


const App = () => {
    const handleInputChange = (event) => {
        console.log('Current value:', event.target.value);
    };

    return (
        <div>
            <RangeInput
                type="text"
                min={5}
                max={10}
                className="range-input"
                placeholder="Enter text..."
                onChange={handleInputChange}
            />
        </div>
    );
};

export default App;




import React, { useState } from 'react';
import './Carousel.css';  


const Thumbnails = ({ images, current, onChange }) => {
    return (
        <div className="thumbnails">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`thumbnail-${index}`}
                    className={`thumbnail ${current === index ? 'active' : ''}`}
                    onClick={() => onChange(index)}
                />
            ))}
        </div>
    );
};


const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    const handleMainImageClick = (e) => {
        const clickX = e.clientX - e.target.getBoundingClientRect().left;
        const width = e.target.clientWidth;
        if (clickX < width / 3) {
            prevImage();
        } else {
            nextImage();
        }
    };

    return (
        <div className="carousel">
            <div className="main-image-container" onClick={handleMainImageClick}>
                <img src={images[currentIndex]} alt={`image-${currentIndex}`} className="main-image" />
            </div>
            <Thumbnails
                images={images}
                current={currentIndex}
                onChange={handleThumbnailClick}
            />
        </div>
    );
};

export default Carousel;

const App = () => {
    const imageUrls = [
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"
    ];

    return (
        <div>
            <Carousel images={imageUrls} />
        </div>
    );
};

export default App;

// Carousel.css
.carousel {
    text-align: center;
}

.main-image-container {
    position: relative;
    display: inline-block;
}

.main-image {
    max-width: 100%;
    cursor: pointer;
}

.thumbnails {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.thumbnail {
    width: 60px;
    height: 40px;
    margin: 0 5px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.3s;
}

.thumbnail.active {
    border-color: blue;
}





import React, { useState } from 'react';


const Pagination = ({ render, max }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const Render = render;

    const handlePageChange = (page) => {
        if (page > 0 && page <= max) {
            setCurrentPage(page);
        }
    };

    const renderButtons = () => {
        const buttons = [];
        if (max <= 5) {
            for (let i = 1; i <= max; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={currentPage === i ? 'active' : ''}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            buttons.push(
                <button
                    key="first"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                >
                    &laquo;
                </button>
            );
            buttons.push(
                <button
                    key="prev"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
            );

            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(max, currentPage + 2);

            for (let i = startPage; i <= endPage; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={currentPage === i ? 'active' : ''}
                    >
                        {i}
                    </button>
                );
            }

            buttons.push(
                <button
                    key="next"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === max}
                >
                    &gt;
                </button>
            );
            buttons.push(
                <button
                    key="last"
                    onClick={() => handlePageChange(max)}
                    disabled={currentPage === max}
                >
                    &raquo;
                </button>
            );
        }

        return buttons;
    };

    return (
        <div>
            <Render page={currentPage} />
            <div className="pagination-buttons">
                {renderButtons()}
            </div>
        </div>
    );
};

export default Pagination;


const Content = ({ page }) => (
    <div style={{ fontSize: '5em' }}>
        Сторінка №{page}
    </div>
);

const Color = ({ page }) => (
    <div style={{ color: `rgb(${page * 16},${page * 16},${page * 16})` }}>
        {page}
    </div>
);

const App = () => {
    return 

