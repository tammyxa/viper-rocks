import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";



export const Nav = async () => {
  const session = await getServerSession();

  

  return (
    <>
      <header id="HeaderInternal" className="sticky top-0 z-30">
        <div className="AppBarInternal sticky lg:relative top-0 z-30">
          <div className="bg-gradient-to-r from-jpl-red to-jpl-red-darker text-white font-medium relative z-10">
            <div className="flex flex-row px-4 lg:container mx-auto py-2 items-center justify-between">
              <div className="flex flex-row items-center py-px">
                <a
                  href="//js.jpl.nasa.gov"
                  aria-label="JPL Space"
                  className="block mr-10"
                >
                  <svg
                    className="LogoJPL text-white lg:w-14.5"
                    width="74"
                    height="22"
                    viewBox="0 0 74 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M14.598 0v14.804a1.36 1.36 0 0 1-1.336 1.336H2.982L0 21.897h16.757c2.673 0 5.037-2.775 5.037-5.346V0h-7.196zM70.317 16.14H60.14a1.36 1.36 0 0 1-1.337-1.336V0h-7.196v16.551c0 2.57 2.365 5.346 5.038 5.346h16.757l-3.085-5.757zM49.037 3.495C47.907 1.336 45.542 0 43.075 0H23.747v22h7.197V5.757h9.663c1.337 0 2.468 1.13 2.468 2.467 0 1.337-1.131 2.468-2.468 2.468h-9.663l2.981 5.757h9.047c2.467 0 4.729-1.337 5.962-3.496.412-.72.72-1.439.925-2.261.206-.823.309-1.645.309-2.468 0-.822-.103-1.645-.309-2.467-.102-.822-.41-1.542-.822-2.262z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  className="hidden lg:flex flex-row items-center text-3xl py-px leading-tighter tracking-wide"
                  href="/"
                  title="VIPER ROCKS"
                >
                  <span></span>
                  <span className="border-l border-white pl-5 ml-5">
                    VIPER ROCKS
                  </span>
                </a>
              </div>
              <div className="flex flex-nowrap -mr-2">
                {session ? (
                  <Link
                    href="/api/auth/signout?callbackUrl=/"
                    className="flex flex-nowrap items-center focus:outline-none focus:ring-2 mr-2 py-1"
                  >
                    <span className="hidden lg:block mr-2">Sign Out</span>
                    <span className="block flex-shrink-0">
                      <svg
                        className="IconUser"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zm5.42 17.867c-1.525 1.143-3.43 1.778-5.42 1.778-2.032 0-3.938-.635-5.42-1.778v-.593a2.701 2.701 0 0 1 2.71-2.71c.466 0 1.143.509 2.71.509 1.524 0 2.202-.508 2.71-.508a2.729 2.729 0 0 1 2.71 2.71v.592zm1.27-1.143c-.297-1.99-1.948-3.514-3.98-3.514-.89 0-1.313.508-2.71.508-1.44 0-1.863-.508-2.71-.508-2.074 0-3.725 1.524-4.022 3.514-1.524-1.651-2.413-3.81-2.413-6.224A9.134 9.134 0 0 1 10.5 1.355c5.038 0 9.145 4.107 9.145 9.145 0 2.413-.931 4.573-2.456 6.224zM10.5 4.742a3.731 3.731 0 0 0-3.726 3.726 3.704 3.704 0 0 0 3.726 3.726 3.731 3.731 0 0 0 3.726-3.726c0-2.033-1.694-3.726-3.726-3.726zm0 6.097a2.367 2.367 0 0 1-2.371-2.371c0-1.27 1.059-2.371 2.371-2.371 1.27 0 2.371 1.1 2.371 2.37 0 1.313-1.1 2.372-2.371 2.372z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                ) : (


                  <div className="flex">
                  <Link
                    href="/CreateUser"
                    className="flex flex-nowrap items-center focus:outline-none focus:ring-2 mr-2 py-1"
                  >
                    <span className="hidden lg:block mr-2">Join</span>
                     
                  </Link>

                   <Link
                    href="/api/auth/signin"
                    className="flex flex-nowrap items-center focus:outline-none focus:ring-2 mr-2 py-1"
                  >
                    <span className="hidden lg:block mr-2">Sign In</span>
                    <span className="block flex-shrink-0">
                      <svg
                        className="IconUser"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zm5.42 17.867c-1.525 1.143-3.43 1.778-5.42 1.778-2.032 0-3.938-.635-5.42-1.778v-.593a2.701 2.701 0 0 1 2.71-2.71c.466 0 1.143.509 2.71.509 1.524 0 2.202-.508 2.71-.508a2.729 2.729 0 0 1 2.71 2.71v.592zm1.27-1.143c-.297-1.99-1.948-3.514-3.98-3.514-.89 0-1.313.508-2.71.508-1.44 0-1.863-.508-2.71-.508-2.074 0-3.725 1.524-4.022 3.514-1.524-1.651-2.413-3.81-2.413-6.224A9.134 9.134 0 0 1 10.5 1.355c5.038 0 9.145 4.107 9.145 9.145 0 2.413-.931 4.573-2.456 6.224zM10.5 4.742a3.731 3.731 0 0 0-3.726 3.726 3.704 3.704 0 0 0 3.726 3.726 3.731 3.731 0 0 0 3.726-3.726c0-2.033-1.694-3.726-3.726-3.726zm0 6.097a2.367 2.367 0 0 1-2.371-2.371c0-1.27 1.059-2.371 2.371-2.371 1.27 0 2.371 1.1 2.371 2.37 0 1.313-1.1 2.372-2.371 2.372z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                  </div>
                )}







                <button
                  id="NavMobileToggle"
                  className="block lg:hidden focus:outline-none focus:ring-2 p-2"
                  aria-label="Open menu"
                >
                  <svg
                    className="IconMenu"
                    width="30"
                    height="26"
                    viewBox="0 0 30 26"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M30 22v4H0v-4h30zm0-11v4H0v-4h30zm0-11v4H0V0h30z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>

                  <svg
                    className="IconClose"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M21.192-.02l2.829 2.828L14.828 12l9.193 9.192-2.829 2.829L12 14.828l-9.192 9.193-2.829-2.829L9.172 12-.02 2.808 2.808-.021 12 9.172 21.192-.02z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden block relative z-30 bg-white shadow-lg py-4">
            <a
              className="px-4 lg:px-0 lg:container mx-auto flex flex-row items-center leading-tight tracking-wide font-medium text-gray-dark"
              href="/"
              title="VIPER ROCKS"
            >
              <span className="text-3xl"></span>
              <span className="text-lg border-l-2 border-red-dark pl-3 ml-3">
                VIPER ROCKS
              </span>
            </a>
          </div>
        </div>

        <div id="NavInternalContainer" className="lg:block hidden">
          <nav className="NavInternal" aria-label="Main">
            <div className="w-full relative lg:shadow-lg z-20 bg-white">
              <div className="lg:container mx-auto lg:flex justify-between">
                <ul className="top-level lg:flex flex-nowrap lg:overflow-x-auto pt-6 lg:pt-0">
                  <li className="">
                    <Link href="/" className="block">
                      <span className="inline-block" data-text="Home">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/AboutUs" className="block">
                      <span
                        className="inline-block text-gray-mid"
                        data-text="About Us"
                      >
                        About Us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/FAQ" className="block">
                      <span
                        className="inline-block text-gray-mid"
                        data-text="Questions"
                      >
                        Questions
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ContactUs" className="block">
                      <span
                        className="inline-block text-gray-mid"
                        data-text="Contact Us"
                      >
                        Contact
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Explore" className="block">
                      <span
                        className="inline-block text-gray-mid"
                        data-text="Konva"
                      >
                        ExploreTest
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Tasks/Konva" className="block">
                      <span
                        className="inline-block text-gray-mid"
                        data-text="Konva"
                      >
                        Fun!
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div
            id="NavBgOverlay"
            className="fixed z-0 inset-0 hidden lg:block opacity-80 bg-black invisible-overlay"
          ></div>
          <div className="bg-white fixed inset-0 lg:hidden z-0"></div>
        </div>
      </header>
    </>
  );
};
