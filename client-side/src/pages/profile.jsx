import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  let [profile, setProfile] = useState(null);

  const getProfile = async () => {
    const { data } = await axios({
      url: `http://localhost:3000/profile`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    setProfile(data.data);
  };
  useEffect(() => {
    getProfile();
  }, []);
  //   return(
  //   <>

  //   </>
  // );
}
