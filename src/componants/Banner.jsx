

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full my-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/wrNq7PF/empty-chair-beach-74190-1630.jpg" style={{ width: "100%", height: "100vh" }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <p className="text-2xl text-orange-600 font-bold lg:text-5xl lg:font-extrabold ">Travel Blog  </p>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/5LkcjR0/medium-shot-man-cooking-23-2148723237.jpg" style={{ width: "100%", height: "100vh" }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <p className="text-2xl font-bold lg:text-5xl text-white lg:font-extrabold "
                        > Food and Cook Blog
                        </p>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/VMFWBZf/world-book-day-background-design-best-quality-hyper-realistic-wallpaper-image-ai-generated-1078161-3.jpg" style={{ width: "100%", height: "100vh" }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <p className="text-2xl text-white font-bold lg:text-5xl lg:font-extrabold "> 
                        Book and Litareture Blog
                        </p>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ThCjBWL/women-photographer-hold-camera-114963-15380.jpg" style={{ width: "100%", height: "100vh" }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <p className="text-2xl font-bold lg:text-5xl text-green-200 lg:font-extrabold "
                        >
                            photography Blog
                        </p>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;