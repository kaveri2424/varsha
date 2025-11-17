import { Users, BookOpen, Award, Building2 } from 'lucide-react';

const stats = [
  { icon: Users, value: '2M+', label: 'Active Learners' },
  { icon: BookOpen, value: '1000+', label: 'Expert Courses' },
  { icon: Award, value: '500K+', label: 'Certifications Awarded' },
  { icon: Building2, value: '2000+', label: 'Corporate Clients' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <Icon className="h-10 w-10 text-blue-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
