
const Error = ({ mensaje }) => {

  return (
        <div className="bg-red-600 text-white text-center uppercase rounded-md font-bold p-3 mb-5">
          <p>{mensaje}</p>
        </div>
  );
};

export default Error;
