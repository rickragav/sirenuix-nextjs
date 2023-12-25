function PrimaryButton({ title, titleClass, price }) {
  return (
    <button className={`font-neue px-4 py-2 justify-center inline-flex   rounded-xl border dark:border-secondary-dark sm:rounded-full dark:text-gray-400 dark:bg-secondary-dark`}>
      <span
        className={` hover:text-primary-light font-neue font-general-regular ${titleClass}`}
      >{`${title}`}</span>
    </button>
  );
}
export default PrimaryButton;
