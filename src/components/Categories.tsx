import { Database, Cloud, Shield, TrendingUp, Smartphone, BarChart3 } from 'lucide-react';

const categories = [
  { name: 'Data Science', icon: Database, courses: 250, color: 'bg-blue-500' },
  { name: 'Cloud Computing', icon: Cloud, courses: 180, color: 'bg-cyan-500' },
  { name: 'Cyber Security', icon: Shield, courses: 150, color: 'bg-red-500' },
  { name: 'Digital Marketing', icon: TrendingUp, courses: 120, color: 'bg-green-500' },
  { name: 'Mobile Development', icon: Smartphone, courses: 95, color: 'bg-orange-500' },
  { name: 'Business Analytics', icon: BarChart3, courses: 110, color: 'bg-yellow-500' },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Top Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from over 1,000 courses across multiple domains and advance your career
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.courses} Courses</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
