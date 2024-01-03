"use client";
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const useCommonHelper = () => {
    const params = useParams()
    const navigation = useRouter()

   const pageNavigate = (url:string, value: any)=>{
     const paramValue = params?.locale
     navigation.push("")
    //  if(url)
    }
    return {

    }
}

export default useCommonHelper