import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rachel Anderson',
    role: 'Data Scientist at Google',
    content: 'SimpliLearn helped me transition from marketing to data science. The courses are comprehensive and the instructors are top-notch. Got my dream job within 3 months of completing the program!',
    rating: 5,
    image: 'bg-gradient-to-br from-pink-400 to-pink-600',
  },
  {
    id: 2,
    name: 'David Kim',
    role: 'Cloud Architect at Amazon',
    content: 'The AWS certification course was exactly what I needed. The hands-on labs and real-world projects gave me the confidence to ace the exam and advance in my career.',
    rating: 5,
    image: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Cybersecurity Analyst at Microsoft',
    content: 'Outstanding quality of content and teaching. The career support team helped me polish my resume and prepare for interviews. Highly recommend to anyone looking to upskill!',
    rating: 5,
    image: 'bg-gradient-to-br from-green-400 to-green-600',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of professionals who transformed their careers with SimpliLearn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-xl">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center">
                <div className={`${testimonial.image} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
