import Link from 'next/link';

export default function PhotosPage() {
  return (
    // We use bg-white and text-black to match the light theme of your reference
    <div className="min-h-screen bg-white text-black p-10 md:p-20 flex flex-col md:flex-row font-mono">
      
      {/* Left Sidebar */}
      <div className="md:w-1/4 flex flex-col gap-4 mb-10 md:mb-0">
        <div>
          <h1 className="font-bold text-xl mb-8">j_fu</h1>
        </div>
        
        <Link href="/" className="hover:underline">home</Link>
        <Link href="/#projects" className="hover:underline">about</Link>
        <Link href="/#contact" className="hover:underline"></Link>
        
        
        <br />
        
        
        <br />

        {/* Location Section with Indented Sub-links */}
        <div className="flex flex-col gap-3">
          <span>landscape</span>
          <div className="flex flex-col gap-3 pl-4 text-sm text-gray-700">
            <Link href="/photos/vancouver" className="hover:underline">vancouver</Link>
            <Link href="/photos/singapore" className="hover:underline">singapore</Link>
            <Link href="/photos/oregon" className="hover:underline">oregon</Link>
            <Link href="/photos/california" className="hover:underline">california</Link>
          </div>
        </div>

        <Link href="/photos" className="hover:underline">cooking</Link>

      </div>

      {/* Right Gallery Section */}
      <div className="md:w-3/4 flex flex-col">
        <div className="text-center mb-12">
          <h2 className="font-bold">hi</h2>
          <p className="text-sm mt-2">welcome to my photo page!</p>
        </div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/main_1.jpeg" alt="Point Reyes" className="w-full h-auto object-cover aspect-[4/5]" />
            <img src="/main_2.jpeg" alt="Point Reyes" className="w-full h-auto object-cover aspect-[4/5]" />
            <img src="/main_3.jpeg" alt="Point Reyes" className="w-full h-auto object-cover aspect-[4/5]" />
            <img src="/main_4.jpeg" alt="Point Reyes" className="w-full h-auto object-cover aspect-[4/5]" />
            <img src="/main_7.jpeg" alt="Point Reyes" className="w-full h-auto object-cover aspect-[4/5]" />
            <img src="/main_8.jpeg" alt="Point Reyes" className="w-full h-auto object-cover aspect-[4/5]" />
            <img src="/main_9.jpeg" alt="Point Reyes" className="w-full h-auto object-cover aspect-[4/5]" />
            <img src="/main_5.jpeg" alt="Point Reyes" className="w-full h-auto object-cover aspect-[4/5]" />
            <img src="/main_6.jpeg" alt="Point Reyes" className="w-full h-auto object-cover aspect-[4/5]" />
        </div>
      </div>
      
    </div>
  );
}