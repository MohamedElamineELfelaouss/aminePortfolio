"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";


const services = [
  {
    num: '01',
    title: 'Web Development',
    Description: 'We build web applications that are scalable, secure, and lightning fast.',
    href:''
  },
  {
    num: '02',
    title: 'Mobile Development',
    Description: 'We develop mobile applications that are user-friendly and highly performant.',
    href:''
  },
  {
    num: '03',
    title: 'UI/UX Design',
    Description: 'We design user interfaces that are intuitive, engaging, and visually appealing.',
    href:''
  },
  {
    num: '04',
    title: 'SEO & Marketing',
    Description: 'We optimize websites for search engines and run marketing campaigns that drive results.',
    href:''
  },
  {
    num: '05',
    title: 'E-Commerce',
    Description: 'We create online stores that are easy to manage, secure, and provide a seamless shopping experience.',
    href:''
  },
  {
    num: '06',
    title: 'Cloud Services',
    Description: 'We provide cloud solutions that are reliable, scalable, and cost-effective.',
    href:''
  },
  {
    num: '07',
    title: 'Consulting',
    Description: 'We offer consulting services that help businesses make informed decisions and achieve their goals.',
    href:''
  },
  {
    num: '08',
    title: 'Training',
    Description: 'We provide training programs that help individuals and teams acquire new skills and stay ahead of the curve.',
    href:''
  },
  {
    num: '09',
    title: 'Support',
    Description: 'We offer support services that ensure your applications are running smoothly and your customers are happy.',
    href: ''
  },
  {
    num: '10',
    title: 'Maintenance',
    Description: 'We provide maintenance services that keep your applications up-to-date and secure.',
    href: ''
  }
];

const Services = () => {
  return ( 
  <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn'
        },
       }}  
       className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      
      >
        {services.map((service, index)=> {
          return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 " >{service.title}</h2>
              {/* description */}
              <p className="text-white/60">{service.Description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
      </motion.div>
    </div>
  </section>
  );
};

export default Services;