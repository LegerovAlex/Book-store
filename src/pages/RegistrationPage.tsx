import { LogOut } from "../components/registration/logOut/LogOut";
import { SignIn } from "../components/registration/signUp/SignIn";
import { useAppSelector } from "../store/store";

export function RegistrationPage() {
  const user = useAppSelector((state) => state.user.user);
  return <div>{user ? <LogOut /> : <SignIn />}</div>;
}
