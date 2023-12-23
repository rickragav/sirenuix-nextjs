function Button({ title }) {
  return (
    <button className="mx-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full">
      <span className="font-medium text-black text-xl">{title}</span>
    </button>
  );
}

export default Button;
