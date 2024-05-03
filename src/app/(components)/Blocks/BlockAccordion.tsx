interface BlockAccordionProps {
  question: string;
  answer: string;
}

export const BlockAccordion = ({ question, answer }: BlockAccordionProps) => {
  return (
    <div id="storyRoot" className="mx-auto container">
      <div className="BlockAccordion" data-allow-multiple>
        <div className="border-b border-gray-light-mid">
          <h2 className="text-body-lg">
            <button
              aria-expanded="false"
              className="BlockAccordion-trigger group flex flex-nowrap justify-between items-center w-full p-4 xl:py-6 can-hover:hover:underline focus:outline-none focus:underline"
              aria-controls="item_panel_group_id_accordion1_item1"
              id="item_heading_group_id_accordion1_item1"
            >
              <span className="pointer-events-none text-left pr-4">
                {question}
              </span>

              <span className="BlockAccordion-icon pointer-events-none flex-shrink-0 text-xs text-theme-color transform transition-transform">
                <svg
                  className="IconPlus "
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M7 0v5h5v2H7v5H5V7H0V5h5V0h2z" fill="currentColor" />
                </svg>
              </span>
            </button>
          </h2>

          <div
            id="item_panel_group_id_accordion1_item1"
            role="region"
            aria-labelledby="item_heading_group_id_accordion1_item1"
            className="BlockAccordion-panel"
            hidden
          >
            <div className="px-4 pb-8">
              {/* <!-- insert components here. BlockText used as an example below --> */}
              <div className="BlockText text-body-sm">{answer}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
