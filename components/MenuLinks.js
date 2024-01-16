// components/MenuLinks.js
import Link from "next/link";

function MenuLinks() {
  return (
    <div className="">
      <div className="space-x-10 text-white p-5 pt-10 items-center text-[16px] font-maintext font-semibold px-10">
        {" "}
        <Link href="/">
          <h1 className="text-black border-[#531253] border-[1px] bg-white rounded-md p-2  text-center">
            Home
          </h1>
        </Link>
        <Link href="/AboutUs">
          <h1 className="text-black bg-white rounded-md p-2 border-[#531253] border-[1px]  duration-300 text-center">
            About Us
          </h1>
        </Link>
        <Link href="/Donate">
          <h1 className="text-black bg-white rounded-md p-2 border-[#531253] border-[1px]  duration-300 text-center">
            Donate
          </h1>
        </Link>
        <Link href="/Programs">
          <h1 className="text-black bg-white rounded-md p-2 border-[#531253] border-[1px]  duration-300 text-center">
            Programs
          </h1>
        </Link>
        <Link href="/Contact">
          <h1 className="text-black bg-white rounded-md p-2 border-[#531253] border-[1px]  duration-300 text-center">
            Contact
          </h1>
        </Link>
        <Link href="/Gallery">
          <h1 className="text-black bg-white rounded-md p-2 border-[#531253] border-[1px]  duration-300 text-center">
            Gallery
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default MenuLinks;
