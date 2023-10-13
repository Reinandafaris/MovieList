import { Container, Row, Col } from 'react-bootstrap';

function Login() {
  const handleCloseRegister = () => {
    const login = document.querySelector('.wrapper-login');
    login.classList.remove('active');
  };
  return (
    <>
      <div className="wrapper-login">
        <Container className="d-flex justify-content-center align-item-center">
          <Row className="baris-register">
            <Col>
              <form>
                <div className="form-group">
                  <div className="tag-group">
                    <h1 className="tag-register">Log In to Your Account</h1>
                    <label onClick={handleCloseRegister} className="cross2">
                      <i className="fa-solid fa-forward"></i>
                    </label>
                  </div>
                  <div className="line">
                    <div className="form-input">
                      <input type="email" placeholder="Email Address" className="isi-form" />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                  </div>
                  <div className="line">
                    <div className="form-input">
                      <input type="password" placeholder="Password" className="isi-form" />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-eye"></i>
                    </div>
                  </div>
                  <button type="submit" className="tombol-submit">
                    Login
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

export default Login;
