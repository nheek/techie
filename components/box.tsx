const Box = ({ height, width, backgroundColor, fontColor, mainText, subText, iconSVG }) => {
  return (
    <div className={`${height} ${width} ${backgroundColor} ${fontColor} rounded-[2rem] p-6 relative cursor-pointer`}>
      <div className="flex relative">
        <span className="text-xs w-[23%]">{subText}</span>
        <img className="h-[40px] absolute right-0" src={iconSVG} alt="icon" />
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl absolute bottom-[5%]">{mainText}</h2>
    </div>
  );
};

export default Box;