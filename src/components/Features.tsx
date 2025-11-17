import { BookOpen, Users, Award, Trophy, Video, Clock } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Expert-Led Courses',
    description: 'Learn from industry leaders with real-world experience and proven track records.',
  },
  {
    icon: Award,
    title: 'Industry Certifications',
    description: 'Earn globally recognized certificates that boost your career prospects.',
  },
  {
    icon: Video,
    title: 'Live Classes',
    description: 'Attend interactive live sessions and get your doubts cleared in real-time.',
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Join a community of learners and work on projects together.',
  },
  {
    icon: Clock,
    title: 'Lifetime Access',
    description: 'Access course materials anytime, anywhere, and learn at your own pace.',
  },
  {
    icon: Trophy,
    title: 'Career Support',
    description: 'Get resume reviews, interview prep, and career guidance from experts.',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SimpliLearn?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most comprehensive learning platform designed for career success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
