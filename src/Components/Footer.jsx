import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">
            <span className="text-yellow-400">feed</span>
            <span className="text-red-500">up</span>
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed">
            Feed Up is a leading fast food restaurant chain in Uzbekistan, which
            has been delighting the country's residents with fresh and delicious
            dishes for over 13 yearss
          </p>

          <div className="flex gap-3">
            <img
              className="h-10"
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              alt=""
            />
            <img
              className="h-10"
              src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
              alt=""
            />
          </div>
        </div>

   <div>
  <h2 className="font-semibold mb-4">About company</h2>
  <ul className="space-y-2 text-gray-600 text-sm">
    <li>
      <NavLink to="/about" className="hover:text-black">
        About us
      </NavLink>
    </li>
    <li>
      <NavLink to="/menu" className="hover:text-black">
        Menu
      </NavLink>
    </li>
    <li>
      <NavLink to="/sales" className="hover:text-black">
        Promotions
      </NavLink>
    </li>
    <li>
      <NavLink to="/branches" className="hover:text-black">
        Branches
      </NavLink>
    </li>
    <li>
      <NavLink to="/workplace" className="hover:text-black">
        Vacancy
      </NavLink>
    </li>
    <li>
      <NavLink to="/contacts" className="hover:text-black">
        Contacts
      </NavLink>
    </li>
  </ul>
</div>

        <div>
          <h2 className="font-semibold mb-4">Information</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Delivery</li>
            <li>Payment</li>
            <li>Privacy policy</li>
            <li>Public offer</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Our socials</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>📞 +998 71 200 22 11</li>
            <li>✉️ feedup.uz@yandex.ru</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Telegram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
