
import Image from "next/image";

function About() {
    return (
        <div>


    <div className="flex gap-5 items-center max-md:flex-col">
      <div className="flex flex-col max-md:ml-0 lg:mx-0 md:mx-0 sm:mx-auto mx-auto max-md:mx-auto">
        <div className="flex overflow-hidden z-10 flex-col justify-center self-stretch my-auto -mr-40 w-full max-md:w-full font-bold tracking-wide text-slate-800 max-md:mt-10">
          <div className="flex overflow-hidden flex-wrap gap-8 items-center">
            <div className="lg:mx-0 md:mx-0 sm:mx-auto w-full h-full mx-auto flex overflow-hidden flex-col self-stretch my-auto lg:text-start md:text-start sm:text-center text-center">
              <div className="text-base tracking-normal">ABOUT COMPANY</div>
              <div className="mt-9 text-6xl leading-none lg:text-start md:text-start sm:text-center text-center">
                ABOUT US
              </div>
              <div className="mt-9 text-sm lg:text-xl md:text-xl sm:text-sm text-neutral-500">
                We know how large objects will act, <br />but things on a small
                scale
              </div>
              <button className="flex gap-2.5 items-start self-start mt-9 text-sm leading-loose text-center text-white overflow-hidden px-10 py-4 bg-sky-500 rounded-md max-md:px-5 lg:mx-0 md:mx-0 sm:mx-auto mx-auto max-md:mx-auto">
                Get Quote Now
              </button>
            </div>
            <div className="flex shrink-0 self-stretch my-auto min-w-[240px] w-[415px]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full max-md:mx-auto">
        <Image
          loading="lazy"
          className="object-contain grow w-full aspect-[0.95] max-md:mt-10"
          src="/girl.png"
          alt="About Us"
          width={500}
          height={500}
        />
      </div>
    </div>

    <div className="flex overflow-hidden flex-col justify-center w-full bg-white">
      <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full">
        <div className="flex flex-wrap gap-10 justify-center items-center max-w-full w-[1018px]">
          <div className="flex flex-col grow shrink justify-center self-stretch py-6 my-auto min-w-[240px] w-[315px]">
            <div className="sm:px-8 lg:px-0 md:px-0 px-8 flex flex-col max-w-full w-[394px]">
              <div className="text-sm tracking-wide leading-none text-red-500">
                Problems trying
              </div>
              <div className="mt-6 text-2xl font-bold tracking-normal leading-8 text-slate-800">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </div>
            </div>
          </div>

          <div className="sm:px-8 lg:px-0 md:px-0 px-8 overflow-hidden grow shrink self-stretch my-auto text-sm tracking-wide leading-5 min-w-[240px] text-neutral-500 w-[450px]">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </div>
        </div>
      </div>
    </div>


    <div className="flex overflow-hidden flex-col justify-center items-center w-full font-bold text-center max-md:px-5">
      <div className="flex flex-col justify-center items-center py-20 w-full max-w-[1050px]">
        <div className="flex flex-wrap gap-8 items-start lg:mx-0 md:mx-0 sm:mx-auto mx-auto">
          {/* First Stats Box */}
          <div className="flex flex-col items-center lg:w-50 md:w-52 sm:w-full w-full">
            <div className="text-8xl w-full tracking-wide leading-none text-slate-800 max-md:text-4xl">
              15K
            </div>
            <div className="text-base tracking-normal text-neutral-500">
              Happy Customers
            </div>
          </div>

          {/* Second Stats Box */}
          <div className="flex flex-col items-center lg:w-50 md:w-52 sm:w-full w-full">
            <div className="text-8xl w-full tracking-wide leading-none text-slate-800 max-md:text-4xl">
              150K
            </div>
            <div className="text-base tracking-normal text-neutral-500">
              Monthly Visitors
            </div>
          </div>

          {/* Third Stats Box */}
          <div className="flex flex-col items-center lg:w-50 md:w-52 sm:w-full w-full">
            <div className="text-8xl w-full tracking-wide leading-none text-slate-800 max-md:text-4xl">
              15
            </div>
            <div className="text-base tracking-normal text-neutral-500">
              Countries Worldwide
            </div>
          </div>

          {/* Fourth Stats Box */}
          <div className="flex flex-col items-center lg:w-50 md:w-52 sm:w-full w-full">
            <div className="text-8xl w-full tracking-wide leading-none text-slate-800 max-md:text-4xl">
              100+
            </div>
            <div className="text-base tracking-normal text-neutral-500">
              Top Partners
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24">
      <img
        loading="lazy"
        alt="Company Overview"
        className="object-contain mb-0 w-full aspect-[1.83] max-w-[989px] max-md:mb-2.5"
        src="/Video card.png"
      />
    </div>

{/*Logo Section*/}
    <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5">
      <div className="flex overflow-hidden flex-col items-center py-20 w-full">
        <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[864px]">
          <div className="flex overflow-hidden flex-col items-center w-full">
            <div className="text-4xl font-bold leading-none text-slate-800">
              Big Companies Are Here
            </div>
            <div className="mt-8 text-sm leading-5 text-center text-neutral-500 w-[547px]">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 mt-6 -mr-1">
          <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 ms:w-40 sm:w-full w-full gap-4">
            <img
              loading="lazy"
              alt="Stripe Logo"
              className="object-contain max-w-full aspect-[3.03]"
              src="/logo-3.png"
              style={{ width: '103px' }}
            />
          </div>
          <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 ms:w-40 sm:w-full w-full gap-4">
            <img
              loading="lazy"
              alt="Hooli Logo"
              className="object-contain max-w-full aspect-[1.41]"
              src="/logo-4.png"
              style={{ width: '83px' }}
            />
          </div>
          <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 ms:w-40 sm:w-full w-full gap-4">
            <img
              loading="lazy"
              alt="AWS Logo"
              className="object-contain max-w-full aspect-[1.36]"
              src="/logo-5.png"
              style={{ width: '102px' }}
            />
          </div>
          <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 ms:w-40 sm:w-full w-full gap-4">
            <img
              loading="lazy"
              alt="Leaf Logo"
              className="object-contain max-w-full aspect-[2.45]"
              src="/logo-6.png"
              style={{ width: '103px' }}
            />
          </div>
          <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 ms:w-40 sm:w-full w-full gap-4">
            <img
              loading="lazy"
              alt="Lyft Logo"
              className="object-contain max-w-full aspect-[1.68]"
              src="/logo-7.png"
              style={{ width: '104px' }}
            />
          </div>
          <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 ms:w-40 sm:w-full w-full gap-4">
            <img
              loading="lazy"
              alt="Lyft Logo"
              className="object-contain max-w-full aspect-[1.68]"
              src="/logo-8.png"
              style={{ width: '104px' }}
            />
          </div>
        </div>
      </div>
    </div>


    <div className="overflow-hidden lg:pl-20 md:pl-20 sm:pl-0 pl-0 w-full lg:py-0 md:py-0 sm:py-8 py-8 bg-sky-600 max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        {/* Left Section (Text Content) */}
        <div className="flex flex-col justify-center lg:text-start md:text-start sm:text-center text-center lg:w-[64%] md:w-[64%] sm:w-full w-full max-md:ml-0">
          <div className="flex overflow-hidden z-10 flex-col justify-center mr-0 w-full text-sm font-bold tracking-wide text-white">
            <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center max-w-full">
              {/* Text Block */}
              <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[438px]">
                <div className="text-base tracking-normal">WORK WITH US</div>
                <div className="mt-6 text-4xl leading-none">Now Let&apos;s grow Yours</div>
                <div className="mt-6 leading-5">
                  The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                </div>
                <button className="lg:mx-0 md:mx-0 sm:mx-auto mx-auto overflow-hidden self-start px-10 py-4 mt-6 leading-loose text-center whitespace-nowrap rounded-md border border-solid border-neutral-50 text-neutral-50 max-md:px-5">
                  Button
                </button>
              </div>

              {/* Empty Spacer (For Right Image) */}
              <div className="flex shrink-0 self-stretch my-auto min-w-[240px] w-[548px]"></div>
            </div>
          </div>
        </div>

        {/* Right Section (Image for Larger Screens) */}
        <div className="lg:flex flex-col ml-5 w-[36%] max-md:ml-0 md:flex sm:hidden hidden">
          <img
            loading="lazy"
            className="object-contain grow w-full aspect-[0.93]"
            src="/girl-2.png"
            alt="Woman Illustration"
          />
        </div>
      </div>
    </div>



        </div>
    );
}
export default About;