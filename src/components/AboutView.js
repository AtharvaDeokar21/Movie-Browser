import Hero from "./Hero";
import myImage from "D:\\Atharva\\Web Dev\\React\\moviebrowser\\src\\components\\atharva.jpg"

const AboutView = () => {
    return (
        <>
            <Hero text="About Movie Browser" />
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="about-content">
                            <p className="lead">
                                Movie Browser is your go-to destination for discovering and exploring the world of movies. Whether you're looking for the latest blockbusters, timeless classics, or hidden gems, we've got you covered.
                            </p>
                            <p className="lead">
                                Created with passion by Atharva Deokar, Movie Browser aims to provide users with a seamless and enjoyable movie browsing experience. Thank you for choosing Movie Browser. Sit back, relax, and let the magic of cinema unfold before your eyes.
                            </p>
                            <div className="row mt-5">
                                <div className="col-md-6 offset-md-3 text-center">
                                    <img src={myImage} alt="Your Name" className="rounded-circle mb-3 web-developer" style={{ maxWidth: "200px" }} />
                                    <h4>Atharva Deokar</h4>
                                    <p className="text-muted">Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutView;




