const ProjectRow = ({ title, category, year, index }) => {
  return (
    <div className="group relative border-t border-black/10 py-12 transition-colors hover:bg-gray-50 cursor-pointer w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-baseline gap-4 z-10 relative">
        <span className="text-sm font-mono text-gray-400 transition-colors group-hover:text-black">0{index + 1}</span>
        <h3 className="text-4xl md:text-6xl font-medium text-[#111] tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">
          {title}
        </h3>
        <div className="flex items-center gap-8 md:ml-auto">
          <span className="text-lg text-gray-500 font-light hidden md:block group-hover:text-black transition-colors">{category}</span>
          <span className="text-sm font-mono text-gray-400 group-hover:text-black transition-colors">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
