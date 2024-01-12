import plusLogo from "../img/icons8-plus-48.png";

const Button = () => {
  return (
    <>
      <button className="bg-sky-500 h-12 px-2 gap-3 text-white flex justify-center items-center w-28">
        <img src={plusLogo} alt="plus" width={"30px"} />
        New
      </button>
    </>
  );
};

export default Button;
