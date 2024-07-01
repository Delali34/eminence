// components/BecomePartner.js
import Image from "next/image";
import partnerImage from "../public/partner.jpg";
import investImage from "../public/invest.jpg";
import Link from "next/link";

const BecomePartner = () => {
  return (
    <section className="bg-gray-100 py-16 font-serif">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Join Our Community
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <PartnerCard
            image={partnerImage}
            title="Become a Partner"
            description="Join our partnership program and grow together with us. Expand your network and unlock new opportunities."
            link="/Partner"
          />
          <PartnerCard
            image={investImage}
            title="Become an Investor"
            description="Be part of our success story. Invest in the future and reap the rewards of our innovative projects."
            link="/Investor"
          />
        </div>
      </div>
    </section>
  );
};

const PartnerCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="object-cover w-full h-64"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link}>
          <span className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
            Learn More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BecomePartner;
