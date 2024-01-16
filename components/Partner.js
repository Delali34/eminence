// components/BecomePartner.js

import Image from "next/image";
import partnerImage from "../public/partner.jpg"; // Replace with the path to the image file
import Link from "next/link";

const BecomePartner = () => {
  return (
    <div className="bg2 font-mont">
      {" "}
      <div className="max-w-[1280px] mx-auto p-6  flex lg:flex-row flex-col justify-center gap-10 items-center px-5 lg:px-10">
        <div className="flex flex-col m-10">
          <div className="">
            <Image
              src={partnerImage}
              alt="Become a Partner"
              width={400}
              height={400}
            />
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              Become a Partner
            </h2>
            <p className="text-gray-600 mt-2">
              Join our partnership program and grow together.
            </p>
            <Link href="/Partner">
              {" "}
              <div className="bg p-2 w-[130px] text-lg font-medium text-center text-white mt-3">
                Join Us
              </div>
            </Link>
          </div>
        </div>
        {/* invest */}
        <div className="flex flex-col m-10">
          <div className="">
            <Image
              src="/invest.jpg"
              alt="Become a Partner"
              width={400}
              height={400}
            />
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              Become an Investor
            </h2>
            <p className="text-gray-600 mt-2">
              Join our investment program and grow together.
            </p>
            <Link href="/Investor">
              {" "}
              <div className="bg p-2 w-[130px] text-lg font-medium text-center text-white mt-3">
                Join Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
