import "./index.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4 text-center fixed mb-0 bottom-0 w-full">
      <p>Designed by Naveen Mandava, Copyright @ {date}</p>
    </footer>
  );
}

export default Footer;
