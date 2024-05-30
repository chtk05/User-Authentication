import axios from "axios";
import toast from "react-hot-toast";
const useRegisterUser = async (userData) => {
  try {
    const res = await axios.post(
      `${process.env.BACKEND_URL}/register`,
      userData
    );
    if (res.status === 200) {
      console.log(res.data);
      toast.success(`Registered Successfully`);
      return res.data;
    } else {
      throw new Error(res.data.error || "Register failed");
    }
  } catch (err) {
    {
      if (err.response) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred while registering the user.");
      }
      throw err;
    }
  }
};

export default useRegisterUser;
