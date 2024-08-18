import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VerifyBusiness = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyBusiness = async () => {
      try {
        const response = await fetch(
          `https://noteslidebackend.onrender.com/api/verify_business/${token}/`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (response.ok) {
          setMessage(data.message);
          window.alert(
            "Business Email verified successfully. Check your email for more instructions."
          );
          navigate("/dashboard");
        } else {
          setMessage(data.error);
          window.alert(message);
        }
      } catch (error) {
        setMessage("An error occurred while verifying your email.");
      }
    };

    verifyBusiness();
  }, [token]);

  return <div className="items-center justify-center"></div>;
};

export default VerifyBusiness;
