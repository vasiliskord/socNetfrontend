import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Text, Grid, Center, Container, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./Spinner";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user,isLoading } = useSelector((state) => state.auth);

  const onRegisterClick = () => {
    navigate("/register");
  };

  const onLoginClick = () => {
    navigate("/login");
  };

  const onLandingClick = () => {
    navigate("/");
  };

  const onLogoutClick = () => {
    dispatch(logout());
    dispatch(reset());
    setTimeout(() => {
    navigate("/");
    }, 9000);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Container
        m={0}
        py="10px"
        pl={0}
        pr={0}
        style={{
          maxWidth: "100%",
          display: "flex",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Container ml={0} style={{ justifyContent: "center" }}>
          <Button
            onClick={onLandingClick}
            style={{ fontWeight: "700", backgroundColor: "white" }}
          >
            <Center>
              <Text color="black">socialNetwork</Text>
            </Center>
          </Button>
        </Container>
        {user ? (
          <Container mr={"5px"} px={0} mx={0}>
            <Button onClick={onLogoutClick} leftIcon={<FaSignInAlt />}>
              <Center> Logout</Center>
            </Button>
          </Container>
        ) : (
          <>
            <Container mr={"5px"} px={0} mx={0}>
              <Button onClick={onLoginClick} leftIcon={<FaSignInAlt />}>
                <Center> Login</Center>
              </Button>
            </Container>
            <Container pr={20} mx={0}>
              <Button onClick={onRegisterClick} leftIcon={<FaUser />}>
                <Center> Register</Center>
              </Button>
            </Container>
          </>
        )}
      </Container>
    </>
  );
}

export default Header;
