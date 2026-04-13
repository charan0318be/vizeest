'use client';

import { useTheme } from '@/context/ThemeContext';

const plans = [
  {
    name: "Free Always",
    price: "$0",
    sections: [
      {
        title: "Community",
        items: [
          "Free always",
          "Single user",
          "Basic Non AI detection 1 sheet at a time (After free tokens over)",
          "Visual estimation view On (No Interactive feature)",
          "Only 1 sheet at a time",
          "Feedback or Query option",
          "1 take off per day",
        ],
      },
    ],
    button: "Get Started Free",
  },

  {
    name: "Extended",
    price: "$99",
    sections: [
      {
        title: "Extended",
        items: [
          "All the features in Community",
          "$99 per month",
          "Single user",
          " AI detection tokens top up (Pay as you go)",
          "10 Layer detection",
          " Visual estimation On (Interactive Visual Estimation)",
          "Email support",
          "3 take offs per day",
        ],
      },
    ],
    button: "Choose Extended",
  },

  {
    name: "Pro",
    price: "$499",
     originalPrice: "$999",
    highlight: true,
    sections: [
      {
        title: "Pro",
        items: [
          "All the features in Extended",
          "$499 per month , $249 additional user per month",
          "Multi-user* & Admin controls",
          " 17 Layer detection",
          " Visual Edit functionality",
          "Team collaboration",
          "File Analysis Queuing",
          "AI Support",
          "Unlimited take offs per day",
        ],
      },
    ],
    button: "Choose Pro",
  },

  {
    name: "Enterprise",
    price: "$1999",
    sections: [
      {
        title: "Enterprise",
        items: [
          "All the Features in Pro",
          "$1999 per month",
          "Dedicated Support",
          "1 Dedicated Estimator resource (1 month Lead time)",
        ],
      },
    ],
    button: "Contact Sales",
  },
];

export default function PricingSection() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#060f17]' : 'bg-white'}`}>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tag */}
        <div className="mb-6">
          <span className="px-5 py-2 rounded-full text-xs tracking-widest border border-[#2c4a57] text-[#9adbea]">
            PRICING
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl mb-6">
          Start with the plan that fits your estimating workflow.
        </h2>

        {/* Description */}
        <p className="text-[#9fb0b9] text-lg max-w-3xl mb-16">
          VizeEst is designed to scale from individual estimators to growing teams and enterprise fabricators.
        </p>

        {/* CARDS */}
        <div className="flex gap-6 lg:gap-8 overflow-x-auto pb-6">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`min-w-[320px] p-8 rounded-3xl border transition-all ${
                plan.highlight
                  ? 'bg-[#0b2230] border-[#2c4a57] shadow-lg scale-[1.03]'
                  : 'bg-[#061a24] border-[#1b3440]'
              }`}
            >

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {plan.name}
              </h3>

              {/* Price */}
             <div className="mb-2">
  
  {/* Original Price (Strike) */}
                      {plan.originalPrice && (
                        <p className="text-gray-400 line-through text-sm">
                          {plan.originalPrice}
                        </p>
                      )}

                      {/* Current Price */}
                      <div className="text-4xl font-bold text-white">
                        {plan.price}
                      </div>

                      

                    </div>
              <p className="text-[#9fb0b9] text-sm mb-6">per month</p>

              {/* SECTIONS */}
              <div className="space-y-6 mb-8">
                {plan.sections.map((section, i) => (
                  <div key={i}>

                    {/* Section Title */}
                    <p className="text-sm text-[#9adbea] font-medium mb-2">
                      {section.title}
                    </p>

                    {/* Items */}
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="text-[#9fb0b9] text-sm flex gap-2">
                          <span className="text-[#9adbea]">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-full text-sm font-medium transition ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-[#e5e5e5]'
                    : 'border border-[#2c4a57] text-white hover:bg-[#0b2230]'
                }`}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>

<div className="mt-16 overflow-x-auto">
  <h1 className="text-2xl font-bold text-white mb-6 justify-center text-center">Features</h1>

  <table className="w-full border border-[#1b3440] border-collapse">

  {/* HEADER */}
  <thead className="bg-[#0b2230] text-white">
    <tr>
      <th className="p-4 border border-[#1b3440]">Category</th>
      <th className="p-4 border border-[#1b3440]">Feature Flag</th>
      <th className="p-4 border border-[#1b3440]">Description</th>
      <th className="p-4 border border-[#1b3440]">Community</th>
      <th className="p-4 border border-[#1b3440]">Extended</th>
      <th className="p-4 border border-[#1b3440]">Pro</th>
      <th className="p-4 border border-[#1b3440]">Enterprise</th>
    </tr>
  </thead>

  {/* BODY */}
  <tbody className="bg-[#061a24] text-[#9fb0b9]">

    
 <tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
    rowSpan={4}
    className="p-4 border border-[#1b3440] align-top font-semibold text-white"
  >
    Detection Engine
  </td>

  <td className="p-4 border border-[#1b3440]">ai_detection</td>
  <td className="p-4 border border-[#1b3440]">
    Core 17-layer detection pipeline
  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

{/* NEXT ROWS (NO CATEGORY COLUMN HERE) */}
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">connection_detection_full</td>
  <td className="p-4 border border-[#1b3440]">
    Full connection classification
  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">typ_sym_propagation</td>
  <td className="p-4 border border-[#1b3440]">
    TYP/SYM propagation
  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">ocr_fallback</td>
  <td className="p-4 border border-[#1b3440]">
    OCR fallback
  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

{/*2ns*/}
<tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
   
    className="p-4 border border-[#1b3440] align-top font-semibold text-white"
  >
    AI Vision						
  </td>

  <td className="p-4 border border-[#1b3440]">ai_vision</td>
  <td className="p-4 border border-[#1b3440]">
    AI Vision enhancement (Gemini/Claude/GPT-4o)
  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>


{/*2ns*/}
<tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
    rowSpan={2}
    className="p-4 border border-[#1b3440] align-top font-semibold text-white"
  >
   3D Model						

  </td>

  <td className="p-4 border border-[#1b3440]">model_3d</td>
  <td className="p-4 border border-[#1b3440]">
    Interactive 3D structural model viewer

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

{/* NEXT ROWS (NO CATEGORY COLUMN HERE) */}
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">model_3d_advanced</td>
  <td className="p-4 border border-[#1b3440]">
    Section cuts, in-model measurement, glTF export
  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>




{/*2ns*/}
<tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
    rowSpan={6}
    className="p-4 border border-[#1b3440] align-top font-semibold text-white"
  >
   Results & Review						

  </td>

  <td className="p-4 border border-[#1b3440]">confidence_badges
</td>
  <td className="p-4 border border-[#1b3440]">
    Confidence indicators with detection source breakdown

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

{/* NEXT ROWS (NO CATEGORY COLUMN HERE) */}
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">grade_legend
</td>
  <td className="p-4 border border-[#1b3440]">
   Grade sourcing legend (PDF/Notes/Manual/Default)

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">custom_columns
</td>
  <td className="p-4 border border-[#1b3440]">
    Add custom formula/text columns to results table

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">reference_table
</td>
  <td className="p-4 border border-[#1b3440]">
   Reference table editor for client standards

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">global_search

</td>
  <td className="p-4 border border-[#1b3440]">
  Full-text search across projects and documents

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">drawing_comparison

</td>
  <td className="p-4 border border-[#1b3440]">
   Side-by-side PDF drawing comparison


  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
{/*2ns*/}
<tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
    rowSpan={4}
    className="p-4 border border-[#1b3440] align-top font-semibold text-white"
  >
    Canvas Tools						

  </td>

  <td className="p-4 border border-[#1b3440]">markup_tools
</td>
  <td className="p-4 border border-[#1b3440]">
    Text, arrow, rectangle, ellipse, cloud, polyline

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

{/* NEXT ROWS (NO CATEGORY COLUMN HERE) */}
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">measurement_tools
</td>
  <td className="p-4 border border-[#1b3440]">
   Point-to-point distance measurement tool

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">area_tool
</td>
  <td className="p-4 border border-[#1b3440]">
    Polygon area and perimeter measurement

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">count_tool
</td>
  <td className="p-4 border border-[#1b3440]">
   Manual count markers

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
{/*2ns*/}
<tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
    rowSpan={7}
    className="p-4 border border-[#1b3440] align-top font-semibold text-white"
  >
   Export						

  </td>

  <td className="p-4 border border-[#1b3440]">export_csv
</td>
  <td className="p-4 border border-[#1b3440]">
    CSV export (single page)

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

{/* NEXT ROWS (NO CATEGORY COLUMN HERE) */}
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">export_xlsx
</td>
  <td className="p-4 border border-[#1b3440]">
   Excel export (multi-sheet workbook)

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">export_pdf
</td>
  <td className="p-4 border border-[#1b3440]">
    Annotated PDF export

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">export_png
</td>
  <td className="p-4 border border-[#1b3440]">
    Annotated PNG export

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">material_takeoff

</td>
  <td className="p-4 border border-[#1b3440]">
    Material takeoff (MTO) report with weights


  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">batch_export

</td>
  <td className="p-4 border border-[#1b3440]">
    Export multiple pages at once


  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">consolidated_export

</td>
  <td className="p-4 border border-[#1b3440]">
    Consolidated multi-page summary export


  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
{/*2ns*/}
<tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
    rowSpan={3}
    className="p-4 border border-[#1b3440] align-top font-semibold text-white"
  >
    Productivity						

  </td>

  <td className="p-4 border border-[#1b3440]">batch_analysis
</td>
  <td className="p-4 border border-[#1b3440]">
Analyse all pages of a multi-page PDF at once

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

{/* NEXT ROWS (NO CATEGORY COLUMN HERE) */}
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">bookmarks
</td>
  <td className="p-4 border border-[#1b3440]">
    Document bookmarks management

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">pdf_tools
</td>
  <td className="p-4 border border-[#1b3440]">
    PDF combine, split, rotate

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>


{/*2ns*/}
<tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
    rowSpan={6}
    className="p-4 border  border-[#1b3440] align-top font-semibold text-white"
  >
    Analytics & Admin						

  </td>

  <td className="p-4 border border-[#1b3440]">advanced_analytics
</td>
  <td className="p-4 border border-[#1b3440]">
    Tenant-level analytics dashboard

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

{/* NEXT ROWS (NO CATEGORY COLUMN HERE) */}
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">reports
</td>
  <td className="p-4 border border-[#1b3440]">
    Detailed usage/activity/project/session reports

  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">daily_digest
</td>
  <td className="p-4 border border-[#1b3440]">
    Automated daily digest emails

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">audit_logs
</td>
  <td className="p-4 border border-[#1b3440]">
   Full audit trail (compliance-ready)

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">team_management

</td>
  <td className="p-4 border border-[#1b3440]">
   Invite, activate/deactivate, assign roles


  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">api_access

</td>
  <td className="p-4 border border-[#1b3440]">
   Full audit trail (compliance-ready)

  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
{/*2ns*/}
<tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
    rowSpan={1}
    className="p-4 border  border-[#1b3440] align-top font-semibold text-white"
  >
   Collaboration						
					

  </td>

  <td className="p-4 border border-[#1b3440]">collaboration

</td>
  <td className="p-4 border border-[#1b3440]">
    Real-time collaboration sessions


  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>




<tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
    rowSpan={6}
    className="p-4 border  border-[#1b3440] align-top font-semibold text-white"
  >
   Integration & Branding						
				
				

  </td>

  <td className="p-4 border border-[#1b3440]">sso_integration


</td>
  <td className="p-4 border border-[#1b3440]">
   SSO (SAML 2.0 / OIDC)



  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

{/* NEXT ROWS (NO CATEGORY COLUMN HERE) */}
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">custom_branding

</td>
  <td className="p-4 border border-[#1b3440]">
   Company logo and colour scheme


  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">crm_module

</td>
  <td className="p-4 border border-[#1b3440]">
   VizeCRM (contacts, calls, SMS, campaigns)


  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">whatsapp

</td>
  <td className="p-4 border border-[#1b3440]">
   WhatsApp business integration


  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">white_label


</td>
  <td className="p-4 border border-[#1b3440]">
  White-label / reseller option



  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>
<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">dedicated_s3


</td>
  <td className="p-4 border border-[#1b3440]">
   Dedicated S3 storage bucket


  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>



<tr className="hover:bg-[#0b2230]/50 transition">
 
  <td
    rowSpan={4}
    className="p-4 border  border-[#1b3440] align-top font-semibold text-white"
  >
   Support						
					
					

  </td>

  <td className="p-4 border border-[#1b3440]">priority_support


</td>
  <td className="p-4 border border-[#1b3440]">
    Priority email support



  </td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">dedicated_support



</td>
  <td className="p-4 border border-[#1b3440]">
   Dedicated account manager



  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">phone_support



</td>
  <td className="p-4 border border-[#1b3440]">
   Phone support line



  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>

<tr className="hover:bg-[#0b2230]/50 transition">
  <td className="p-4 border border-[#1b3440]">onboarding_assistance



</td>
  <td className="p-4 border border-[#1b3440]">
  Guided onboarding and training



  </td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-gray-400 text-center">—</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
  <td className="p-4 border border-[#1b3440] text-green-400 text-center">✔</td>
</tr>



    

  </tbody>
</table>
</div>




        {/* BOTTOM */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-[#1b3440] bg-[#061a24]">
          <h3 className="text-xl font-semibold text-white mb-3">
            Usage-based scaling
          </h3>
          <p className="text-[#9fb0b9] text-[15px] leading-7">
            Certain features like detection operate on token-based usage.
          </p>
        </div>

      </div>
    </section>
  );
}