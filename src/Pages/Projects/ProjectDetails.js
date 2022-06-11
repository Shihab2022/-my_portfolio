import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ProductContext } from '../../App';
import useProductData from '../../hook/useProductData';
const ProjectDetails = () => {
    const id =useParams()
    const [project,setProject]=useState([])
    // const [projects] = useContext(ProductContext);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setProject(data))
    },[id,project])
    const [projects]=useProductData()
    console.log(projects)
    console.log(id)
    // console.log(projects)
    return (
        <div>
            <p>this is project details</p>
        </div>
    );
};

export default ProjectDetails;