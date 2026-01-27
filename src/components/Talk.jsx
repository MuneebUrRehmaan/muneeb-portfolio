import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {  Mail, Github, Linkedin, Instagram, Facebook, Scroll } from 'lucide-react';
import {contact, menuprofile } from '../constants';
import Button from './Button';
import SubHaeading from "./SubHaeading";
import Title from "./Title";
import ScrollAnimation from "./ScrollAnimation";

const Talk = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm(
            'service_y83tbkg',
            'template_r80rac8',
            form.current,
            'k-D3emlF-XR_IxUWo'
        )
            .then(() => {
                alert("Message sent successfully!");
                form.current.reset();
            })
            .catch((error) => {
                console.error(error);
                alert("Failed to send message!");
            });
    };

    return (
        <section id="contact" className="component-gap">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 mt-4">
                    <SubHaeading subTitle={'Connect with me'} />
                    <Title title='Lets start a project together' />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

                    {/* Left Side - Form */}
                    <div className="lg:col-span-2">
                        <ScrollAnimation direction="up" delay={0.2} >
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-base font-medium text-gray-900 block ">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    className="w-full h-14 px-6 rounded-xl  shadow-sm border border-[#e2e8f0] bg-white focus:border-black/50 focus:ring-1 focus:ring-black/5 transition-all duration-300 outline-none placeholder:text-gray-400 text-gray-900  hover:border-gray-300"
                                    required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-base font-medium text-gray-900 block ">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    className="border border-[#e2e8f0] w-full h-14 px-6 rounded-xl shadow-sm  bg-white focus:border-black/50 focus:ring-1 focus:ring-black/5 transition-all duration-300 outline-none placeholder:text-gray-400 text-gray-900  hover:border-gray-300"
                                    required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-base font-medium text-gray-900 block ">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    className="w-full h-48 p-6 rounded-xl border shadow-sm  border-[#e2e8f0] bg-white focus:border-black/50 focus:ring-1 focus:ring-black/5 transition-all duration-300 outline-none placeholder:text-gray-400 text-gray-900 resize-none  hover:border-gray-300"
                                    required />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                ><Button title={'Submit'} className={'bg-[#1b1b1b] text-gray-50'} /></button>

                            </div>
                        </form>
                        </ ScrollAnimation>
                    </div>

                    {/* Right Side */}

                    <div className="lg:col-span-1">
                        <ScrollAnimation direction="right" delay={0.3} >
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#f8f7f3] h-full flex flex-col">

                            {/* Availability */}
                            <div className="inline-flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-full mb-10 w-fit self-start border border-gray-200">
                                <span className="relative flex  items-center justify-center rounded-full ">
                                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#FF5F1F] opacity-80"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5F1F]"></span>
                                </span>
                                <span className="text-slate-900 text-sm font-semibold tracking-wide">Available for work</span>
                            </div>

                            {/* Avatar */}
                            
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-2 border-[#fbf9f4] shadow-sm ">
                                <img
                                    src={menuprofile}
                                    loading='lazy'
                                    alt="Portrait"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="mb-auto">
                                <p className="text-gray-700 leading-relaxed text-lg ">
                                    My inbox is always open. Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I'll get back to you.
                                </p>
                            </div>

                            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-100">
                                <a target="_blank" href="https://www.linkedin.com/in/muneeb-ur-rehman-3aa98a27a/" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Linkedin size={24} strokeWidth={1.5} /></a>
                                <a target="_blank" href="https://github.com/MuneebUrRehmaan" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Github size={24} strokeWidth={1.5} /></a>
                                <a target="_blank" href="https://www.instagram.com/muneeb_ur_rehman_50?igsh=dTZ0ZmdreTh1aWVo" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Instagram size={24} strokeWidth={1.5} /></a>
                                <a target="_blank" href="https://www.facebook.com/share/1BF3Nfzcxu/" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Facebook size={24} strokeWidth={1.5} /></a>
                                <a target="_blank" href={`mailto:${contact.email}`} className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Mail size={24} strokeWidth={1.5} /></a>
                            </div>
                
                        </div>
                        </ ScrollAnimation>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Talk