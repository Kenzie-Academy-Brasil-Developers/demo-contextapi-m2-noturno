import { useUser } from "../../providers/User";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <>
      <h2>Dashboard</h2>

      <h2>{user.name}</h2>
      <h2>{user.course_module}</h2>
      <h2>{user.email}</h2>
    </>
  );
};

export default Dashboard;
