export const Navbar = () => {
  return (
    <nav className="z-50 sticky top-0 flex justify-between bg-background px-8 py-6 shadow-2xl">
      <div className="flex items-center justify-center">
        <picture>
          <img
            src="src/assets/Home/ReWork.png"
            className="aspect-auto w-56"
            alt="ReWork"
          />
        </picture>
      </div>
      <div className="flex items-center justify-center">
        <button>
          <img
            src="src/assets/menuh/menuhamburguesa.svg"
            alt="Menu hamburguesa"
            className="size-16"
          />
        </button>
      </div>
    </nav>
  );
}
  
