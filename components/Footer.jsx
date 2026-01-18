import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-white text-xl font-bold font-headings mb-4">
                            The Pain Reset 90™
                        </h3>
                        <p className="text-sm leading-relaxed max-w-xs mb-6">
                            A comprehensive system for busy professionals to eliminate chronic pain without surgery, pills, or endless rehab.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Program</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-amber-400 transition-colors">How It Works</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Success Stories</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Apply Now</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Disclaimer</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; {currentYear} The Pain Reset 90™. All rights reserved.</p>
                    <p>Designed for Excellence.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    );
}
