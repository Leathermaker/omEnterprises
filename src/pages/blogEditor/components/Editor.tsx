import { Button } from "@/components";
import Input from "@/components/ui/Input";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FileUploader } from "react-drag-drop-files";
import { useNavigate } from "react-router-dom";

const Editor: React.FC = () => {
  const fileTypes = ["JPEG", "PNG", "JPG"];
  const[isPosting, setIsPosting] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate()
  const handleFileChange = (file: File) => {
    setFile(file); 
  };

  const getToken = () => {
    return Cookies.get("token");
  };

  const handleSubmit = async () => {
    if (!title && !value && !file)  return toast.error("Please fill all fields");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", value);
    if(file) formData.append("image", file); 
    try {
      setIsPosting(true);
      const resp = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/blog/create`,
        formData,
        {
          headers: {
            authorization: getToken()
          }
        }
      );
      if (resp.status === 200) {
        toast.success("Blog created successfully");
        navigate("/blogs");
        setIsPosting(false);
        setFile(null)
        setTitle("");
        setValue("");
        
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-4">
      <Input
        placeholder="Enter title here"
        onChange={(e) => setTitle(e.target.value)}
        className="border border-OMblue text-3xl font-bold"
      />
      <div className="my-4">
        <FileUploader
          multiple={false}
          handleChange={handleFileChange}
          name="file"
          types={fileTypes}
        />
        {file && <img src={URL.createObjectURL(file)} className="h-24 w-auto mt-2" alt="image" />}
      </div>
      <div className="mt-2">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
      <Button title={isPosting ? "Posting..." : "Post"} onClick={handleSubmit} className="mt-4" />
    </div>
  );
};

export default Editor;
