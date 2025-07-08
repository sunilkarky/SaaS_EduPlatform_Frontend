// In your components

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setData, setAddress } from "@/lib/store/userSlice";
import { setName, setData as setTeacherData } from "@/lib/store/teacherSlice";

function Contact() {
  const name = "sunil";
  // Typed dispatch for setting data using custom useDispatch with type hook
  const dispatch = useAppDispatch();
  dispatch(setName(name));

  return <div></div>;
}
export default Contact;
