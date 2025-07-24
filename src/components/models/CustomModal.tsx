import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    // Handle opening and closing states
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setIsClosing(false);
        } else if (shouldRender) {
            setIsClosing(true);
            // Wait for animation to complete before unmounting
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsClosing(false);
            }, 300); // Animation duration
            return () => clearTimeout(timer);
        }
    }, [isOpen, shouldRender]);

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "15px";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        }
        return () => {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        };
    }, [isOpen]);

    // ESC key handler
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                handleClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscKey);
        }
        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [isOpen]);

    // Handle close with animation
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Wait for animation to complete
    };

    // Don't render if modal should not be shown
    if (!shouldRender) return null;

    // Backdrop click handler
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 transition-all duration-300 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
                }`}
            onClick={handleBackdropClick}
        >
            {/* Modal Body */}
            <div
                className={`relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'
                    }`}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition transform hover:scale-110 duration-200"
                >
                    <X size={20} className="text-gray-600" />
                </button>

                <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                    {/* Modal Content */}
                    <div className="p-6">
                        {/* Modal Header */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                1st Indian full service QSR brand with ₹1000+ Crore annual revenues
                            </h2>
                            <div className="w-12 h-1 bg-orange-500 rounded"></div>
                        </div>

                        {/* Modal Content */}
                        <div className="space-y-6">
                            {/* Restaurant Image */}
                            <div className="w-full h-64 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                <div className="text-white text-5xl md:text-6xl font-bold relative z-10">TOSSIN</div>
                                <div className="absolute bottom-4 left-4 text-white text-sm font-medium">Pizza • Fast Food • QSR</div>
                            </div>

                            {/* Overview Section */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <h3 className="text-xl font-semibold text-gray-800">Overview</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Tossin Pizza was started with a vision to create India's largest pizza chain with
                                    affordable pricing and superior taste. The brand has successfully established itself
                                    as a household name across multiple cities in India. With over 200+ outlets nationwide,
                                    Tossin continues to expand its footprint while maintaining quality and taste standards.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
                                    <div className="text-gray-700 font-medium">Outlets</div>
                                </div>
                                <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                                    <div className="text-gray-700 font-medium">Cities</div>
                                </div>
                                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-3xl font-bold text-yellow-600 mb-2">₹1000+</div>
                                    <div className="text-gray-700 font-medium">Crore Revenue</div>
                                </div>
                            </div>

                            {/* Team Photo Placeholder */}
                            <div className="w-full h-56 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">👥</div>
                                    <span className="text-gray-500 text-lg font-medium">Team Photo</span>
                                </div>
                            </div>

                            {/* BBQ & Tracking Section */}
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <h3 className="text-xl font-semibold text-gray-800">BBQ & Tracking</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Our signature BBQ flavors and advanced order tracking system ensures every customer
                                        gets the perfect pizza experience. From wood-fired ovens to real-time delivery tracking,
                                        we've revolutionized the pizza industry in India.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">Wood-fired Ovens</span>
                                        <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium">Real-time Tracking</span>
                                        <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">30-min Delivery</span>
                                    </div>
                                </div>

                                {/* Challenge Section */}
                                <div className="bg-blue-50 p-6 rounded-xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <h3 className="text-xl font-semibold text-gray-800">Tracking adapting to every "challenge"</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        In the competitive QSR market, we've successfully adapted to changing consumer preferences,
                                        digital transformation, supply chain challenges, and market expansion. Our innovative approach
                                        has helped us stay ahead of the curve and maintain our leadership position.
                                    </p>
                                </div>

                                {/* Journey Through Headlines */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <h3 className="text-xl font-semibold text-gray-800">Our journey through the headlines</h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {/* Headline Cards */}
                                        <div className="bg-white border-2 border-orange-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                                            <div className="w-full h-20 bg-orange-300 rounded mb-3 flex items-center justify-center">
                                                <span className="text-white font-bold">NEWS</span>
                                            </div>
                                            <p className="text-sm text-gray-600 font-medium">Tossin Pizza achieves ₹1000+ Crore milestone</p>
                                        </div>

                                        <div className="bg-white border-2 border-red-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                                            <div className="w-full h-20 bg-red-300 rounded mb-3 flex items-center justify-center">
                                                <span className="text-white font-bold">AWARD</span>
                                            </div>
                                            <p className="text-sm text-gray-600 font-medium">Best QSR Chain of the Year 2023</p>
                                        </div>

                                        <div className="bg-white border-2 border-yellow-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                                            <div className="w-full h-20 bg-yellow-300 rounded mb-3 flex items-center justify-center">
                                                <span className="text-white font-bold">GROWTH</span>
                                            </div>
                                            <p className="text-sm text-gray-600 font-medium">200+ outlets across India achieved</p>
                                        </div>

                                        <div className="bg-white border-2 border-blue-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                                            <div className="w-full h-20 bg-blue-300 rounded mb-3 flex items-center justify-center">
                                                <span className="text-white font-bold">TECH</span>
                                            </div>
                                            <p className="text-sm text-gray-600 font-medium">Advanced tracking system launched</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-xl text-white text-center">
                                    <h3 className="text-2xl font-bold mb-2">Join the Tossin Family</h3>
                                    <p className="mb-4 opacity-90">Be part of India's fastest growing pizza chain</p>
                                    <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                                        Franchise Opportunities
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CSS Animations */}
                <style jsx global>{`
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                .animate-fadeOut {
                    animation: fadeOut 0.3s ease-out forwards;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out forwards;
                }
                .animate-scaleOut {
                    animation: scaleOut 0.3s ease-out forwards;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes fadeOut {
                    from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                
                @keyframes scaleOut {
                    from {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: scale(0.95) translateY(20px);
                    }
                }
                
                /* Custom Scrollbar */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #c1c1c1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #a8a8a8;
                }
            `}</style>
            </div>
        </div>
    );
};

export default CustomModal;