import Box from '../components/box';
import MainBox from '../components/main-box';

export default function Main() {
  return (
    <main className="block md:flex gap-[2%] h-full md:h-[75vh] mt-[2.5%]">
      <MainBox
        height="h-[450px] md:h-[100%]"
        width="w-full md:w-[50%]"
        bgColor="bg-gray-800"
        textColor="text-white"
        mainText="There is something else for you"
        subText="MORE OFFERS"
        btnBgColor="bg-gray-200"
        btnTextColor="text-black"
        btnSVG="/icons/box-icons/arrow-top-right-black.svg"
        btnMainText="All products"
        btnSubText="SHOP"
      />
      <div className="w-full md:w-1/2 h-[450px] md:h-full mt-4 md:mt-0 flex flex-col gap-[4%]">
        <Box
          height="h-[50%]"
          width="w-[100%]"
          backgroundColor="bg-gray-200"
          fontColor="text-black"
          mainText="View our blog"
          subText="WORLD OF HEARING TECHNOLOGY"
          iconSVG="/icons/box-icons/arrow-top-right-black.svg"
        />
        <div className="flex gap-[4%] h-1/2">
          <Box
            height="h-[100%]"
            width="w-[50%]"
            backgroundColor="bg-purple-400"
            fontColor="text-white"
            mainText="About us"
            subText="DISCOVER OUR HISTORY"
            iconSVG="/icons/box-icons/arrow-top-right-white.svg"
          />
          <Box
            height="h-[100%]"
            width="w-[50%]"
            backgroundColor="bg-lime-400"
            fontColor="text-black"
            mainText="Contact us"
            subText="HAVE SOME QUESTIONS?"
            iconSVG="/icons/box-icons/arrow-top-right-black.svg"
          />
        </div>
      </div>
    </main>
  );
}