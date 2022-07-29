import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-12'>
            <div className='w-4/5 mx-auto lg:flex lg:justify-between sm:grid sm:grid-cols-1 items-center'>

                <div className='flex'>
                    <img className='mr-4 w-4/5' src="/images/logo/app-store.svg" alt="app store logo" />
                    <img className='w-4/5' src="/images/logo/google-play.svg" alt="google play logo" />
                </div>

                <div>
                    <p className='font-bold'>Contact Us</p>
                    <p>knowledgezone404@gmail.com</p>
                </div>

                <div className='text-xl my-4 sm:text-center'>
                    <p className='mb-2'>Follow Us On</p>
                    <a href="" target={'_blank'}><i className="fa-brands fa-facebook-square mr-4"></i> </a>
                    <a href="" target={'_blank'} rel='noreferrer'><i className="fa-brands fa-twitter-square mr-4"></i> </a>
                    <a href="" target={'_blank'} rel='noreferrer'><i className="fa-brands fa-instagram-square mr-4"></i> </a>
                    <a href="" target={'_blank'} rel='noreferrer'><i className="fa-brands fa-github-square mr-4"></i></a>
                    <a href="" target={'_blank'} rel='noreferrer'><i className="fa-brands fa-youtube-square"></i></a>
                </div>
            </div>

            <div className='mt-12'>
                <div className='flex gap-x-6 justify-center'>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="">Home</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="">Service</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="">Portfolio</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="">Blog</a>
                    <a className='border-b-2 border-transparent hover:border-b-2 hover:border-b-white rounded-bl duration-500' href="">Company</a>
                </div>
            </div>
            <hr className='w-4/5 mx-auto my-6' />
            <p className='text-center'> copyright@knowledge-zone 2022 all the right reserved | Designed by Byzu's</p>


        </div>
    );
};

export default Footer;