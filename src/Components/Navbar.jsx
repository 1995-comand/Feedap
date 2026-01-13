import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import SwitchControler from "./SwitchControler";

const Navbar = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInitials, setUserInitials] = useState("");

  const API = axios.create({
    baseURL: "https://feedup-o1vg.onrender.com",
    headers: { "Content-Type": "application/json" },
  });

  // Check if user is logged in on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUserProfile();
    }
  }, []);

  const fetchUserProfile = async () => {
    try {
      const { data } = await API.get("/me");
      setName(data.name);
      setSurname(data.surname);
      setPhone(data.phone);
      setUserInitials(data.name.charAt(0) + data.surname.charAt(0));
      setIsLoggedIn(true);
    } catch (error) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setPhone("");
    setCode("");
    setName("");
    setSurname("");
    setMessage("");
    setIsLoading(false);
  };

  const handleRegister = async () => {
    if (!phone) {
      setMessage("Telefon raqamini kiriting");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const { data } = await API.post("/register", { phone });
      setMessage(data.message || "Kod telegramga yuborildi");
      setStep(2);
    } catch (error) {
      setMessage(error.response?.data?.message || "Xatolik yuz berdi");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!code) {
      setMessage("Kodni kiriting");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const { data } = await API.post("/verify-code", { phone, code });
      setMessage(data.message);
      setStep(3);
    } catch (error) {
      setMessage(error.response?.data?.message || "Xatolik yuz berdi");
    } finally {
      setIsLoading(false);
    }
  };

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleCompleteProfile = async () => {
    if (!name || !surname) {
      setMessage("Ism va familiyani kiriting");
      return;
    }

    setIsLoading(true);
    setMessage("");

    const capitalizedName = capitalizeFirstLetter(name);
    const capitalizedSurname = capitalizeFirstLetter(surname);

    try {
      const { data } = await API.post("/complete-profile", {
        phone,
        name: capitalizedName,
        surname: capitalizedSurname,
      });

      setMessage(data.message);

      if (data.token) {
        localStorage.setItem("token", data.token);
        API.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      }

      const initials = capitalizedName.charAt(0) + capitalizedSurname.charAt(0);
      setUserInitials(initials);
      setName(capitalizedName);
      setSurname(capitalizedSurname);
      setIsLoggedIn(true);

      setTimeout(() => {
        document.getElementById("register_modal").close();
        resetForm();
      }, 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || "Xatolik yuz berdi");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e, action) => {
    if (e.key === "Enter") {
      action();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    delete API.defaults.headers.common["Authorization"];
    setIsLoggedIn(false);
    setUserInitials("");
    setName("");
    setSurname("");
    setPhone("");
    document.getElementById("register_modal").close();
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-20">
          <figure>
            <Link to="/">
              <img
                className="w-25"
                src="https://static.tildacdn.com/tild3433-3335-4663-b633-393138303263/feed_up.png"
                alt=""
              />
            </Link>
          </figure>
          <ul className="flex items-center justify-between gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Menyu">Menyu</Link>
            </li>
            <li>
              <Link to="/Sales">Sales</Link>
            </li>
            <li>
              <Link to="/WorkPlace">WorkPlace</Link>
            </li>
            <li>
              <Link to="/Branch">Branch</Link>
            </li>
            <li>
              <Link to="/Callcenter">Callcenter</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <h1 className="font-bold">+998946187788</h1>
          <CiSearch size={"20px"} />
          <SlBasket size={"20px"} />
          <CiHeart size={"20px"} />
          <TbWorld size={"20px"} />

          {isLoggedIn ? (
            <div
              className="cursor-pointer"
              onClick={() =>
                document.getElementById("register_modal").showModal()
              }
            >
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-10">
                  <span className="text-lg font-bold">{userInitials}</span>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() =>
                document.getElementById("register_modal").showModal()
              }
            >
              <CiUser size={"20px"} />
            </button>
          )}

          <dialog id="register_modal" className="modal">
            <div className="modal-box bg-base-200 max-w-md">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  document.getElementById("register_modal").close();
                  if (!isLoggedIn) {
                    resetForm();
                  }
                }}
              >
                ✕
              </button>

              <h3 className="font-bold text-lg mb-4">
                {isLoggedIn
                  ? "👤 Profil"
                  : "📞 Telefon orqali ro'yxatdan o'tish"}
              </h3>

              {isLoggedIn ? (
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-4 py-6">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full w-24">
                        <span className="text-4xl font-bold">
                          {userInitials}
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-xl">
                        {name} {surname}
                      </h4>
                      <p className="text-sm text-gray-500">{phone}</p>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="space-y-2">
                    <button className="btn btn-outline w-full">
                      📦 Buyurtmalarim
                    </button>
                    <button className="btn btn-outline w-full">
                      ❤️ Sevimlilar
                    </button>
                    <button className="btn btn-outline w-full">
                      ⚙️ Sozlamalar
                    </button>
                    <button
                      className="btn btn-error w-full"
                      onClick={handleLogout}
                    >
                      🚪 Chiqish
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {step === 1 && (
                    <div className="space-y-4">
                      <input
                        type="tel"
                        className="input input-bordered w-full"
                        placeholder="+998901234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e, handleRegister)}
                      />
                      <button
                        className="btn btn-success w-full"
                        onClick={handleRegister}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="loading loading-spinner"></span>
                        ) : (
                          "Ro'yxatdan o'tish"
                        )}
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-500">
                        {phone} raqamiga telegram bot orqali tasdiqlash kodi
                        yuborildi
                      </p>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Telegramdan kelgan kod"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e, handleVerifyCode)}
                      />
                      <button
                        className="btn btn-success w-full"
                        onClick={handleVerifyCode}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="loading loading-spinner"></span>
                        ) : (
                          "Kodni tasdiqlash"
                        )}
                      </button>
                      <button
                        className="btn btn-ghost w-full"
                        onClick={() => setStep(1)}
                      >
                        Orqaga
                      </button>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-500">
                        Ma'lumotlaringizni kiriting
                      </p>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Ism"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Familiya"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        onKeyPress={(e) =>
                          handleKeyPress(e, handleCompleteProfile)
                        }
                      />
                      <button
                        className="btn btn-success w-full"
                        onClick={handleCompleteProfile}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="loading loading-spinner"></span>
                        ) : (
                          "Saqlash"
                        )}
                      </button>
                      <button
                        className="btn btn-ghost w-full"
                        onClick={() => setStep(2)}
                      >
                        Orqaga
                      </button>
                    </div>
                  )}
                </>
              )}

              {message && (
                <div
                  className={`alert ${
                    message.includes("Xatolik") ? "alert-error" : "alert-info"
                  } mt-4`}
                >
                  <span>{message}</span>
                </div>
              )}
            </div>
          </dialog>

          <SwitchControler />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
