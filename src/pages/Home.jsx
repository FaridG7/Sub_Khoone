import ChangePasswordForm from "../features/Manager/ChangePasswordForm";
import ManagerDetails from "../features/Manager/managerDetails";
import { logout } from "../services/apiAuth";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function Home() {
  return (
    <>
      <ManagerDetails />
      <Modal>
        <Modal.Open opens="changePassword">
          <Button label="تغییر رمز عبور" color="green" />
        </Modal.Open>
        <Modal.Window>
          <ChangePasswordForm />
        </Modal.Window>
      </Modal>
      <Button label="خروج از سیستم" color="red" onClick={logout} />
    </>
  );
}

export default Home;
