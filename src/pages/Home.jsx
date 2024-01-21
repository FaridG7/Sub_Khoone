import { useNavigate } from "react-router-dom";
import ChangePasswordForm from "../features/Manager/ChangePasswordForm";
import ManagerDetails from "../features/Manager/managerDetails";
import { logout } from "../services/apiAuth";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div className="h-full flex flex-col justify-between">
      <ManagerDetails />
      <div className="flex flex-row gap-6 justify-end w-[30%] ml-6 mb-6">
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
    </div>
    </>
  );
}

export default Home;
