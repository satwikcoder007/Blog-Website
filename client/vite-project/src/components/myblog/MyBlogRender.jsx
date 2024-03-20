import React,{useState,useEffect,useContext} from 'react'
const data=JSON.parse(localStorage.getItem("ResPonse"));
import axios from 'axios';
import BlogStructure from '../../blogRenderComponents/BlogStructure';
import { BlogContext } from "../../context/BlogContext"
import { useParams } from 'react-router-dom';
export default function MyBlogRender() {
    const blogContext = useContext(BlogContext);
    const {id}=useParams()
    const [Loading,setLoading]=useState(1);
    console.log(blogContext.dataArray)
  const getData = async () => {
    const parsedData = await axios.get(`http://localhost:4000/api/v1/myblog/${id}`, {
      withCredentials: true,
    });
    console.log(parsedData);
    setLoading(0);
    blogContext.setDataArray([...parsedData.data.message.response]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
   <div className='justify-center items-center flex flex-col gap-[70px] pt-[50px] pb-[50px]'>
    { Loading ? (<div className="absolute top-0 left-0 h-screen w-screen  justify-center items-center flex bg-black">
   <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
     <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
   </div>
 </div> )
 : <div>
        {blogContext.dataArray.map((val,index) => {
            return (
              <BlogStructure
                i={index}
                key={blogContext.dataArray[index]._doc._id}
              ></BlogStructure>
            );
          })}
    </div>
}
   </div>
  )
}