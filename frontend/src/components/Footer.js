export default function Footer() {
  return (
    <footer className="container bg-light text-center text-lg-start fixed-bottom">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-dark" href="/#">
          Brand
        </a>
      </div>
    </footer>
  );
}
