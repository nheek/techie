export default function MainBox({
  height, width, bgColor, textColor,
  mainText, subText,
  btnBgColor, btnTextColor, btnSVG, btnMainText, btnSubText
}) {
  return (
    <div className={`${height} ${width} ${bgColor} ${textColor} rounded-[2rem] p-6 md:p-10 relative text-gray-300`}>
      <span className="text-xs">{subText}</span>
      <h2 className="text-5xl w-[80%] leading-tight">{mainText}</h2>
      <button className={`${btnBgColor} ${btnTextColor} absolute bottom-[5%] w-[40%] rounded-xl py-1 px-2`}>
        <div className="flex items-center">
          <div className="w-[70%] ml-3">
            <span className="block text-[0.5rem] text-left opacity-50">{btnSubText}</span>
            <span className="block text-sm text-left">{btnMainText}</span>
          </div>
          <img className="w-[30%]" src={btnSVG} alt="icon" />
        </div>
      </button>
    </div>
  );
};