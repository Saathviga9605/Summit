import Image from 'next/image';
import { FC } from 'react';

interface Organiser {
  id: number;
  name: string;
  designation: string;
  photo: string;
}

interface OrganisersSectionProps {
  // You can add props here if needed
}

const Organisers: FC<OrganisersSectionProps> = () => {
  const organisers: Organiser[] = [
    // {
    //   id: 1,
    //   name: 'Dr. S. Radha',
    //   designation: 'Principal, SSN College of Engineering',
    //   photo: '/images/organisers/principal.jpg',
    // },
    {
      id: 2,
      name: 'Dr. A. Shahina',
      designation: 'Head, Department of Information Technology',
      photo: '/images/hod.jpg',
    },
    {
      id: 3,
      name: 'Dr. I. Joe Louis Paul',
      designation: 'Associate Professor, Department of Information Technology',
      photo: '/images/joe.jpg',
    },
    {
      id: 4,
      name: 'Dr. S. Karthika',
      designation: 'Associate Professor, Department of Information Technology',
      photo: '/images/karthika.webp',
    },
    {
      id: 5,
      name: 'Dr. Arige Sumanth',
      designation: 'Assistant Professor, Department of Information Technology',
      photo: '/images/sumanth.jpg',
    },
    // {
    //   id: 6,
    //   name: 'Dr. B. Bharathi',
    //   designation: 'Professor & Event Coordinator',
    //   photo: '/images/organisers/coordinator.jpg',
    // },
    // {
    //   id: 7,
    //   name: 'Dr. S. Hariharan',
    //   designation: 'Associate Professor, AI & ML',
    //   photo: '/images/organisers/faculty1.jpg',
    // },
    // {
    //   id: 8,
    //   name: 'Dr. M. Vijayalakshmi',
    //   designation: 'Associate Professor, Research Head',
    //   photo: '/images/organisers/faculty2.jpg',
    // },
  ];

  return (
    <section id="organisers" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Organisers
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team behind AIAH 2026
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {organisers.map((organiser) => (
            <div
              key={organiser.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Photo Container */}
              <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                {organiser.photo ? (
                  <Image
                    src={organiser.photo}
                    alt={organiser.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={organiser.id <= 3} // Prioritize loading first few images
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-slate-400 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Info Container */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {organiser.name}
                </h3>
                <p className="text-sm text-gray-600 leading-tight">
                  {organiser.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our organizing committee brings together expertise from academia and industry to create 
            an exceptional experience for all participants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Organisers;
