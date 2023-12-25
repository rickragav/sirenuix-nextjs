function DownloadButton({ title, titleClass, price }) {
  return (
    <button className="px-4 py-2  space-x-2 justify-center items-center  inline-flex  rounded-xl border dark:border-secondary-dark sm:rounded-full dark:text-gray-400 dark:bg-[#2d68ff]">
      <span
        className={`text-white font-neue font-general-regular ${titleClass}`}
      >{`${title}`}</span>
      <span
        className={`text-white font-neue font-general-regular ${titleClass}`}
      >{`$${price}`}</span>
    </button>
  );
}
export default DownloadButton;
