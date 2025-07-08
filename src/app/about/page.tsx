import { useAppSelector } from "@/lib/store/hooks";

const About = () => {
  const data = useAppSelector((store) => store.teacher);
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
};
export default About;
