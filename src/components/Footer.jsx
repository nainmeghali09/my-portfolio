const Footer = () => {
  return (
    <div className='text-center py-2 px-4 font-semibold bg-white'>
      <div>
        Copyright <span className='text-orange-500'>&copy;</span> 2022
      </div>
      <div>
        Designed & Developed with ❤ by{" "}
        <a
          href="https://twitter.com/MeghaliNain"
          className="text-myorange no-underline"
        >
          Meghali Nain
        </a>{" "}
        &{" "}
        <a
          href="https://twitter.com/vdi0914"
          className="text-myorange no-underline"
        >
          Vidhi Tomar
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
