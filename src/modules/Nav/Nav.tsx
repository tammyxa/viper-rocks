export const Nav = () => {
  return (
    <>
      <header id="HeaderInternal">
        <div className="AppBarInternal lg:relative">
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
                    />
                  </svg>
                </a>
                <a
                  className="hidden lg:flex flex-row items-center text-3xl py-px leading-tighter tracking-wide"
                  href="/"
                  title="DesignLab"
                >
                  <span>18x</span>
                  <span className="border-l border-white pl-5 ml-5">
                    DesignLab
                  </span>
                </a>
              </div>
              <div className="flex flex-nowrap -mr-2">
                <a
                  href="#"
                  className="flex flex-nowrap items-center focus:outline-none focus:ring-2 mr-2 py-1"
                >
                  <span className="hidden lg:block mr-2">Sign In</span>
                  <span className="block flex-shrink-0">
                    <svg
                      className="IconUser "
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
                      />
                    </svg>
                  </span>
                </a>

                <button
                  id="NavMobileToggle"
                  className="block lg:hidden focus:outline-none focus:ring-2 p-2"
                  aria-label="Open menu"
                >
                  <svg
                    className="IconMenu "
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
                    />
                  </svg>

                  <svg
                    className="IconClose "
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
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden block relative z-30 bg-white shadow-lg py-4">
            <a
              className=" px-4 lg:px-0 lg:container mx-auto flex flex-row items-center leading-tight tracking-wide font-medium text-gray-dark"
              href="/"
              title="DesignLab"
            >
              <span className="text-3xl">18x</span>
              <span className="text-lg border-l-2 border-gray-dark pl-3 ml-3">
                DesignLab
              </span>
            </a>
          </div>
        </div>

        <div id="NavInternalContainer" className="bg-white lg:block hidden">
          <nav className="NavInternal" aria-label="Main">
            <div className="flex lg:hidden">
              <form
                id="NavMobileSearchForm"
                action="#"
                method="get"
                className="pt-6 pb-4 px-4 w-full"
              >
                <div className="SearchInput group relative flex items-center border border-gray-mid">
                  <div className="absolute inset-0 flex items-center">
                    <span className="relative z-20 ml-6 text-xl text-gray-mid">
                      <svg
                        className="IconSearch "
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M8 0a8 8 0 016.096 13.181l5.293 5.294-1.414 1.414-5.357-5.356A8 8 0 118 0zm0 2a6 6 0 100 12A6 6 0 008 2z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="NavMobileSearchInput"
                    name="query"
                    className="pl-14 border-none relative z-10 w-full pr-5 text-lg text-gray-dark bg-transparent focus:ring-opacity-50 focus:ring-2 py-4"
                    type="search"
                    aria-label="Query"
                    placeholder=""
                  />
                  <input hidden type="submit" value="Search" />
                </div>
              </form>
            </div>
            <div className="w-full relative lg:shadow-lg z-20 bg-white">
              <div className="lg:container mx-auto lg:flex justify-between">
                <ul className="top-level lg:flex flex-nowrap lg:overflow-x-auto ">
                  <li className="">
                    <a href="#" className="block">
                      <span className="inline-block" data-text="Home">
                        Home
                      </span>
                    </a>
                  </li>
                  <li className="active">
                    <button
                      className="toggle-NavInternalPanel flex flex-nowrap items-center w-full lg:w-auto"
                      id="ddtoggle_2"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="pointer-events-none" data-text="Basic">
                        Basic
                      </span>

                      <svg
                        className="IconDropdown "
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M.343 2L1.757.586 6 4.828 10.243.586 11.657 2 6 7.657.343 2z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <div className="panel-wrapper lg:absolute inset-0 spacer z-0 invisible">
                      {/* Insert NavInternalPanel here */}
                      <div
                        id="target_ddtoggle_2"
                        className="NavInternalPanel w-full lg:shadow px-10 py-8 lg:px-0 lg:py-10 allow-breaks"
                      >
                        <div className="lg:container mx-auto">
                          <div className="lg:grid lg:grid-cols-3 gap-14 gap-y-0 lg:px-12">
                            <div className="NavInternalHighlight mb-6 lg:mb-0 lg:w-5/6">
                              <p className="font-normal text-2xl lg:text-xl xl:text-2xl mb-4">
                                Highlight
                              </p>
                              <p className="text-sm leading-relaxed mb-4 lg:mb-6">
                                Quisque auctor blandit blandit. Etiam eu dolor
                                enim. In id dui porttitor, efficitur leo et,
                                ornare purus. Pellentesque eget malesuada
                                tortor. Donec porta.
                              </p>
                            </div>

                            <div className="lg:mt-0 mt-6 col-span-2 lg:auto-cols-2">
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  active "
                                >
                                  <span>Quisque ligula (active)</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Nam Cursus</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Pellentesque Iaculis Vel</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>In Bibendum Imperdiet Mauris</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Placerat Lorem</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Maecenas Viverra</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Suspendisse Vestibulum</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Nunc Tincidunt Gravida Vel</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Sed Placerat</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Donec Feugiat Eu</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End NavInternalPanel */}
                    </div>
                  </li>
                  <li className="">
                    <button
                      className="toggle-NavInternalPanel flex flex-nowrap items-center w-full lg:w-auto"
                      id="ddtoggle_3"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span
                        className="pointer-events-none"
                        data-text="No Highlights"
                      >
                        No Highlights
                      </span>

                      <svg
                        className="IconDropdown "
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M.343 2L1.757.586 6 4.828 10.243.586 11.657 2 6 7.657.343 2z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <div className="panel-wrapper lg:absolute inset-0 spacer z-0 invisible">
                      {/* Insert NavInternalPanel here */}
                      <div
                        id="target_ddtoggle_3"
                        className="NavInternalPanel w-full lg:shadow px-10 py-8 lg:px-0 lg:py-10 allow-breaks"
                      >
                        <div className="lg:container mx-auto">
                          <div className="lg:grid lg:grid-cols-3 gap-14 gap-y-0 lg:px-12">
                            <div className="repeated-item col-span-full mb-6 lg:mb-4">
                              <a
                                href="#"
                                className="inline-block p-2 -mt-2 -ml-2 -mb-2 "
                              >
                                <span>No Highlights Overview</span>
                              </a>
                            </div>

                            <div className="lg:mt-0 col-span-3 lg:auto-cols-3">
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Nam Cursus</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Pellentesque Iaculis Vel</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>In Bibendum Imperdiet Mauris</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Placerat Lorem</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Maecenas Viverra</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Suspendisse Vestibulum</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Nunc Tincidunt Gravida Vel</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Sed Placerat</span>
                                </a>
                              </div>
                              <div className="NavInternalSection w-full ">
                                <a
                                  href="#"
                                  className="inline-block w-full p-2 pl-0  "
                                >
                                  <span>Donec Feugiat Eu</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End NavInternalPanel */}
                    </div>
                  </li>
                  <li className="">
                    <button
                      className="toggle-NavInternalPanel flex flex-nowrap items-center w-full lg:w-auto"
                      id="ddtoggle_4"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span
                        className="pointer-events-none"
                        data-text="All Highlights"
                      >
                        All Highlights
                      </span>

                      <svg
                        className="IconDropdown "
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M.343 2L1.757.586 6 4.828 10.243.586 11.657 2 6 7.657.343 2z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <div className="panel-wrapper lg:absolute inset-0 spacer z-0 invisible">
                      {/* Insert NavInternalPanel here */}
                      <div
                        id="target_ddtoggle_4"
                        className="NavInternalPanel w-full lg:shadow px-10 py-8 lg:px-0 lg:py-10 allow-breaks"
                      >
                        <div className="lg:container mx-auto">
                          <div className="lg:grid lg:grid-cols-3 gap-14 gap-y-0 lg:px-12">
                            <div className="NavInternalHighlight mb-6 lg:mb-0 lg:w-5/6">
                              <p className="font-normal text-2xl lg:text-xl xl:text-2xl mb-4">
                                Highlight 1
                              </p>
                              <p className="text-sm leading-relaxed mb-4 lg:mb-6">
                                Praesent in eros iaculis, pulvinar est ut,
                                maximus nisl. Vestibulum rutrum accumsan.
                              </p>

                              <a
                                className="block group cursor-hover text-jpl-sky-blue-dark can-hover:hover:jpl-sky-blue font-medium lg:font-normal"
                                href="#"
                                aria-label="Go to Highlight 1"
                              >
                                <div className="hidden lg:block bg-gray-dark relative overflow-hidden">
                                  <div className="BaseImagePlaceholder dark-theme aspect-ratio-sixteen-nine no-logo">
                                    <div>
                                      <img
                                        className="BaseImage can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in transform scale-105 object-cover lazyload"
                                        data-src="http://placekitten.com/512/288?image=12"
                                        data-srcset=""
                                        alt="Alt text"
                                        width="512"
                                        height="288"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <span className="block lg:hidden">
                                  Highlight 1
                                </span>
                              </a>
                            </div>
                            <div className="NavInternalHighlight mb-6 lg:mb-0 lg:w-5/6">
                              <p className="font-normal text-2xl lg:text-xl xl:text-2xl mb-4">
                                Highlight 2
                              </p>
                              <p className="text-sm leading-relaxed mb-4 lg:mb-6">
                                Vivamus rutrum, nibh eu euismod imperdiet, elit
                                ante dapibus risus, ut rutrum.
                              </p>

                              <a
                                className="block group cursor-hover text-jpl-sky-blue-dark can-hover:hover:jpl-sky-blue font-medium lg:font-normal"
                                href="#"
                                aria-label="Go to Highlight 2"
                              >
                                <div className="hidden lg:block bg-gray-dark relative overflow-hidden">
                                  <div className="BaseImagePlaceholder dark-theme aspect-ratio-sixteen-nine no-logo">
                                    <div>
                                      <img
                                        className="BaseImage can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in transform scale-105 object-cover lazyload"
                                        data-src="http://placekitten.com/512/288?image=9"
                                        data-srcset=""
                                        alt="Alt text"
                                        width="512"
                                        height="288"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <span className="block lg:hidden">
                                  Highlight 2
                                </span>
                              </a>
                            </div>
                            <div className="NavInternalHighlight mb-6 lg:mb-0 lg:w-5/6">
                              <p className="font-normal text-2xl lg:text-xl xl:text-2xl mb-4">
                                Highlight 3
                              </p>
                              <p className="text-sm leading-relaxed mb-4 lg:mb-6">
                                Aliquam nisi nisi, iaculis sed iaculis et,
                                rutrum quis orci. Quisque maximus.
                              </p>

                              <a
                                className="block group cursor-hover text-jpl-sky-blue-dark can-hover:hover:jpl-sky-blue font-medium lg:font-normal"
                                href="#"
                                aria-label="Go to Highlight 3"
                              >
                                <div className="hidden lg:block bg-gray-dark relative overflow-hidden">
                                  <div className="BaseImagePlaceholder dark-theme aspect-ratio-sixteen-nine no-logo">
                                    <div>
                                      <img
                                        className="BaseImage can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in transform scale-105 object-cover lazyload"
                                        data-src="http://placekitten.com/512/288?image=8"
                                        data-srcset=""
                                        alt="Alt text"
                                        width="512"
                                        height="288"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <span className="block lg:hidden">
                                  Highlight 3
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End NavInternalPanel */}
                    </div>
                  </li>
                  <li className="">
                    <button
                      className="toggle-NavInternalPanel flex flex-nowrap items-center w-full lg:w-auto"
                      id="ddtoggle_5"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span
                        className="pointer-events-none"
                        data-text="With Headings"
                      >
                        With Headings
                      </span>

                      <svg
                        className="IconDropdown "
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M.343 2L1.757.586 6 4.828 10.243.586 11.657 2 6 7.657.343 2z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <div className="panel-wrapper lg:absolute inset-0 spacer z-0 invisible">
                      {/* Insert NavInternalPanel here */}
                      <div
                        id="target_ddtoggle_5"
                        className="NavInternalPanel w-full lg:shadow px-10 py-8 lg:px-0 lg:py-10 "
                      >
                        <div className="lg:container mx-auto">
                          <div className="lg:grid lg:grid-cols-3 gap-14 gap-y-0 lg:px-12">
                            <div className="lg:mt-0 col-span-3 lg:auto-cols-3">
                              <div className="NavInternalSection w-full has-children">
                                <p className="text-subtitle inline-block w-full p-2 pl-0">
                                  Section A
                                </p>
                                <ul className="group-menu">
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Nam Cursus
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          In Bibendum Imperdiet Mauris
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Placerat Lorem
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Maecenas Viverra
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="NavInternalSection w-full has-children">
                                <p className="text-subtitle inline-block w-full p-2 pl-0">
                                  Section B
                                </p>
                                <ul className="group-menu">
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Suspendisse Vestibulum
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Nunc Tincidunt Gravida Vel
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Pellentesque Iaculis Vel
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Placerat Lorem
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="NavInternalSection w-full has-children">
                                <p className="text-subtitle inline-block w-full p-2 pl-0">
                                  Section C
                                </p>
                                <ul className="group-menu">
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Sed Placerat
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Maecenas Viverra
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End NavInternalPanel */}
                    </div>
                  </li>
                  <li className="">
                    <button
                      className="toggle-NavInternalPanel flex flex-nowrap items-center w-full lg:w-auto"
                      id="ddtoggle_6"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span
                        className="pointer-events-none"
                        data-text="Combination"
                      >
                        Combination
                      </span>

                      <svg
                        className="IconDropdown "
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M.343 2L1.757.586 6 4.828 10.243.586 11.657 2 6 7.657.343 2z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <div className="panel-wrapper lg:absolute inset-0 spacer z-0 invisible">
                      {/* Insert NavInternalPanel here */}
                      <div
                        id="target_ddtoggle_6"
                        className="NavInternalPanel w-full lg:shadow px-10 py-8 lg:px-0 lg:py-10 allow-breaks"
                      >
                        <div className="lg:container mx-auto">
                          <div className="lg:grid lg:grid-cols-3 gap-14 gap-y-0 lg:px-12">
                            <div className="NavInternalHighlight mb-6 lg:mb-0 lg:w-5/6">
                              <p className="font-normal text-2xl lg:text-xl xl:text-2xl mb-4">
                                Highlight
                              </p>
                              <p className="text-sm leading-relaxed mb-4 lg:mb-6">
                                Praesent in eros iaculis, pulvinar est ut,
                                maximus nisl. Vestibulum rutrum accumsan.
                              </p>

                              <a
                                className="block group cursor-hover text-jpl-sky-blue-dark can-hover:hover:jpl-sky-blue font-medium lg:font-normal"
                                href="#"
                                aria-label="Go to Highlight"
                              >
                                <div className="hidden lg:block bg-gray-dark relative overflow-hidden">
                                  <div className="BaseImagePlaceholder dark-theme aspect-ratio-sixteen-nine no-logo">
                                    <div>
                                      <img
                                        className="BaseImage can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in transform scale-105 object-cover lazyload"
                                        data-src="http://placekitten.com/512/288?image=12"
                                        data-srcset=""
                                        alt="Alt text"
                                        width="512"
                                        height="288"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <span className="block lg:hidden">
                                  Highlight
                                </span>
                              </a>
                            </div>

                            <div className="lg:mt-0 mt-6 col-span-2 lg:auto-cols-2">
                              <div className="NavInternalSection w-full has-children">
                                <p className="text-subtitle inline-block w-full p-2 pl-0">
                                  Section A
                                </p>
                                <ul className="group-menu">
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Nam Cursus
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          In Bibendum Imperdiet Mauris
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Placerat Lorem
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Maecenas Viverra
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="NavInternalSection w-full has-children">
                                <p className="text-subtitle inline-block w-full p-2 pl-0">
                                  Section B
                                </p>
                                <ul className="group-menu">
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Suspendisse Vestibulum
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Nunc Tincidunt Gravida Vel
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Pellentesque Iaculis Vel
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Placerat Lorem
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="NavInternalSection w-full has-children">
                                <p className="text-subtitle inline-block w-full p-2 pl-0">
                                  Section C
                                </p>
                                <ul className="group-menu">
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Sed Placerat
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <a
                                        href="#"
                                        target=""
                                        rel=""
                                        className="group cursor-pointer inline-block w-full p-2 pl-0 "
                                      >
                                        <span className="break-words">
                                          Maecenas Viverra
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End NavInternalPanel */}
                    </div>
                  </li>
                  <li className="">
                    <a
                      href="https://www.jpl.nasa.gov/"
                      className="block"
                      target="_blank"
                      rel="noopener"
                    >
                      <span className="inline-block" data-text="External">
                        External
                      </span>
                      <span className="text-xs ml-1">
                        <svg
                          className="IconExternal "
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M7 2v2H2v12h12v-5h2v7H0V2h7zm11-2v8h-2V3.413l-8.243 8.244-1.414-1.414L14.585 2H10V0h8z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="hidden lg:block border-t-3 border-transparent relative z-10">
                  <button
                    id="NavSearchOpen"
                    aria-label="Open search"
                    className="flex flex-nowrap items-center py-6 px-1 border-b-3 can-hover:hover:text-gray-mid-dark focus:border-gray-dark focus:border-opacity-20 focus:outline-none border-transparent"
                  >
                    <span className="font-medium leading-tight pr-2">
                      Search
                    </span>

                    <svg
                      className="IconSearch "
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M8 0a8 8 0 016.096 13.181l5.293 5.294-1.414 1.414-5.357-5.356A8 8 0 118 0zm0 2a6 6 0 100 12A6 6 0 008 2z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                id="NavSearchContainer"
                className="hidden absolute inset-0 bg-white z-10"
              >
                <div className="BaseGrid container mx-auto h-full">
                  <div className="indent-col-base indent-col-2 px-4">
                    <div className="flex flex-row items-center h-full pb-2">
                      <form
                        id="NavDesktopSearchForm"
                        action="#"
                        method="get"
                        className="flex-grow"
                      >
                        <div className="SearchInput group relative flex items-center ">
                          <div className="absolute inset-0 flex items-center">
                            <span className="relative z-20 ml-6 text-xl text-black">
                              <svg
                                className="IconSearch "
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path
                                  d="M8 0a8 8 0 016.096 13.181l5.293 5.294-1.414 1.414-5.357-5.356A8 8 0 118 0zm0 2a6 6 0 100 12A6 6 0 008 2z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </div>

                          <div className="compact ml-14 h-2px absolute inset-x-0 bottom-0 overflow-hidden text-lg text-transparent">
                            <span className="border-jpl-red-light absolute z-20 h-0 border-b-2 select-none">
                              {/* TODO: auto-update with input value using javascript */}
                            </span>
                            <span className="border-black absolute inset-x-0 z-10 h-0 border-b-2 border-opacity-50 select-none"></span>
                          </div>

                          <input
                            id="NavSearchInput"
                            name="query"
                            className="pl-14 border-none relative z-10 w-full pr-5 text-lg text-gray-dark bg-transparent focus:outline-none py-1 focus:ring-transparent"
                            type="search"
                            aria-label="Query"
                            placeholder="Search this site&hellip;"
                          />
                          <input hidden type="submit" value="Search" />
                        </div>
                      </form>
                      <button
                        id="NavSearchClose"
                        aria-label="Close search"
                        className="flex flex-nowrap flex-shrink-0 items-center p-2 text-black text-xs focus:outline-none focus:ring-2"
                      >
                        <svg
                          className="IconClose "
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
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="bg-white fixed inset-0 lg:hidden z-0"></div>
      </header>
    </>
  );
};
