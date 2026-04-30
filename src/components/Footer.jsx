// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Membership */}
        <div>
          <h3 className="text-white font-bold mb-4">Memberships</h3>
          <ul className="space-y-2">
            <li>Join Now</li>
            <li>Explore Memberships</li>
            <li>Corporate Memberships</li>
            <li>Free Pass</li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-white font-bold mb-4">Locations</h3>
          <ul className="space-y-2">
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
          <ul className="space-y-2">
            <li>Fitness Classes</li>
            <li>Personal Training</li>
            <li>Online Fitness</li>
            <li>THE WORX</li>
            <li>Nutrition</li>
            <li>Recovery</li>
            <li>Rewards</li>
            <li>Child Minding</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>FAQs</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Make a Payment</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-700 pt-8 ">
        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center">
          © 2026 Fitness Landing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
