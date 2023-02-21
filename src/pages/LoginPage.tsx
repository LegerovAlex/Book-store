import { LogOut } from "../components/registration/logout/LogOut";
import { SignIn } from "../components/registration/signin/SignIn";
import { useAppSelector } from "../store/store";

export function LoginPage() {
  const user = useAppSelector((state) => state.user.user);
  return <div>{user ? <LogOut /> : <SignIn />}</div>;
}
