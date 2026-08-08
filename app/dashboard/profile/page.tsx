// import React from 'react'

// function page() {
//   return (
//     <div>profile page</div>
//   )
// }

// export default page


// i want any login user can found her profile here with information and role 

//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\profile\page.tsx



"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type UserProfile = {
  name: string;
  email: string;
  phone?: string;
  photo?: string;
  role?: string;
  createdAt?: string;
};

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (!session?.user?.email) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `/api/user/profile?email=${session.user.email}`
        );
        const data = await res.json();

        if (data.user) {
          setProfile(data.user);
         } 
        //else {
        //   // fallback to session data
        //   setProfile({
        //     name: session.user.name || "User",
        //     email: session.user.email,
        //     photo: session.user.image || "",
        //     role: "user",
        //   });
        // }

        else {
  // fallback to session data
  setProfile({
    name: session.user.name || "User",
    email: session.user.email || "",
    photo: session.user.image || "",
    role: "user",
  });
}
      } catch (error) {
        console.error(error);
        setProfile({
          name: session.user.name || "User",
          email: session.user.email || "",
          photo: session.user.image || "",
          role: "user",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [session, status, router]);

  if (status === "loading" || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">Loading profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-red-500">Failed to load profile</p>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32 relative">
          <div className="absolute -bottom-12 left-8">
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-500">
                  {profile.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 px-8 pb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-gray-500">{profile.email}</p>
            </div>

            <span
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                profile.role === "admin"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {profile.role?.toUpperCase() || "USER"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{profile.name}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{profile.email}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{profile.phone || "Not provided"}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium capitalize">{profile.role || "user"}</p>
            </div>

            {profile.createdAt && (
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Joined</p>
                <p className="font-medium">
                  {new Date(profile.createdAt).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}