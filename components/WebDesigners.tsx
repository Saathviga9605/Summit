import Image from 'next/image';
import { FC } from 'react';

interface Designer {
  id: number;
  name: string;
  year: string;
  department: string;
  photo: string;
}

interface WebDesignersProps {
  // You can add props here if needed
}

const WebDesigners: FC<WebDesignersProps> = () => {
  const designers: Designer[] = [
    {
      id: 1,
      name: 'Saathviga B',
      year: 'Third Year',
      department: 'Department of Information Technology',
      photo: '/images/designers/saathviga.jpg',
    },
    {
      id: 2,
      name: 'Bagavati N',
      year: 'Third Year',
      department: 'Department of Information Technology',
      photo: '/images/designers/bagavati.jpg',
    },
  ];

  return (
    <section id="web-designers" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Web Designers
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The creative minds behind the AIAH 2026 website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {designers.map((designer) => (
            <div
              key={designer.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Photo Container */}
              <div className="relative h-64 bg-gradient-to-br from-sky-200 to-cyan-300 overflow-hidden">
                {designer.photo ? (
                  <Image
                    src={designer.photo}
                    alt={designer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-slate-400 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
                {/* Design Icon Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {designer.name}
                </h3>
                <p className="text-md text-sky-600 font-semibold mb-1">
                  {designer.year}
                </p>
                <p className="text-sm text-gray-600 leading-tight">
                  {designer.department}
                </p>
                
                {/* Design Skills Badge */}
                <div className="mt-4 flex justify-center space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Web Design
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Development
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Special thanks to our talented web designers for creating a beautiful and functional 
            website for AIAH 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDesigners;
