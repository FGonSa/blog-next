import React from "react";

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-200 pb-4">About Me</h1>
                    <p className="font-normal text-base leading-6 text-gray-300 ">Hi! My name is Frank.</p>
                    <p className="font-normal text-base leading-6 text-gray-300 ">I am a passionate Web/App Full-Stack developer who enjoys creating websites and mobile applications with personality and style. My workflow focuses on achieving an attractive and satisfying user experience, which is why I enjoy both design (UX/UI) and programming (Front-End/Back-End).</p><br />
                    <p className="font-normal text-base leading-6 text-gray-300 ">My experience in NextJS (React), Vue, Laravel, and Java, as well as SQL and MongoDB databases, enables me to carry out projects from the conception of the idea to its launch.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full rounded-md" src="/aboutpic.jpg" alt="A group of People" />
                    <p className="text-gray-300 text-center text-sm">Me visiting the Konami offices in Ariake, Tokyo.</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">

                    <p className="font-normal text-base leading-6 text-gray-300 ">In addition to designing, programming and maintaining various types of websites and mobile applications, I have also traveled to various congresses around the world to ensure the proper functioning of their applications and see live how the public interacts with the final product.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden rounded-md"  src="/pic1.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="/pic1.png" alt="Alexa featured Img" />
                            
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden rounded-md" src="/pic2.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="/pic2.png" alt="Olivia featured Img" />
                          
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden rounded-md" src="/pic3.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="/pic3.png" alt="Liam featued Img" />
         
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden rounded-md" src="/pic5.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="/pic5.png" alt="Elijah featured img" />
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
