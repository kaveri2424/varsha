import { Star, Clock, Users, Award } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Data Science Bootcamp',
    instructor: 'Dr. Sarah Johnson',
    rating: 4.8,
    students: 15420,
    duration: '12 weeks',
    level: 'Intermediate',
    price: 499,
    image: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: 'AWS Cloud Practitioner',
    instructor: 'Michael Chen',
    rating: 4.9,
    students: 22310,
    duration: '8 weeks',
    level: 'Beginner',
    price: 399,
    image: 'bg-gradient-to-br from-orange-400 to-orange-600',
  },
  {
    id: 3,
    title: 'Cyber Security Expert',
    instructor: 'James Martinez',
    rating: 4.7,
    students: 8950,
    duration: '16 weeks',
    level: 'Advanced',
    price: 699,
    image: 'bg-gradient-to-br from-red-400 to-red-600',
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    instructor: 'Dr. Emily White',
    rating: 4.9,
    students: 18730,
    duration: '20 weeks',
    level: 'Advanced',
    price: 799,
    image: 'bg-gradient-to-br from-green-400 to-green-600',
  },
];

export default function Courses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending Courses
            </h2>
            <p className="text-lg text-gray-600">
              Most popular courses chosen by learners this month
            </p>
          </div>
          <button className="hidden md:block text-blue-600 font-medium hover:text-blue-700 transition-colors">
            View All Courses →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className={`${course.image} h-40 flex items-center justify-center relative`}>
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                  {course.level}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    {course.rating}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    Certificate
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
            View All Courses →
          </button>
        </div>
      </div>
    </section>
  );
}
