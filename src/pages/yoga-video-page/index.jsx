import * as S from "./styles";
import { HeaderProfile } from "../../components/headerProfile";
import { Progress } from "../../components/progress";
import ReactPlayer from "react-player/youtube";
import { useContext,useEffect,useState } from 'react'
import firebase from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { useParams } from 'react-router-dom'
export function YogaVideo() {
  
  const [data, setData] = useState([]);
  const [video, setVideo] = useState([]);
  let param = useParams()
  console.log(param);
  const firebaseApp = useContext('BaseContext');
  const database = getDatabase(firebaseApp);
   const dataRef = ref(database, '/workout');
   useEffect(() => {
      async function fetchData() {
          try {
              const snapshot = await get(dataRef);
              if (snapshot.exists()) {
                  const data = snapshot.val();
                  setData(data); 
                  Object.keys(data).map((el,i) => (
                    data[el]._id == param.id ? 
                    setVideo(data[el][param.part].video)
                    : ''
                    ))
              } else {
                  console.log('Данные не найдены.');
              }
          } catch (error) {
              console.error('Ошибка при чтении данных: ', error);
          }
      }
      fetchData();
  }, []);
  console.log(video);
  return (
    <S.ProfilePage>
      <S.Container>
        <HeaderProfile></HeaderProfile>
        <S.ProfileBlock>
          <S.MainText>
          {Object.keys(data).map((el,i) => (
                        data[el]._id == param.id ? 
                        data[el].name
                        : ''
          ))} 
          </S.MainText>
          <S.EntryText>
          {Object.keys(data).map((el,i) => (
                        data[el]._id == param.id ? 
                        data[el][param.part].title
                        : ''
          ))} 

          </S.EntryText>
          <S.ReactPlayerBlock>
            <ReactPlayer url={video} controls width="1160" />
          </S.ReactPlayerBlock>
          
        </S.ProfileBlock>
        <S.DownBlock>
        <S.MyCourses>
        <S.EntryText>
            Упражнения
          </S.EntryText>
          <S.ColumnInfoText>
          {Object.keys(data).map((el,i) => (
                        data[el]._id == param.id ? 
                        data[el][param.part].exercises.map((el1,i1)=> (
                            
                               <S.ColumnInfoItem>• {el1}</S.ColumnInfoItem>
                            
                        )) : ''
                    ))} 
            
          </S.ColumnInfoText>
          <S.ProfileButtonBlock>
          <S.Button>Заполнить свой прогресс</S.Button>
          </S.ProfileButtonBlock>
        </S.MyCourses>
        <Progress part={param.part}></Progress>
        </S.DownBlock>
      </S.Container>
    </S.ProfilePage>
  );
}
