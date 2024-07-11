



import { motion } from 'framer-motion';

const AboutUs = () => {

    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-8">About Us</h2>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className='flex-1 '>
                        <div className="App">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img src="https://i.ibb.co/09WCvgD/wooden-ebony-blog-concept-creative-art-poster-107173-66738-1.jpg" className="rounded-lg shadow-2xl w-full md:h-[400px]" />
                              
                            </motion.div>
                        </div>

                        
                    </div>
                    <div className='flex-1'>

                        <div className="App">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 6 }}
                                transition={{ duration: 10 }}
                            >
                                <h1 className="text-3xl lg:text-5xl font-bold">Where quality meet Excellent Service</h1>
                                <p className="py-6">A blog website serves as a versatile digital platform where individuals and organizations can share their thoughts, experiences, and expertise with a global audience. It is a space for creative expression, offering a variety of content types such as articles, opinion pieces, tutorials, reviews, and multimedia posts. </p>

                            </motion.div>
                        </div>
                        <div className="App">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                              <button className="btn btn-primary">See more about</button>
                              
                            </motion.div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};




export default AboutUs;