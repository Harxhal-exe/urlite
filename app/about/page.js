import React from 'react'

const about = () => {
    return (
        <section className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-800">About Us</h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        We’re on a mission to make sharing links simple, fast, and reliable for everyone.
                    </p>
                </div>

                {/* Mission / Story */}
                <div className="bg-white shadow-md rounded-2xl p-8 mb-16">
                    <h2 className="text-2xl font-semibold text-slate-800">Our Story</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        URLite was born from a simple idea: long, messy URLs are annoying.
                        We wanted to create a tool that makes sharing links easy, secure,
                        and professional. Our goal is to help individuals, creators, and
                        businesses share content without the clutter.
                    </p>
                </div>

                {/* Values / Features */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-800 text-center">Our Values</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center bg-white shadow-md rounded-xl p-6">
                            <div className="text-blue-600 text-3xl mb-2">🚀</div>
                            <h3 className="font-semibold text-slate-700">Fast</h3>
                            <p className="text-slate-500 text-sm mt-1">Instantly shorten links.</p>
                        </div>
                        <div className="text-center bg-white shadow-md rounded-xl p-6">
                            <div className="text-blue-600 text-3xl mb-2">🔒</div>
                            <h3 className="font-semibold text-slate-700">Secure</h3>
                            <p className="text-slate-500 text-sm mt-1">Safe & reliable sharing.</p>
                        </div>
                        <div className="text-center bg-white shadow-md rounded-xl p-6">
                            <div className="text-blue-600 text-3xl mb-2">🎯</div>
                            <h3 className="font-semibold text-slate-700">Simple</h3>
                            <p className="text-slate-500 text-sm mt-1">Clean and user-friendly.</p>
                        </div>
                        <div className="text-center bg-white shadow-md rounded-xl p-6">
                            <div className="text-blue-600 text-3xl mb-2">🌍</div>
                            <h3 className="font-semibold text-slate-700">Accessible</h3>
                            <p className="text-slate-500 text-sm mt-1">Free for everyone.</p>
                        </div>
                    </div>
                </div>

                {/* Team Section (Optional if Solo Dev) */}
                <div className="bg-white shadow-md rounded-2xl p-8 mb-16 text-center">
                    <h2 className="text-2xl font-semibold text-slate-800">The Creator</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Hi 👋 I’m [Harshal], a developer passionate about making simple
                        tools that help people. URLite is a project I built to combine my
                        love for clean design, speed, and functionality.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-slate-800">Ready to shorten your first link?</h2>
                    <p className="text-slate-600 mt-2">It only takes a few seconds to get started.</p>
                    <a href="/shorten" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">Get Started</a>
                </div>
            </div>
        </section>
    );
}

export default about
