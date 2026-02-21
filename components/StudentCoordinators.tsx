"use client";

import Image from 'next/image';
import { FC, useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  year: string;
  photo: string;
}

interface TeamCategory {
  id: number;
  title: string;
  description: string;
  icon: string;
  members: TeamMember[];
}

interface StudentCoordinatorsProps {
  // You can add props here if needed
}

const StudentCoordinators: FC<StudentCoordinatorsProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<TeamCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamCategories: TeamCategory[] = [
    {
      id: 1,
      title: 'Core Committee',
      description: 'Overall event management and leadership',
      icon: '',
      members: [
        {
          id: 1,
          name: 'Kathir Kaman A',
          role: 'President',
          department: 'Department of Information Technology',
          year: 'Fourth Year',
          photo: '/images/coordinators/coordinator1.jpg',
        },
        {
          id: 2,
          name: 'Ananya Sivakumar',
          role: 'Vice President',
          department: 'Department of Information Technology',
          year: 'Fourth Year',
          photo: '/images/coordinators/coordinator2.jpg',
        },
        {
          id: 3,
          name: 'Nithish Kumar S',
          role: 'Secretary',
          department: 'Department of Information Technology',
          year: 'Fourth Year',
          photo: '/images/coordinators/coordinator2.jpg',
        },
        {
          id: 4,
          name: 'Kavyasri VJ',
          role: 'Treasurer',
          department: 'Department of Information Technology',
          year: 'Fourth Year',
          photo: '/images/coordinators/coordinator2.jpg',
        },
      ],
    },
    {
      id: 2,
      title: 'Design Coordinators',
      description: 'Graphics, branding, and visual identity',
      icon: '',
      members: [
        {
          id: 5,
          name: 'Harshikaa Sundari',
          role: 'Deputy Head',
          department: 'Design',
          year: 'Third Year',
          photo: '/images/coordinators/design1.jpg',
        },
        {
          id: 6,
          name: 'Sanjana S',
          role: 'Deputy Head',
          department: 'Design',
          year: 'Third Year',
          photo: '/images/coordinators/design2.jpg',
        },
        {
          id: 7,
          name: 'Jayakanthan JS',
          role: 'Deputy Head',
          department: 'Marketing and Logistics',
          year: 'Third Year',
          photo: '/images/coordinators/design2.jpg',
        },
      ],
    },
    {
      id: 3,
      title: 'Website Coordinators',
      description: 'Web development and digital platform',
      icon: '💻',
      members: [
        {
          id: 5,
          name: 'Web Coordinator 1',
          role: 'Frontend Developer',
          department: 'Department of Computer Science',
          year: 'Third Year',
          photo: '/images/coordinators/web1.jpg',
        },
        {
          id: 6,
          name: 'Web Coordinator 2',
          role: 'Backend Developer',
          department: 'Department of IT',
          year: 'Third Year',
          photo: '/images/coordinators/web2.jpg',
        },
      ],
    },
    {
      id: 4,
      title: 'Event Coordinators',
      description: 'On-ground event management',
      icon: '🎪',
      members: [
        {
          id: 7,
          name: 'Event Coordinator 1',
          role: 'Logistics Head',
          department: 'Department of Management',
          year: 'Third Year',
          photo: '/images/coordinators/event1.jpg',
        },
        {
          id: 8,
          name: 'Event Coordinator 2',
          role: 'Program Manager',
          department: 'Department of Management',
          year: 'Second Year',
          photo: '/images/coordinators/event2.jpg',
        },
      ],
    },
    {
      id: 5,
      title: 'PR & Marketing',
      description: 'Public relations and promotions',
      icon: '📢',
      members: [
        {
          id: 9,
          name: 'PR Coordinator 1',
          role: 'Marketing Head',
          department: 'Department of Marketing',
          year: 'Third Year',
          photo: '/images/coordinators/pr1.jpg',
        },
        {
          id: 10,
          name: 'PR Coordinator 2',
          role: 'Social Media Manager',
          department: 'Department of Communications',
          year: 'Second Year',
          photo: '/images/coordinators/pr2.jpg',
        },
      ],
    },
    {
      id: 6,
      title: 'Technical Team',
      description: 'Technical setup and support',
      icon: '🔧',
      members: [
        {
          id: 11,
          name: 'Tech Coordinator 1',
          role: 'Technical Head',
          department: 'Department of Electronics',
          year: 'Third Year',
          photo: '/images/coordinators/tech1.jpg',
        },
        {
          id: 12,
          name: 'Tech Coordinator 2',
          role: 'AV Specialist',
          department: 'Department of IT',
          year: 'Third Year',
          photo: '/images/coordinators/tech2.jpg',
        },
      ],
    },
  ];

  const openModal = (category: TeamCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <>
      <section id="student-coordinators" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Student Coordinators
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated student teams coordinating AIAH 2026
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => openModal(category)}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group text-left"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center text-sm text-cyan-600 font-medium">
                        <span>{category.members.length} members</span>
                        <svg 
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Click on any team to view their members and responsibilities
            </p>
          </div>
        </div>
      </section>

      {/* Modal/Popup */}
      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
              onClick={closeModal}
            ></div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">
                          {selectedCategory.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {selectedCategory.title}
                          </h3>
                          <p className="text-gray-600">
                            {selectedCategory.description}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={closeModal}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                      {selectedCategory.members.map((member) => (
                        <div
                          key={member.id}
                          className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-cyan-200 to-sky-300">
                              {member.photo ? (
                                <Image
                                  src={member.photo}
                                  alt={member.name}
                                  fill
                                  className="object-cover"
                                  sizes="64px"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <svg
                                    className="w-8 h-8 text-slate-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-slate-800">
                                {member.name}
                              </h4>
                              <p className="text-sm text-cyan-600 font-medium">
                                {member.role}
                              </p>
                              <p className="text-xs text-gray-600">
                                {member.department}
                              </p>
                              <p className="text-xs text-gray-500">
                                {member.year}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-600 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentCoordinators;
