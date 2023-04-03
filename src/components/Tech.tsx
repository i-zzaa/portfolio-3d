import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { useFirebaseContext } from '../context/firebase';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TechnologiesType } from '../types/contants';
import { getDocs, collection } from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage";
import { technologies } from '../constants';

const Tech = () => {
  const { db, storage } = useFirebaseContext()
  // const [technologies, setTechnologies] = useState([] as TechnologiesType[] )

  // const getData = useMemo( async() => {
  //   const querySnapshot = await getDocs(collection(db, "technologies"));
  //   const docs: TechnologiesType[]= []
  //   await querySnapshot.forEach((doc: any) => {
  //     const imageRef = ref(storage, doc.data().icon);
  //     getDownloadURL(imageRef).then((url: any) => {
  //       docs.push({
  //         name: doc.data().name ,
  //         icon: url, 
  //       })
  //       setTechnologies(docs)
  //     }).catch((error) => {
  //       console.error("Ocorreu um erro ao obter a URL da imagem:", error);
  //     });
  //   });

  // }, [])

  // useEffect(()=> {
  //   getData
  // })

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology: TechnologiesType) => (
        <div className='w-28 h-28' key={technology.name}>
        { technology.icon &&  <BallCanvas icon={technology.icon} />}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');