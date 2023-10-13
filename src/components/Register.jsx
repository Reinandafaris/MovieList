import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCloseRegister = () => {
    const register = document.querySelector('.wrapper-register');
    register.classList.remove('active');
  };

  return (
    <>
      <div className="wrapper-register">
        <Container className="d-flex justify-content-center align-item-center">
          <Row className="baris-register">
            <Col>
              <form>
                <div className="form-group">
                  <div className="tag-group">
                    <h1 className="tag-register">Create Account</h1>
                    <label onClick={handleCloseRegister} className="cross">
                      <i className="fa-solid fa-forward"></i>
                    </label>
                  </div>
                  <div className="line">
                    <div className="form-input">
                      <input type="text" placeholder="First Name" className="isi-form" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-user"></i>
                    </div>
                  </div>
                  {/* <div className="line">
                    <div className="form-input">
                      <input type="text" placeholder="Last Name" className="isi-form" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-user"></i>
                    </div>
                  </div> */}
                  <div className="line">
                    <div className="form-input">
                      <input type="email" placeholder="Email Address" className="isi-form" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                  </div>
                  <div className="line">
                    <div className="form-input">
                      <input type="password" placeholder="Password" className="isi-form" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-eye"></i>
                    </div>
                  </div>
                  {/* <div className="line">
                    <div className="form-input">
                      <input type="password" placeholder="Password Confirmation" className="isi-form" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-eye"></i>
                    </div>
                  </div> */}
                  <button type="submit" className="tombol-submit">
                    Register Now
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Register;
