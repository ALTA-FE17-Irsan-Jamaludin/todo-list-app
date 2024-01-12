import { FC, useState, useEffect } from "react";
import axios from "axios";
import CardCopy from "../components/DAY 1/CardCopy";
import gambarIcon from "../assets/icons8-edit-64.png";
import addIcon from "../assets/icons8-add-48.png";
import editIcon from "../assets/icons8-1edit-64.png";
import closeIcon from "../assets/icons8-close-94.png";
import deleteIcon from "../assets/icons8-delete-100.png";
import { TodoistApi } from "@doist/todoist-api-typescript";
const api = new TodoistApi("f45c645f4347dc0faae2e87e772829b1f7074078");

interface TypeProduct {
  id: number | string;
  name: string;
}

interface TypeState {
  modalBox: boolean;
  dataAPI: TypeProduct[];
  dataProduct: {
    id: number | string; // id dapat berupa number atau string
    name: string;
  };
}

const Homepage: FC = () => {
  const [data, setData] = useState<TypeState>({
    modalBox: false,
    dataAPI: [],
    dataProduct: {
      id: 0,
      name: "",
    },
  });

  const showProduct = async () => {
    try {
      api
        .getProjects()
        .then((projects: any) => {
          setData((prev: any) => ({ ...prev, dataAPI: projects }));
        })
        .catch((error) => {
          if (error.response) {
            // Kesalahan dari respons API (kode status, pesan, dll.)
            console.log("Error response:", error.response.data);
          } else if (error.request) {
            // Tidak ada respons dari server
            console.log("No response received:", error.request);
          } else {
            // Kesalahan lainnya
            console.log("Error:", error.message);
          }
        });
    } catch {
      console.log("Ada Error");
    }
  };

  const postProduct = async () => {
    try {
      const response = await axios.post(`https://65989ecca20d3dc41ceed80e.mockapi.io/Product`, data.dataProduct);
      if (response.status === 201) {
        setData((prev) => ({ ...prev, modalBox: !prev.modalBox }));
        showProduct();
      } else {
        console.log("gagal dikirim");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const putProduct = async () => {
    const { id, name } = data.dataProduct;

    try {
      const response = await axios.put(`https://65989ecca20d3dc41ceed80e.mockapi.io/Product/${id}`, { name });
      if (response.status === 200) {
        setData((prev) => ({ ...prev, modalBox: !prev.modalBox }));
        showProduct();
        console.log(" dikirim");
      } else {
        console.log("gagal dikirim");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async () => {
    const { id } = data.dataProduct;

    try {
      const response = await axios.delete(`https://65989ecca20d3dc41ceed80e.mockapi.io/Product/${id}`);
      if (response.status === 200) {
        setData((prev) => ({ ...prev, modalBox: !prev.modalBox }));
        showProduct();
        console.log(" dihapus");
      } else {
        console.log("gagal dihapus");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showProduct();
  }, []);

  return (
    <>
      <div className="h-full w-screen ">
        {data.modalBox && (
          <div className="h-full w-screen z-50 inset-0 fixed flex items-center justify-center">
            <div className="inset-0 fixed bg-black opacity-70 "></div>
            <div className=" border-[2px] bg-slate-200 border-slate-600 h-[80%] w-[90%] lg:w-[55%] relative rounded-md">
              <div className="flex flex-col justify-center items-center gap-4  h-[100%]">
                <img src={gambarIcon} alt="" />
                <span className="font-semibold text-slate-700 text-2xl lg:text-4xl "> Manipulasi Data</span>
                <input
                  onChange={(e) => setData((prev) => ({ ...prev, dataProduct: { ...prev.dataProduct, id: e.target.value } }))}
                  placeholder=" Masukan ID"
                  type="text"
                  className="border-slate-200 bg-slate-300  border-2 w-[80%] rounded-md px-5 py-3"
                />
                <textarea
                  onChange={(e) => setData((prev) => ({ ...prev, dataProduct: { ...prev.dataProduct, name: e.target.value } }))}
                  placeholder=" Masukan Deskripsi"
                  className="border-slate-200 h-2/6 bg-slate-300 border-2 w-[80%] rounded-md px-5 py-3"
                />

                <div className="button-list flex justify-center w-[85%] h-1/5 text-slate-500  items-center gap-3 ">
                  <button className="w-[25%] flex flex-col justify-center items-center bg-slate-100 h-1/2" onClick={postProduct}>
                    <img src={addIcon} alt="add" />
                    Add
                  </button>
                  <button className="w-[25%] flex flex-col justify-center items-center bg-slate-100 h-1/2" onClick={putProduct}>
                    <img src={editIcon} alt="edit" />
                    Edit
                  </button>
                  <button className="w-[25%] flex flex-col justify-center items-center bg-slate-100 h-1/2" onClick={deleteProduct}>
                    <img src={deleteIcon} alt="remove" />
                    Remove
                  </button>
                  <button className="w-[25%] flex flex-col justify-center items-center bg-slate-100 h-1/2" onClick={() => setData((prev) => ({ ...prev, modalBox: !prev.modalBox }))}>
                    <img src={closeIcon} alt="close" />
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex pt-6 fixed top-0 w-screen z-10 bg-white flex-col justify-center shadow-md items-center">
          <span className="text-3xl font-semibold">Todo List</span>
          <div className="">
            <input className="bg-slate-100 py-2 px-10 rounded-xl my-5 text-center" placeholder="Search todo" type="text" name="" id="" />
          </div>
        </div>
        <div className="lg:grid pt-24 flex flex-col sm:grid-cols-2 items-center h-[80vh] justify-start">
          {data.dataAPI &&
            data.dataAPI.map((item: any, index: number) => {
              return <CardCopy key={index} description={item.name} />;
            })}
        </div>

        <div className="fixed bottom-1 left-2 bg-blur-md bg-opacity-60 rounded-lg bg-slate-600">
          <button className=" m-3 px-5 py-2 bg-green-500 text-white" onClick={() => setData((prev) => ({ ...prev, modalBox: !prev.modalBox }))}>
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
