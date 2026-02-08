export default function Organisers() {
  const organisers = [
    {
      id: 1,
      name: 'Dr. S. Radha',
      designation: 'Principal, SSN College of Engineering',
      photo: '/images/organisers/principal.jpg', // Placeholder path
    },
    {
      id: 2,
      name: 'Dr. A. Shahina',
      designation: 'Head, Department of Information Technology',
      photo: '/images/organisers/dean-research.jpg',
    },
    {
      id: 3,
      name: 'Dr. I. Joe Louis Paul',
      designation: 'Associate Professor, Department of Information Technology',
      photo: '/images/organisers/hod-cse.jpg',
    },
    // {
    //   id: 4,
    //   name: 'Dr. B. Bharathi',
    //   designation: 'Professor & Event Coordinator',
    //   photo: '/images/organisers/coordinator.jpg',
    // },
    // {
    //   id: 5,
    //   name: 'Dr. S. Hariharan',
    //   designation: 'Associate Professor, AI & ML',
    //   photo: '/images/organisers/faculty1.jpg',
    // },n
    // {
    //   id: 6,
    //   name: 'Dr. M. Vijayalakshmi',
    //   designation: 'Associate Professor, Research Head',
    //   photo: '/images/organisers/faculty2.jpg',
    // },
  ]

  return (
    <section id="organisers" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Organisers
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team behind SSN AI Summit 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organisers.map((organiser) => (
            <div
              key={organiser.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Photo Container */}
              <div className="relative h-64 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                {/* Placeholder for photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-slate-400 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                {/* You can replace the svg with an actual image:
                <Image
                  src={organiser.photo}
                  alt={organiser.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                /> */}
              </div>

              {/* Info Container */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {organiser.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
  )
}
