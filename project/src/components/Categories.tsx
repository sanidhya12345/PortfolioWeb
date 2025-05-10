import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Hiking Gear',
    image: 'https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Everything you need for the trails',
  },
  {
    id: 2,
    title: 'Camp Essentials',
    image: 'https://images.pexels.com/photos/6271614/pexels-photo-6271614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Comfort for your outdoor home',
  },
  {
    id: 3,
    title: 'Climbing Equipment',
    image: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Reach new heights safely',
  },
  {
    id: 4,
    title: 'Winter Sports',
    image: 'https://images.pexels.com/photos/848681/pexels-photo-848681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Gear for snow adventures',
  },
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect gear for every adventure, whether you're scaling mountains,
            camping under the stars, or hitting the slopes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-80"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-y-0 transition-transform duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-200 mb-4 text-sm">
                  {category.description}
                </p>
                <button className="text-amber-300 group-hover:text-amber-400 font-medium flex items-center transition-all">
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;