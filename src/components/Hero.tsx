import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
              #1 Online Learning Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Advance Your Career with Industry-Leading Certifications
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Learn from industry experts and earn globally recognized certifications in Data Science, AI, Cloud Computing, Cyber Security, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:border-blue-600 hover:text-blue-600 transition-colors font-medium flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">2M+</div>
                <div className="text-sm text-gray-600">Learners Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Expert Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">85%</div>
                <div className="text-sm text-gray-600">Career Advancement</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="h-8 w-8 text-blue-600 ml-1" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div className="ml-3">
                  <div className="text-sm font-semibold text-gray-900">Course Completed</div>
                  <div className="text-xs text-gray-500">98% Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
