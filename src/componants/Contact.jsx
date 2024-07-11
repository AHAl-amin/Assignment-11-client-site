import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Contact = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center">Our Team</h2>

            <div className="max-w-6xl mx-auto my-10">
                <div className="hero min-h-screen max-w-6xl mx-auto my-10" style={{ backgroundImage: 'url(https://i.ibb.co/09WCvgD/wooden-ebony-blog-concept-creative-art-poster-107173-66738-1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content  text-neutral-content">
                        <div className="p-3 lg:p-10">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-center">About our Team</h1>
                            <p className="mb-5 text-green-400 text-[16px] md:text-2xl text-center">
                                A blog website serves as a versatile digital platform where individuals and organizations can share their thoughts, experiences, and expertise with a global audience. It is a space for creative expression, offering a variety of content types such as articles, opinion pieces, tutorials, reviews, and multimedia  </p>
                            <div className="flex flex-col md:flex-row justify-center gap-10">
                                <div>
                                    <img className="w-[200px] rounded-full flex mx-auto h-[200px]" src="https://i.ibb.co/PQFXxM2/medium-shot-guy-with-crossed-arms-23-2148227939.jpg " alt="" />

                                    <p className="font-bold text-2xl mt-2 text-center ">Harun or Roshid</p>
                                    <p className="font-bold text-xl mt-2 text-center "> Full Stack Developer</p>
                                    <div className="flex gap-4 text-3xl mt-5 justify-center">

                                        <FaLinkedin />
                                        <BsFacebook />
                                        <FaTwitter />
                                    </div>
                                </div>
                                <div>
                                    <img className="w-[200px] rounded-full mx-auto" src="https://i.ibb.co/ZK1jms5/smiling-young-man-with-crossed-arms-outdoors-1140-255.jpg" alt="" />

                                    <p className="font-bold text-2xl mt-2 text-center">Alamin hossain</p>
                                    <p className="font-bold text-xl mt-2 text-center "> Full Stack Developer</p>
                                    <div className="flex gap-4 text-3xl mt-5 justify-center ">

                                        <FaLinkedin />
                                        <BsFacebook />
                                        <FaTwitter />
                                    </div>
                                </div>
                                <div>
                                    <img className="w-[200px]  rounded-full mx-auto" src="https://i.ibb.co/qxzKbdt/man-with-beard-shirt-that-says-he-is-real-man-905510-42712.jpg" alt="" />

                                    <p className="font-bold text-2xl mt-2 text-center "> Aminul Islam</p>
                                    <p className="font-bold text-xl mt-2 text-center "> Full Stack Developer</p>
                                    <div className="flex gap-4 text-3xl mt-5 justify-center ">

                                        <FaLinkedin />
                                        <BsFacebook />
                                        <FaTwitter />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />


            </div>
        </div>
    );
};

export default Contact;