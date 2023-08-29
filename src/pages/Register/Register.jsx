import { useState } from "react";
import "./Register.css";
import personal from "../../assets/personal_inventra.png";
import logo from '../../assets/logo-azul-inventra-042.png'
import { Link } from "react-router-dom";
import { BiLowVision, BiShow } from "react-icons/bi"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isButtonDisabled = !name || !email || !password;

  const handleRegister = () => {
    if (!isButtonDisabled) {
      // Lógica de registro aquí
    }
  };

  return (
    <div className="register">
      <div className="register__image">
        <img className="register__image-bg" src={personal} alt="personal" />
        <div className="register__overlay"></div>
      </div>

      <div className="register__content-container">
        <section className="register__content">
          <div className='register__logo'>
            <Link to='/'>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <h1 className="register__title">Te damos la bienvenida</h1>
          <p className="register__paragraph">
            Regístrate para conocer todas las ventajas que Inventra tiene para ti.
          </p>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="register__password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="register__password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiLowVision /> : <BiShow />}
            </button>
          </div>
          <button
            className={`register__button ${isButtonDisabled && "disabled"}`}
            onClick={handleRegister}
          >
            Registrarse
          </button>
          <div className="register__login-link">
            ¿Ya tienes una cuenta? <a href="/login">Ingresa ahora</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;