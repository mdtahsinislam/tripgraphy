
// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";

// const LoginPage = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // ✅ Use NextAuth signIn for credentials instead of direct API call
//       const result = await signIn("credentials", {
//         email: formData.email,
//         password: formData.password,
//         redirect: false,
//       });

//       if (result?.error) {
//         toast.error("Invalid credentials!");
//         setLoading(false);
//         return;
//       }

//       toast.success("Login successful!");
      
//       // ✅ Save user to localStorage for immediate UI update
//       const userResponse = await fetch("/api/auth/current-user", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
      
//       if (userResponse.ok) {
//         const userData = await userResponse.json();
//         localStorage.setItem("user", JSON.stringify(userData.user));
//       }

//       setTimeout(() => router.push("/"), 1000);
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     await signIn("google", { callbackUrl: "/" });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
//       <ToastContainer />
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100 text-center"
//       >
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back ✨</h1>
//         <p className="text-gray-500 mb-8">Login to your BuyFlow account</p>

//         {/* Email */}
//         <div className="mb-4 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//             disabled={loading}
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-6 text-left">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//             minLength={6}
//             disabled={loading}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-4 ${
//             loading ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-3 text-gray-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <FcGoogle size={24} />
//           <span className="font-medium text-gray-700">Login with Google</span>
//         </button>

//         <p className="mt-6 text-gray-600">
//           Don't have an account?{" "}
//           <Link href="/Register" className="text-blue-600 font-semibold hover:underline">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage; Bismillah

//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel1\app\login\page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  // Email/Password login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        toast.error("Login failed! Check your email and password.");
      } else {
        toast.success("Login successful!");
        setTimeout(() => router.push("/"), 1000);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error(error);
      toast.error("Google login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
      <ToastContainer position="top-right" autoClose={5000} />

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100 text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome Back CodeVeda ✨
        </h1>
        <p className="text-gray-500 mb-6">Login to your account</p>

        {/* Email */}
        <div className="mb-4 text-left">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6 text-left">
          <label className="block mb-1 font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full border p-2 rounded pr-10 focus:ring-2 focus:ring-blue-400"
              required
              minLength={6}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>

        {/* Login button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 mb-4 rounded-lg font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Register link */}
        <p className="mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/Register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}


