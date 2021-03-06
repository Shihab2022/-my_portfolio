import  { useEffect, useState } from 'react';

const useProductData = () => {
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    return [projects,setProjects]
};

export default useProductData;