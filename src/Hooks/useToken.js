import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken]=useState("")
    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = { email };
        if (email) {
          fetch(`http://localhost:5000/login/${email}`, {
            method: "PUT",
            headers: { content_type: "application/json" },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
              localStorage.setItem("token", data.token);
              setToken(data.token);
            });
        }
    },[user])
    
    return [token]
};

export default useToken;