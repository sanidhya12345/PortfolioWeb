import React from 'react';
import { Shield, Globe, Award } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8 text-emerald-600" />,
    title: 'Quality Guaranteed',
    description: 'We stand behind every product with our lifetime quality guarantee.',
  },
  {
    icon: <Globe className="w-8 h-8 text-emerald-600" />,
    title: 'Sustainable Materials',
    description: 'Our gear is designed with eco-friendly materials and practices.',
  },
  {
    icon: <Award className="w-8 h-8 text-emerald-600" />,
    title: 'Expert Tested',
    description: 'Every product is field-tested by outdoor professionals.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4555526/pexels-photo-4555526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About Mountain Trek" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emerald-100 rounded-lg -z-10"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-amber-100 rounded-lg -z-10"></div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2005 by a group of passionate outdoor enthusiasts, Mountain Trek was born from 
              a simple belief: outdoor gear should be as reliable as it is functional.
            </p>
            <p className="text-gray-600 mb-8">
              What started as a small workshop in the foothills of the mountains has grown into a 
              trusted brand for adventurers worldwide. Our mission remains unchanged: to create 
              high-quality gear that enhances your outdoor experience, lets you connect with nature, 
              and stands the test of time.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-md transition-all transform hover:scale-105">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;