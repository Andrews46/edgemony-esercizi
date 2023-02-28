import "./index.css";

const Footer = ({ title }) => {
  return (
    <div className="Footer">
      <footer className="title">
        <p>{title}</p>
        <img
          src="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
          alt="footerimage"
        />
      </footer>
    </div>
  );
};

export default Footer;
