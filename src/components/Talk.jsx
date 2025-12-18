import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Sparkles, Mail, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { avater, contact } from '../constants';
import Button from './Button';
import SubHaeading from "./SubHaeading";

const Talk = () => {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_y83tbkg",
      "template_r80rac8",
      form.current,
      "k-D3emlF-XR_IxUWo"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch(() => {
      alert("Failed to send message!");
    });
  };

    return (
<section id="contact" className="component-gap">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12 mt-4"> 
                <SubHaeading subTitle={'Connect with me'} />
                <h2 className="font-display text-5xl  font-bold text-black tracking-tight leading-tight">
                    Let's start a project  together
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

                {/* Left Side - Form */}
                <div className="lg:col-span-2">
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-base font-medium text-gray-900 block ">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="w-full h-14 px-6 rounded border border-gray-200 bg-white focus:border-black/50 focus:ring-1 focus:ring-black/5 transition-all duration-300 outline-none placeholder:text-gray-400 text-gray-900  hover:border-gray-300"
                            required/>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-base font-medium text-gray-900 block ">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                className="w-full h-14 px-6 roundedborder border-gray-200 bg-white focus:border-black/50 focus:ring-1 focus:ring-black/5 transition-all duration-300 outline-none placeholder:text-gray-400 text-gray-900  hover:border-gray-300"
                            required/>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-base font-medium text-gray-900 block ">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                className="w-full h-48 p-6 rounded border border-gray-200 bg-white focus:border-black/50 focus:ring-1 focus:ring-black/5 transition-all duration-300 outline-none placeholder:text-gray-400 text-gray-900 resize-none  hover:border-gray-300"
                            required/>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                            ><Button title={'Submit'} className={'bg-[#1b1b1b] text-gray-50'}/></button>
                            
                        </div>
                    </form>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 h-full flex flex-col">

                        {/* Availability */}
                        <div className="inline-flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-full mb-10 w-fit self-start border border-gray-200">
                        <span className="relative flex  items-center justify-center rounded-full ">
                            <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-orange-400 opacity-80"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500/80"></span>
                        </span>
                            <span className="text-slate-900 text-sm font-semibold tracking-wide">Available for work</span>
                        </div>

                        {/* Avatar */}
                        <div className="w-28 h-28 rounded-full overflow-hidden mb-8 border-4 border-gray-50 shadow-inner">
                            <img
                                src={avater}
                                alt="Portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="mb-auto">
                            <p className="text-gray-600 leading-relaxed text-lg font-light">
                                My inbox is always open. Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I'll get back to you.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-100">
                            <a target="_blank" href="https://www.linkedin.com/in/muneeb-ur-rehman-3aa98a27a/" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Linkedin size={24} strokeWidth={1.5} /></a>
                            <a target="_blank" href="https://github.com/MuneebUrRehmaan" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Github size={24} strokeWidth={1.5} /></a>
                            <a target="_blank" href="/" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Instagram size={24} strokeWidth={1.5} /></a>
                            <a target="_blank" href="/" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Facebook size={24} strokeWidth={1.5} /></a>
                            <a target="_blank" href={`mailto:${contact.email}`} className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 transform"><Mail size={24} strokeWidth={1.5} /></a>
                        </div>

                    </div>
                </div>

            </div>

        </div>
        </section>
    )
}

export default Talk