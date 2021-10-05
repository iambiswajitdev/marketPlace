// Add all of your components design and variations here

// ----------
// Item Card
// ----------
export const ItemCardBase =
  "w-full bg-white p-3 flex flex-col item-start cursor-pointer h-80 rounded-lg";
export const ItemCardImage =
  "my-2 flex justify-center text-left w-full rounded h- overflow-hidden h-60 bg-contain bg-no-repeat bg-center";
export const ItemCardContent = "w-full flex flex-col items-center ";
export const ItemCardHead = "font-medium text-gray-600";
export const ItemCardPrice = "font-semibold";
export const ItemCardStars = "pb-1";
export const ItemCardRatings = "text-xs pl-2 pb-1 font-medium text-gray-600";

// ----------
// Item Card2
// ----------
export const ItemCardBase2 =
  "h-32 w-full bg-gray-100 rounded-lg flex flex-row p-3 cursor-pointer";
export const ItemCardImage2 = "w-1/3 h-full bg-center bg-contain bg-no-repeat";
export const ItemCardContent2 = "w-2/3 pl-2 my-auto";

// --------
// Carousel Button
// --------
export const CarouselButtonLeft =
  "absolute bg-dodger-blue-500 rounded-full text-white shadow-xl hover:bg-white hover:text-dodger-blue-500 focus:outline-none border border-dodger-blue-500";
export const CarouselButtonRight =
  "absolute bg-dodger-blue-500 right-0 rounded-full text-white shadow-xl hover:bg-white hover:text-dodger-blue-500 focus:outline-none border border-dodger-blue-500";
// --------
// Feature
// --------
export const FeatureBase =
  "feature-block flex w-full items-start flex-row rounded-xl bg-cover bg-no-repeat bg-right shadow-lg px-8 h-auto ";
export const FeatureText = "flex flex-col flex-wrap w-1/2 h-36";
export const FeatureHeading = "text-lg font-semibold text-white";
export const FeatureContent = "text-2xl font-bold text-white py-2";
export const FeatureButton =
  "text-base font-semibold text-white uppercase hover:text-gray-500 w-3/4 cursor-pointer ";
// export const FeatureTitle = "w-full text-18px font-semibold text-gray-900 mt-0 mb-2 font-poppins";
// export const FeatureDetails = "w-full leading-6 text-14px";

// --------
// Popular Brands
// --------
export const PopularBrandBase = "w-36 h-48";
export const PopularBrandImg = "h-36 rounded-full";
export const PopularBrandTitle =
  "text-center font-medium text-lg text-gray-700 py-4 uppercase";

// -------
// Button
// -------
export const ButtonBase =
  "flex items-center justify-center flex-shrink-0 font-normal w-auto uppercase rounded outline-none transition duration-250 ease-in-out focus:outline-none bg-dodger-blue hover:bg-dodger-blue-700";
export const ButtonVariant = {
  // primary: 'text-white bg-primary hover:bg-primary-hover',
  primary: "text-white buttonMain",
  secondary: "text-white bg-gray-900 hover:bg-gray-900",
  elevation: "text-white bg-gray-900 hover:bg-gray-900 shadow-upside",
};
export const ButtonDisable =
  "text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300";
export const ButtonSize = {
  big: "h-12 px-5",
  normal: "h-11 px-3",
  small: "h-9 text-12 px-4",
};

export const ButtonBase2 =
  "transition duration-200 cursor-pointer text-xs font-normal rounded text-gray-500 hover:bg-gray-200 w-full py-2 focus:outline-none ";
// "transition duration-200 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset";

// ---------------
// Call To Action
// ---------------
export const CTABase =
  // "w-full flex flex-col items-start px-30px py-45px bg-cover bg-center bg-no-repeat bg-gray-100 border border-gray-300 rounded overflow-hidden relative xxl:py-60px xxl:px-80px";
  "w-full flex flex-row bg-dodger-blue-400 xxl:px-10 xl:px-10 lg:px-12 md:px-10 px-5 py-8 rounded-lg flex-wrap";

export const CTAContent =
  "flex flex-col items-center lg:items-start relative z-10 w-full lg:max-w-half";

// ------------
// Icon Button
// ------------
export const IconBtnBase =
  "flex items-center justify-center outline-none transition-colors duration-250 ease-in-out";

// --------
// Counter
// --------
export const CounterBase =
  "group flex items-center justify-between flex-shrink-0 rounded overflow-hidden bg-gray-900 shadow-floatingUp";

export const CounterValue =
  "font-semibold text-13px text-white flex items-center justify-center h-full w-40px transition-colors duration-250 ease-in-out cursor-default";

export const CounterSize = {
  big: "h-12",
  normal: "h-35px",
};

// -----------------
// Input & Textarea
// -----------------
export const TextBoxCommonBase =
  "w-full h-12 px-4 placeholder-gray-500 border border-transparent rounded outline-none transition duration-200";

export const TextBoxDisable =
  "text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300 hover:border-transparent focus:border-transparent focus:placeholder-gray-500";

export const TextBoxEnable =
  "text-gray-900 bg-gray-f7 focus:placeholder-gray-900";

export const InputBase = "h-12 px-4 bg-gray-200";

export const TextareaBase = "h-120px p-4 resize-none";

// ----------
// Cart Item
// ----------
export const CartItemBase =
  "w-full h-auto flex justify-start bg-white items-center px-30px py-6 border-b border-gray-200 relative last:border-b-0";

export const CartItemImage =
  "flex w-105px h-105px rounded overflow-hidden bg-gray-200 mr-15px flex-shrink-0";

export const CartItemContent = "flex flex-col w-full px-15px";

export const CartItemName = "text-14px text-gray-900 font-poppins";

export const CartItemSinglePrice = "text-13px text-gray-500 mt-5px mb-10px";

export const CartItemTotalWrapper = "flex items-center justify-between";

export const CartItemTotalPrice =
  "font-semibold text-16px text-gray-900 flex-shrink-0 font-poppins";

// ----------
// SearchBox
// ----------
export const SearchBase =
  "flex items-center justify-center w-full lg:max-w-screen-md rounded relative overflow-hidden";

export const SearchIconWrapper =
  "absolute top-0 left-0 flex items-center justify-center h-full w-50px";

export const SearchInput =
  "w-full h-12 pl-12 px-4 text-gray-900 placeholder-gray-500 bg-gray-f7 border-2 border-transparent rounded outline-none transition duration-200 hover:border-gray-400 focus:border-black focus:placeholder-gray-900";

// --------------
// Section Title
// --------------
export const SectionTitleBase = "flex flex-col items-center";

export const SectionTitleHeading =
  "flex justify-center text-21px font-semibold text-center mb-2 text-gray-900 xxl:text-24px xxl:mb-10px";

export const SectionTitleSubTitle =
  "flex justify-center text-left xxl:text-center";

// -----------------------
// Section Title with Bar
// -----------------------
export const SectionTitleBarBase = "flex flex-col items-start relative pl-8";

export const SectionTitleBar =
  "flex w-5px h-full bg-primary absolute top-0 left-0";

export const SectionTitleBarHeading =
  "flex justify-start text-21px font-semibold text-left mb-2 text-gray-900 xxl:text-24px xxl:font-semibold xxl:mb-3";

export const SectionTitleBarSubTitle = "flex justify-start text-left";

// ---------
// Carousel
// ---------
export const ButtonGroupBase = "flex items-center absolute top-half w-full";

export const ArrowButtonBase =
  "w-30px h-30px flex items-center justify-center rounded-full text-gray-00 bg-white shadow-navigation absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none";

export const PrevButtonRadius = "left-0 ml-35px ";

export const ArrowButtonBaseMC =
  "w-30px h-30px flex items-center justify-center rounded-full text-white bg-black absolute transition duration-250 hover:text-white focus:outline-none";

export const NextButtonRadius = "right-0 mr-35px ";

export const ActiveDotsBase = "w-6 bg-primary";

export const CarouselItemBase =
  "overflow-hidden w-full flex rounded overflow-hidden";

export const CarouselItemImage = "w-full h-full object-cover";

// ------------
// Testimonial
// ------------
export const TestimonialPrevButtonRadius = "left-0 ml-10px lg:ml-35px";

export const TestimonialNextButtonRadius = "right-0 mr-10px lg:mr-35px";

export const TestimonialBase =
  "w-full bg-white flex flex-col rounded border border-gray-300 p-40px lg:p-50px pt-30px";

export const QuoteBase = "text-gray-200 flex justify-center mb-30px";

export const TestimonialReview =
  "text-16px text-gray-700 font-normal text-center mb-30px leading-7";

export const TestimonialReviewerBase = "flex items-center justify-center";

export const TestimonialItemImageBase =
  "overflow-hidden w-40px h-40px mr-15px bg-gray-100 flex rounded-full overflow-hidden shadow-floatingUp";

export const ReviewerName = "text-16px text-gray-900 font-semibold text-center";
