import profilePic from '../assets/profile-pic.webp';

function Image() {
  return (
    <img
      src={profilePic}
      alt="Profile-Picture"
      className="w-[200px] h-auto rounded-lg shadow-md border-2 border-white"
    />
  );
}

export default Image;
