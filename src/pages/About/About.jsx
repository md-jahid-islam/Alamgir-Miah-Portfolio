/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "react development",
    description: "High-quality react development of sites at the professional level."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>
     
    <section className="about-text">
     <p>
     i'm Alomgir Miah React Developer, my experience in front-end development, with a strong focus on creating modern and responsive React applications. me expertise includes building dynamic and interactive web applications, crafting custom React components, and integrating APIs. i'm also skilled in managing state, designing responsive layouts, adding custom animations, and optimizing performance.
     
     i'm prioritize delivering solutions tailored to user needs, with a commitment to high-quality standards, on-time delivery, and providing ongoing support. me approach to front-end development is centered around enhancing user experience while ensuring project efficiency and success.
     </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

   


    {/* <!--
      - clients
    --> */}

   

  </article>
  )
}

export default About