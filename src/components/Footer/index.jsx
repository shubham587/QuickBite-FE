import logo from "../../images/logo.webp";
const Footer = () => {
  return (
    <footer>
      <div className="bg-black flex justify-evenly l-[10%] p-[2%] mt-4  text-[22px]" style={{ display: "flex" }}>
        <div className="flex flex-col justify-center align-middle text-center">
        <img className="h-40 w-40" src={logo} alt="asdad" />
            <p className="text-white text-sm">Contact Us</p>
            <p className="text-white  text-sm">info@company.com</p>
            <p className="text-white text-sm">+1234567890</p>
        </div>
        <div >
          <h4 className="text-xl mb-2" >Company</h4>
          <ul>
            <li className="text-sm">About Us</li>
            <li className="text-sm">Quick Bite Corporate</li>
            <li className="text-sm">Careers</li>
            <li className="text-sm">Team</li>
            <li className="text-sm">Quick Bite Member</li>
            <li className="text-sm">Quick Bite Idea</li>
            <li className="text-sm">Quick Bite Easy</li>
            <li className="text-sm">Minis</li>
          </ul>
        </div>
        <div >
          <h4 className="text-xl mb-2">Contact Us</h4>
          <ul>
            <li className="text-sm">Help & Support</li>
            <li className="text-sm">Partner with us</li>
            <li className="text-sm">Ride with us</li>
            <li className="text-sm">Legal</li>
            <li className="text-sm">Terms & Conditions</li>
            <li className="text-sm">Cookie Policy</li>
            <li className="text-sm">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-2">Available in:</h4>
          <ul>
            <li className="text-sm">Mumbai</li>
            <li className="text-sm">Delhi</li>
            <li className="text-sm">Gurugram</li>
            <li className="text-sm">Bengaluru</li>
            <li className="text-sm">Chennai</li>
            <li className="text-sm">Kolkata</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-2">Life at Quick Bite</h4>
          <ul>
            <li className="text-sm">Explore with Quick Bite</li>
            <li className="text-sm">Quick Bite News</li>
            <li className="text-sm">Snackables</li>
          </ul>
        </div>
        {/* <div className="footer-section">
          <h4>Social Links</h4>
          <ul className="socialLinks">
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Pinterest</li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};
export default Footer;