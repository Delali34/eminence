// ============================================
// FILE: data/events.js
// PASTE THIS INTO: data/events.js
// This is the DATA file with event info.
// ============================================

const events = [
  {
    id: "farmers-care-programme-2025",
    title: "Farmers Care Programme 2025",
    date: "November 07, 2025",
    location: "YKMFA, Somanya, Eastern Region",
    category: "Capacity Building",
    image: "/fcp.jpg",
    excerpt:
      "Over 300 mango farmers in Yilo Krobo were equipped with practical knowledge on land rights, agribusiness finance, agrochemical safety, and innovative agri-entrepreneurship to strengthen the agricultural value chain.",
    description: `The Farmers Care Programme was organised by Eminence Lead International for the Yilo Krobo Mango Farmers Association (YKMFA) in Somanya. Held under the theme "Sustainable Agriculture Business Practices and Innovative Agri-Entrepreneurship for Robust Agricultural Development," the programme brought together over 300 mango farmers, alongside agricultural stakeholders, financial institutions, and development partners for a full-day capacity-building engagement.

The event focused on equipping farmers with practical knowledge on land rights and laws, agribusiness finance, agrochemical safety, and innovative agri-entrepreneurship — all as part of broader efforts to promote sustainable agriculture, rural development, and food security in the region.

Dr. Joseph Kobla Wemakor, Executive Director of Human Rights Reporters Ghana (HRRG), delivered a presentation on understanding land rights and laws as a farmer, stressing that land is the backbone of farming and that limited knowledge of land ownership systems continues to expose farmers to exploitation, disputes, and loss of livelihoods. He explained the various forms of land rights — ownership, leasehold, communal or customary land, and tenancy arrangements — and highlighted key statutes including the Land Act 2020 (Act 1036). He urged farmers to properly document land transactions, register lands with the Lands Commission, and seek legal advice before signing agreements.

Mr. Nicholas Nikoi, Unit Head of AgroMarketing and Sales at the Agricultural Development Bank (ADB), challenged farmers to approach agriculture strictly as a business and not a hobby. He warned against excessive and unplanned spending, noting that a farm may appear productive but still fail if costs outweigh returns. He outlined seven key principles for prudent financial management — setting clear priorities, budgeting, paying bills promptly, controlling debt, investing regularly, ensuring farms and livelihoods, and planning for retirement. He likened debt to fire that can either cook food or burn a house if not handled carefully.

Dr. Felix Kwame Appiah, Technical Manager (Operations) of the Cocoa Health and Extension Division of the Ghana Cocoa Board (COCOBOD), delivered a comprehensive session on the safe use of agrochemicals, explaining that insecticides, herbicides, fungicides, and pesticides are biologically active chemicals that must be handled responsibly. He educated farmers on climate-smart agriculture, integrated pest management, and proper procedures for purchasing, transporting, storing, measuring, mixing, and applying agrochemicals.

The programme demonstrated Eminence Lead International's commitment to empowering farming communities with the knowledge and tools they need to build sustainable, profitable agricultural enterprises.`,
    impact: [
      "300+ mango farmers trained",
      "Land rights & laws education delivered",
      "Agribusiness finance training provided",
      "Agrochemical safety awareness raised",
    ],
    partners: [
      "Yilo Krobo Mango Farmers Association (YKMFA)",
      "Human Rights Reporters Ghana (HRRG)",
      "Agricultural Development Bank (ADB)",
      "Ghana Cocoa Board (COCOBOD)",
    ],
  },
];

function getEventById(id) {
  return events.find((event) => event.id === id);
}

function getEventsByCategory(category) {
  return events.filter((event) => event.category === category);
}

function getCategories() {
  return ["All", ...new Set(events.map((event) => event.category))];
}

export { events, getEventById, getEventsByCategory, getCategories };
