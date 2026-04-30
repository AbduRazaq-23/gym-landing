export default function Footer() {
  return (
    <footer className="relative text-gray-200 py-20 px-6">
      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
        alt="gym footer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Memberships */}
          <div>
            <h3 className="text-white font-bold mb-4">Memberships</h3>
            <ul className="space-y-2 text-sm">
              <li>Join Now</li>
              <li>Explore Memberships</li>
              <li>Corporate Memberships</li>
              <li>Free Pass</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold mb-4">Locations</h3>
            <ul className="space-y-2 text-sm">
              <li>Vancouver Gyms</li>
              <li>Burnaby Gyms</li>
              <li>Richmond Gyms</li>
              <li>Surrey Gyms</li>
              <li>Langley Gyms</li>
              <li>North Vancouver Gyms</li>
              <li>Vancouver Island Gyms</li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-white font-bold mb-4">Experience FW</h3>
            <ul className="space-y-2 text-sm">
              <li>Fitness Classes</li>
              <li>Personal Training</li>
              <li>Online Fitness</li>
              <li>Nutrition</li>
              <li>Recovery</li>
              <li>Rewards</li>
              <li>Child Minding</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>FAQs</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Make a Payment</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-gray-600 mt-12 pt-8 ">
          {/* COPYRIGHT */}
          <p className="text-xs text-gray-400">
            © 2026 Fitness Landing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
