import LocationIcon from '@/components/assets/icons/Location'
import MailIcon from '@/components/assets/icons/MailIcon'
import PhoneIcon from '@/components/assets/icons/PhoneIcon'
import React from 'react'
import ThirdPage from '../Footer/FooterData/ThirdPage'

const Footers = () => {
    return (
        <footer className="bg-[#2C272E]">
            <div className="container px-5 pb-20 pt-[55px] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex flex-col justify-start items-start gap-[11px]  md:mt-0 mt-10">
                    <span className=" text-[18px] font-semibold text-[#67E776]">Connect with us</span>
                    <ThirdPage />
                </div>
                <div className=" flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="text-[#67E776] text-[24px] font-semibold mb-3">ED REVIEWS</h2>
                        <div className='text-[#FFF]'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu.
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="text-[#67E776] text-[24px] font-semibold mb-3">Company</h2>
                        <nav className="list-none text-[#FFF] mb-10">
                            <li>
                                About
                            </li>
                            <li>
                                Products
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Referal Program
                            </li>
                            <li>
                                Career
                            </li>
                            <li>
                                Press & media
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="text-[#67E776] text-[24px] font-semibold mb-3">Support</h2>
                        <nav className="list-none text-[#FFF] mb-10">
                            <li>
                                Support Portal
                            </li>
                            <li>
                                List of chargesk
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Referal Program
                            </li>
                            <li>
                                Download Resources
                            </li>
                            <li>
                                Videos
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="text-[#67E776] text-[24px] font-semibold mb-3">Contact Us</h2>
                        <nav className="list-none text-[#FFF] mb-10">
                            <li className='flex'>
                                <PhoneIcon /><span className='ml-2'>+91 33555 6778</span>
                            </li>
                            <li className='flex'>
                                <MailIcon /><span className='ml-2'> JohnDoe@gmail.com</span>
                            </li>
                            <li className='flex'>
                                <LocationIcon /> <span className='ml-2'>Street 34 Sector 12 B Mumbai India</span>
                            </li>
                            <li className='flex'>
                                <span className='ml-2'>Fourth Link</span>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex h-[26px]  items-center justify-center">
                <p className='text-[#FFF] tex-[16px] '>Design & Developed by <span className='text-[#54B435]'>ZySoftec</span></p>
            </div>
        </footer>
    )
}

export default Footers