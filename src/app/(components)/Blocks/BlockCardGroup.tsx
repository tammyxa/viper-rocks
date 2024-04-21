import React from "react";
import { BlockCard } from "./BlockCard";
import { Person } from "@/types";

interface BlockCardGroupProps {
  cards: Person[];
}

export const BlockCardGroup = ({ cards }: BlockCardGroupProps) => {
  return (
    <div id="storyRoot" className="lg:container max-w-screen-3xl mx-auto">
      <div className="BlockCardGroup">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 hidden gap-8">
          {cards.map((card, i) => (
            <BlockCard
              key={i}
              title={card.title}
              name={card.name}
              text={card.text}
              img={card.img}
            />
          ))}
          <div
            className="MixinCarousel w-full overflow-x-hidden -tiles md:hidden sm:px-10 sm:-ml-10 py-10 -mt-10"
            aria-label=""
          >
            <div className="BaseGrid container overflow-x-visible mx-auto">
              <div className="lg:pl-0 sm:col-end-11 3xl:col-end-12 col-start-1 col-end-13 pl-4 overflow-x-visible  ">
                {/* <!-- Slider main container --> */}
                <div className="swiper transition-opacity duration-500 ease-in opacity-0">
                  {/* <!-- Additional required wrapper --> */}
                  <div className="swiper-wrapper">
                    <div className="shadow-jpl relative h-full swiper-slide md:mb-0 mb-5 ">
                      <div className="h-auto">
                        <div>
                          <div className="BaseImagePlaceholder dark-theme aspect-ratio-sixteen-nine ">
                            <div>
                              <img
                                className="BaseImage  object-cover lazyload"
                                data-src="https://picsum.photos/800/400"
                                data-srcset="https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w"
                                alt="Fourth image"
                                width="800"
                                height="400"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-6 py-6">
                        <div className="text-jpl-red text-subtitle">
                          Factoid 1
                        </div>
                        <hr
                          aria-hidden="true"
                          className="bg-jpl-red text-jpl-red w-8 h-2px border-0 my-2"
                        />
                        <h3 className="mt-4 mb-2 text-h5">Nimble Limbs</h3>
                        <p className="text-body-sm">
                          The robot has four limbs, each with seven degrees of
                          freedom. The robot has four limbs, each with seven
                          degrees of freedom. The robot has four limbs, each
                          with seven degrees of freedom.
                        </p>
                      </div>
                    </div>

                    <div className="shadow-jpl relative h-full swiper-slide md:mb-0 mb-5 ">
                      <div className="h-auto">
                        <div>
                          <div className="BaseImagePlaceholder dark-theme aspect-ratio-sixteen-nine ">
                            <div>
                              <img
                                className="BaseImage  object-cover lazyload"
                                data-src="https://picsum.photos/800/400"
                                data-srcset="https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w"
                                alt="Fourth image"
                                width="800"
                                height="400"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-6 py-6">
                        <div className="text-jpl-red text-subtitle">
                          Factoid 2
                        </div>
                        <hr
                          aria-hidden="true"
                          className="bg-jpl-red text-jpl-red w-8 h-2px border-0 my-2"
                        />
                        <h3 className="mt-4 mb-2 text-h5">Nimble Limbs</h3>
                        <p className="text-body-sm">
                          The robot has four limbs, each with seven degrees of
                          freedom.
                        </p>
                      </div>
                    </div>

                    <div className="shadow-jpl relative h-full swiper-slide md:mb-0 mb-5 flex items-center min-h-32">
                      <div className="px-6 py-6">
                        <div className="text-jpl-red text-subtitle">
                          Factoid 3
                        </div>
                        <hr
                          aria-hidden="true"
                          className="bg-jpl-red text-jpl-red w-8 h-2px border-0 my-2"
                        />
                        <h3 className="mt-4 mb-2 text-h5">Nimble Limbs</h3>
                        <p className="text-body-sm">
                          Proin sapien nulla, consequat et aliquam tristique,
                          sollicitudin vitae lorem. Etiam nec vestibulum ante,
                          semper blandit tortor. Nam id bibendum leo.
                          Suspendisse a cursus felis, eget tristique nibh. Proin
                          facilisis tortor eget pulvinar cursus.
                        </p>
                      </div>
                    </div>

                    <div className="shadow-jpl relative h-full swiper-slide md:mb-0 mb-5 ">
                      <div className="h-auto">
                        <div>
                          <div className="BaseImagePlaceholder dark-theme aspect-ratio-sixteen-nine ">
                            <div>
                              <img
                                className="BaseImage  object-cover lazyload"
                                data-src="https://picsum.photos/800/400"
                                data-srcset="https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w"
                                alt="Fourth image"
                                width="800"
                                height="400"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-6 py-6">
                        <div className="text-jpl-red text-subtitle">
                          Factoid 4
                        </div>
                        <hr
                          aria-hidden="true"
                          className="bg-jpl-red text-jpl-red w-8 h-2px border-0 my-2"
                        />
                        <h3 className="mt-4 mb-2 text-h5">Nimble Limbs</h3>
                        <p className="text-body-sm">
                          The robot has four limbs, each with seven degrees of
                          freedom.
                        </p>
                      </div>
                    </div>

                    <div className="shadow-jpl relative h-full swiper-slide md:mb-0 mb-5 flex items-center min-h-32">
                      <div className="px-6 py-6">
                        <div className="text-jpl-red text-subtitle">
                          Factoid 5
                        </div>
                        <hr
                          aria-hidden="true"
                          className="bg-jpl-red text-jpl-red w-8 h-2px border-0 my-2"
                        />
                        <h3 className="mt-4 mb-2 text-h5">Nimble Limbs</h3>
                        <p className="text-body-sm">
                          The robot has four limbs, each with seven degrees of
                          freedom.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-navigation xl:block absolute top-0 left-0 hidden w-full">
                    <div className="xl:-ml-22 top-1/2 absolute left-0 z-30 -ml-20">
                      <button
                        aria-label=" - Previous slide"
                        className="BaseButton text-contrast-none swiper-prev xl:text-xl -primary -icon-only inline-block"
                      >
                        <span className="label block">
                          <span className="arrow-wrapper" aria-hidden="true">
                            <span className="arrow">
                              <svg viewBox="0 0 50 50" className="IconPrev ">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M29 13.686l1.414 1.415-9.9 9.899 9.9 9.9L29 36.313 17.686 25 29 13.686z"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  focusable="false"
                                />
                              </svg>
                            </span>
                            <span className="arrow-fixed">
                              <svg viewBox="0 0 50 50" className="IconPrev ">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M29 13.686l1.414 1.415-9.9 9.899 9.9 9.9L29 36.313 17.686 25 29 13.686z"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  focusable="false"
                                />
                              </svg>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>

                    <div className="xl:-mr-22 top-1/2 absolute right-0 z-30 -mr-20">
                      <button
                        aria-label=" - Next slide"
                        className="BaseButton text-contrast-none swiper-next xl:text-xl -primary -icon-only inline-block"
                      >
                        <span className="label block">
                          <span className="arrow-wrapper" aria-hidden="true">
                            <span className="arrow">
                              <svg viewBox="0 0 50 50" className="IconNext ">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M21 36.314l-1.414-1.415 9.9-9.899-9.9-9.9L21 13.687 32.314 25 21 36.314z"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  focusable="false"
                                />
                              </svg>
                            </span>
                            <span className="arrow-fixed">
                              <svg viewBox="0 0 50 50" className="IconNext ">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M21 36.314l-1.414-1.415 9.9-9.899-9.9-9.9L21 13.687 32.314 25 21 36.314z"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  focusable="false"
                                />
                              </svg>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
