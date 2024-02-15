import { Link } from "react-router-dom";
import "../../components/Footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__sections footer__sections--1">
        <div className="footer__section">
          <h4 className="footer__section__title">Ayuda:</h4>
          <div className="footer__section__list">
            <Link href="#" className="footer__section__link">
              <p className="footer__section__link__text">Centro de ayuda</p>
            </Link>
            <Link href="#" className="footer__section__link">
              <p className="footer__section__link__text">
                Formulario de contacto
              </p>
            </Link>
            <Link href="#" className="footer__section__link">
              <p className="footer__section__link__text">Reclamos</p>
            </Link>
          </div>
        </div>
        <div className="footer__section">
          <h4 className="footer__section__title">Nosotros:</h4>
          <div className="footer__section__list">
            <Link href="#" className="footer__section__link">
              <p className="footer__section__link__text">Quiénes somos</p>
            </Link>
            <Link href="#" className="footer__section__link">
              <p className="footer__section__link__text">Web</p>
            </Link>
            <Link href="#" className="footer__section__link">
              <p className="footer__section__link__text">Encuéntranos</p>
            </Link>
          </div>
        </div>
        <div className="footer__section">
          <h4 className="footer__section__title">Complementos:</h4>
          <div className="footer__section__list">
            <Link href="#" className="footer__section__link">
              <p className="footer__section__link__text">APP Android</p>
            </Link>
            <Link href="#" className="footer__section__link">
              <p className="footer__section__link__text">APP IOs</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__sections footer__sections--2">
        <div className="footer__logo">
          <div className="footer__logo__content">
            <h2 className="footer__title">Mammamía</h2>
          </div>
          <span>Mammamía | Todos los derechos reservados | 2024</span>
        </div>
        <div className="footer__social__section footer__social__section--first">
          <h3 className="footer__social__title">Contactos:</h3>
          <div className="footer__social__icons__contact">
            <div className="footer__social__contact">
              <img
                src="/whatsapp.svg"
                alt=""
                className="footer__social__icon"
              />
              <p>+569-654-53154</p>
            </div>
            <div className="footer__social__contact">
              <img src="/mail.svg" alt="" className="footer__social__icon" />
              <p>mammamia@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer__social__section footer__social__section--second">
          <h3 className="footer__social__title">Síguenos en nuestras redes:</h3>
          <div className="footer__social__icons">
            <div className="footer__social__redes">
              <Link
                className="footer__social__icon__redes footer__social__icon--facebook"
                href="#"
              >
                <img
                  src="/facebook.svg"
                  alt=""
                  className="footer__social__icon"
                />
              </Link>
              <Link
                className="footer__social__icon__redes footer__social__icon--instagram"
                href="#"
              >
                <img
                  src="/instagram.svg"
                  alt=""
                  className="footer__social__icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
