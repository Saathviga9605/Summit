import Image from 'next/image';
import { FC } from 'react';

interface Coordinator {
  id: number;
  name: string;
  role: string;
  department: string;
  year: string;
  photo: string;
}

interface StudentCoordinatorsProps {
  // You can add props here if needed
}

const StudentCoordinators: FC<StudentCoordinatorsProps> = () => {
  const coordinators: Coordinator[] = [
    {
      id: 1,
      name: 'Student Coordinator 1',
      role: 'Lead Coordinator',
      department: 'Department of Information Technology',
      year: 'Third Year',
      photo: '/images/coordinators/coordinator1.jpg',
    },
    {
      id: 2,
      name: 'Student Coordinator 2',
      role: 'Technical Coordinator',
      department: 'Department of Information Technology',
      year: 'Third Year',
      photo: '/images/coordinators/coordinator2.jpg',
    },
    {
      id: 3,
      name: 'Student Coordinator 3',
      role: 'Events Coordinator',
      department: 'Department of Information Technology',
      year: 'Third Year',
      photo: '/images/coordinators/coordinator3.jpg',
    },
    {
      id: 4,
      name: 'Student Coordinator 4',
      role: 'Logistics Coordinator',
      department: 'Department of Information Technology',
      year: 'Third Year',
      photo: '/images/coordinators/coordinator4.jpg',
    },
  ];

  return (
    <section id="student-coordinators" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Student Coordinators
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated student team coordinating AIAH 2026
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {coordinators.map((coordinator) => (
            <div
              key={coordinator.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Photo Container */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-200 to-sky-300 overflow-hidden">
                {coordinator.photo ? (
                  <Image
                    src={coordinator.photo}
                    alt={coordinator.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                  {coordinator.name}
                </h3>
                <p className="text-sm text-cyan-600 font-semibold mb-1">
                  {coordinator.role}
                </p>
                <p className="text-xs text-gray-600 leading-tight">
                  {coordinator.year}
                </p>
                <p className="text-xs text-gray-500 leading-tight mt-1">
                  {coordinator.department}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our student coordinators work tirelessly to ensure a seamless and memorable experience 
            for all participants at AIAH 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentCoordinators;
