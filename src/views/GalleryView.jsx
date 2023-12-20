import Header from '../components/Header'
import './GalleryView.css'
import React, { useEffect } from 'react';

function GalleryView() {
    useEffect(() => {
        // Code to run after the component has mounted
        var images = document.querySelector(".images");
        var isDown = false;
        var isTouch = false;
        var prevX = 0;
        var prevY = 0;
        var currentX = images.offsetWidth / -2;
        var currentY = images.offsetHeight / -2;
        var currentXtmp = 0;
        var currentYtmp = 0;

        var ondown = (e) => {
            prevX = e.clientX;
            prevY = e.clientY;
            isDown = true;
        };

        var onmove = (e) => {
            if (!isDown) return;

            var deltaX = Math.min(Math.max(e.clientX - prevX + currentX, -images.offsetWidth), 0);
            var deltaY = Math.min(Math.max(e.clientY - prevY + currentY, -images.offsetWidth), 0);

            currentXtmp = deltaX;
            currentYtmp = deltaY;

            images.animate({
                transform: `translate(${deltaX}px, ${deltaY}px)`,
            }, { duration: isTouch ? 0 : 400, fill: "forwards" });
        };

        var onup = (e) => {
            currentX = currentXtmp;
            currentY = currentYtmp;
            isDown = false;
        };

        images.onmousedown = ondown;
        images.onmousemove = onmove;
        images.onmouseup = onup;

        return () => {
            // Cleanup code (optional)
            images.onmousedown = null;
            images.onmousemove = null;
            images.onmouseup = null;
        };
    }, []);

    return (
        <div className='App gallery-page'>
            <Header />
            <section>
                <div className="gallery-container">
                    <div className="wrapper">
                        <div className="images">
                            <div className="center">
                                <h1>3X3</h1>
                                <h2>Gallery</h2>
                            </div>
                            <div className="column">
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2013/03/21/15/52/basketball-95607_1280.jpg" alt="" />
                                </div>
                            </div>
                            <div className="column">
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2013/02/25/04/37/basketball-85919_1280.jpg" alt="" />
                                </div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2017/08/07/12/30/dark-2603344_1280.jpg" alt="" />
                                </div>
                            </div>
                            <div className="column">
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2016/06/23/02/06/basketball-1474505_1280.jpg" alt="" />
                                </div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2018/03/12/14/09/woman-3219728_1280.jpg" alt="" />
                                </div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2017/07/24/19/14/basketball-2535744_1280.jpg" alt="" />
                                </div>
                            </div>
                            <div className="column">
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2019/04/26/19/44/basketball-court-4158462_1280.jpg" alt="" />
                                </div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2022/04/15/22/30/man-7135324_1280.jpg" alt="" />
                                </div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2019/12/18/23/42/basket-4705079_1280.jpg" alt="" />
                                </div>
                            </div>
                            <div className="column">
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2017/08/06/06/04/hotel-2589328_1280.jpg" alt="" />
                                </div>
                                <div className="space"></div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2022/08/01/21/34/people-7359033_1280.jpg" alt="" />
                                </div>
                            </div>




                            <div className="column">
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2016/11/29/12/17/action-1869428_1280.jpg" alt="" />
                                </div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2018/03/12/14/09/woman-3219728_1280.jpg" alt="" />
                                </div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2020/07/08/08/04/sunset-5383040_1280.jpg" alt="" />
                                </div>
                            </div>
                            <div className="column">
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2022/06/13/19/43/man-7260571_1280.jpg" alt="" />
                                </div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2017/08/07/22/24/hobbies-2608561_1280.jpg" alt="" />
                                </div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2017/08/05/14/47/people-2584167_1280.jpg" alt="" />
                                </div>
                            </div>
                            <div className="column">
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2015/09/05/21/39/basketball-925511_1280.jpg" alt="" />
                                </div>
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2018/05/01/16/16/ball-3366005_1280.jpg" alt="" />
                                </div>
                            </div>
                            <div className="column">
                                <div className="image">
                                    <img src="https://cdn.pixabay.com/photo/2017/06/18/17/10/basketball-2416463_1280.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GalleryView;