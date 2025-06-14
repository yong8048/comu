const categories = [
  { name: 'Study', gradient: 'from-blue-500 to-blue-700' },
  { name: 'Chill', gradient: 'from-pink-400 to-purple-400' },
  { name: 'Cozy', gradient: 'from-orange-300 to-orange-500' },
];

export default function PlaylistCategory() {
  return (
    <div className="flex gap-4 mt-4 h-30">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className={`w-30 h-30 rounded-xl flex items-center justify-center text-3xl font-cursive text-white bg-gradient-to-br ${cat.gradient} shadow-lg`}>
          {cat.name}
        </div>
      ))}
    </div>
  );
}
