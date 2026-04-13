'use client';

import { useState } from 'react';

export default function BookDemo() {
  const [teamSize, setTeamSize] = useState('1-5');

  return (
    <section className="bg-[#060f17] text-white py-20">

      {/* HERO CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">

          {/* LEFT SIDE */}
          <div>
            <button className="border border-[#2c4a57] text-xs px-4 py-1 rounded-full mb-6">
              CONTACT SALES
            </button>

            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6">
              Book a demo.
            </h1>

            <p className="text-gray-300 mb-4">
              See whether VizeEst fits your team and your workflow.
            </p>

            <p className="text-gray-400 mb-8">
              Add a Zoom scheduler here for direct booking.
            </p>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Live walkthrough',
                'Use-case discussion',
                'Pricing guidance',
                'Zoom appointment booking',
              ].map((item, i) => (
                <div
                  key={i}
                  className="border bg-[#101921] border-[#2c4a57] rounded-2xl px-6 py-5 hover:bg-[#0b2230] transition cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#101921] border border-[#1b3440] rounded-3xl p-6 sm:p-8 shadow-lg">

            {/* INPUT */}
            <div className="mb-4">
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 p-3 rounded-xl bg-[#09121c] border border-[#1b3440] focus:outline-none focus:border-[#2c4a57]"
              />
            </div>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="text-sm text-gray-300">Work Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full mt-2 p-3 rounded-xl bg-[#09121c] border border-[#1b3440] focus:outline-none focus:border-[#2c4a57]"
              />
            </div>

            {/* COMPANY */}
            <div className="mb-4">
              <label className="text-sm text-gray-300">Company</label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full mt-2 p-3 rounded-xl bg-[#09121c] border border-[#1b3440] focus:outline-none focus:border-[#2c4a57]"
              />
            </div>

            {/* TEAM SIZE */}
            <div className="mb-4">
              <label className="text-sm text-gray-300">Team Size</label>
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className="w-full mt-2 p-3 rounded-xl bg-[#09121c] border border-[#1b3440] focus:outline-none focus:border-[#2c4a57]"
              >
                <option>1-5</option>
                <option>6-10</option>
                <option>11-50</option>
                <option>50+</option>
              </select>
            </div>

            {/* TEXTAREA */}
            <div className="mb-6">
              <label className="text-sm text-gray-300">
                What are you estimating today?
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your workflow, team, or current estimating challenge"
                className="w-full mt-2 p-3 rounded-xl bg-[#09121c] border border-[#1b3440] focus:outline-none focus:border-[#2c4a57]"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-[#e5e5e5] transition">
              Request Demo
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}