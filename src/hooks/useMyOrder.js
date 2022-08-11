import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase.init";

const useMyOrder = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    const getMyOrder = async () => {
      const email = user.email;
      const url = `https://immense-meadow-70411.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setMyOrder(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };

    getMyOrder();
  }, [user]);

  return [myOrder, setMyOrder];
};

export default useMyOrder;
