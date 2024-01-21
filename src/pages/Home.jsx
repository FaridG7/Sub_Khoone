import { useNavigate } from "react-router-dom";
import ChangePasswordForm from "../features/Manager/ChangePasswordForm";
import ManagerDetails from "../features/Manager/managerDetails";
import { logout } from "../services/apiAuth";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <ManagerDetails />
      <Modal>
        <Modal.Open opens="changePassword">
          <Button label="تغییر رمز عبور" color="green" />
        </Modal.Open>
        <Modal.Window name="changePassword">
          <ChangePasswordForm />
        </Modal.Window>
      </Modal>
      <Button
        label="خروج از سیستم"
        color="red"
        onClick={() => {
          logout();
          navigate("/login");
        }}
      />
    </div>
  );
}

export default Home;
