import "./MainDiv06.css";

function MainDiv06() {
    return (
        <div className="main-about">
            <div className="about-card">
                <h1 id="about-heading">About Us</h1>
                <p className="about-description">
                    📚 Welcome to <span className="highlight">BookVerse</span> – your gateway to a universe of stories! <br />
                    We are here to spark your imagination and fuel your knowledge. From timeless classics to the latest bestsellers,
                    our collection is handpicked to delight every reader.
                </p>

                <div className="rating-section">
                    <h3>⭐ Love our store? Give us a rating!</h3>
                    <div className="stars">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                    <p className="feedback-note">Click on stars to rate your experience!</p>
                </div>
            </div>
        </div>
    );
}

export default MainDiv06;
