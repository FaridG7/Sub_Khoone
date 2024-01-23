import { useNavigate } from "react-router-dom";
import ChangePasswordForm from "../features/Manager/ChangePasswordForm";
import ManagerDetails from "../features/Manager/ManagerDetails";
import { logout } from "../services/apiAuth";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import useIsLoginned from "../hooks/useIsLoginned";
import Spinner from "../ui/Spinner";

function Home() {
  const navigate = useNavigate();
  const { isLoading, isLoginned } = useIsLoginned();

  if (isLoading) return <Spinner />;
  if (isLoginned)
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

  return (
    <div
      className="text-white flex flex-col justify-start gap-10 text-right text-xl mr-20 mt-20"
      dir="rtl"
    >
      <h3 className="text-4xl font-bold m-auto">
        شما به عنوان مهمان وارد شده اید
      </h3>
      <Button
        label="ورود به سیستم"
        color="green"
        onClick={() => {
          navigate("/login");
        }}
      />
    </div>
  );
}

export default Home;
