import Image from "next/image";
import { UserAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import rightArrow from '../images/arrowright2.svg'
import userEdit from '../images/useredit.svg'
import profiler from "../images/profile.png";
import editor from "../images/Frame 1518.svg";
const ProfilePart = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      setLoading(false);
    };

    checkAuthentication();
  }, [user]);
  return (
    <>
      {loading ? null : !user ? (
        <div>
          <Image src={profiler} alt="no-user" quality={100} />
        </div>
      ) : (
        <div className="userhandler">
          <Image
            src={user.photoURL}
            alt="User-signed-in"
            width={50}
            height={20}
            quality={100}
            className="mover"
          />
          <div className="paragraph">
            <p>{user.displayName}</p>
            <p className="text-xs">{user.email}</p>
          </div>
          <Image src={editor} alt="change-profile" className="camera" />
          <div className="profile-setting">
          <Image src={userEdit} alt="Edit user details" width={25} className="userEdit" />
          <p className="profile-setting-p">Profile settings</p>
          </div>
          <Image src={rightArrow} alt="right-arrow" width={25} className="right-arrow" />
        </div>
      )}
    </>
  );
};

export default ProfilePart;
