import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join millions of learners worldwide and get access to expert-led courses,
          industry certifications, and career support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center">
            Start Learning Today <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-blue-600 transition-colors font-semibold">
            Talk to an Advisor
          </button>
        </div>
        <p className="text-blue-100 mt-6 text-sm">
          Free trial available • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
