const categories = [
  { name: "Coding", gradient: "from-blue-200 to-blue-900" },
  { name: "Chill", gradient: "from-pink-400 to-purple-800" },
  { name: "Study", gradient: "from-orange-300 to-orange-800" },
];

export default function PlaylistCategory() {
  return (
    <div className="flex gap-4 pb-4 h-[22vh] overflow-x-auto pl-2 ">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className={`hover:cursor-pointer min-w-[150px] h-[20vh] rounded-xl flex items-center justify-center text-2xl font-cursive text-white bg-gradient-to-br ${cat.gradient} shadow-lg`}
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
}
