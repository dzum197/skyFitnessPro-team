import * as S from "./styles";
import lightLogo from "../../img/light-logo.png";
import bodyflexDescImage from "../../img/bodyflexDescImage.png";
import number1 from "../../img/numbers/number1.png";
import number2 from "../../img/numbers/number2.png";
import number3 from "../../img/numbers/number3.png";
import { FooterDesc } from '../../components/footer-desc-page';
import { useContext,useEffect,useState } from 'react'
import firebase from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { useParams } from 'react-router-dom'
export function BodyflexDesc() {
  const [data, setData] = useState([]);
  let param = useParams()
  console.log(param.id);
  const firebaseApp = useContext('BaseContext');
  const database = getDatabase(firebaseApp);
  let imgs = [number1, number2, number3]
   const dataRef = ref(database, '/courses');
   useEffect(() => {
      async function fetchData() {
          try {
              const snapshot = await get(dataRef);
              if (snapshot.exists()) {
                  const data = snapshot.val();
                  setData(data); 
              } else {
                  console.log('Данные не найдены.');
              }
          } catch (error) {
              console.error('Ошибка при чтении данных: ', error);
          }
      }
      fetchData();
  }, []);
  console.log(data);
  return (
    
    <S.BodyflexDesc>
      <S.Container>
        <S.imgBlock>
          <S.lightLogo src={lightLogo}></S.lightLogo>
          <S.BodyflexDescImage src={bodyflexDescImage}></S.BodyflexDescImage>
        </S.imgBlock>

        <S.upperBlock>
          <S.bigText>Подойдет для вас, если: </S.bigText>
          <S.numbersBlock>
        
            {Object.keys(data).map((el,i) => (
                        data[el]._id == param.id ? 
                        data[el].step.map((el1,i1)=> (
                            <S.numberBox key={el1}>
                                <S.number src={imgs[i1]}></S.number>
                                <S.numberText>{el1}</S.numberText>
                            </S.numberBox> 
                        )) : ''
                    ))} 

           
          </S.numbersBlock>
        </S.upperBlock>

        <S.middleTextBlock>
          <S.bigText>Направления: </S.bigText>

          <S.ColumnInfoText>
          {Object.keys(data).map((el,i) => (
                        data[el]._id == param.id ? 
                        data[el].direct.map((el1,i1)=> (
                            <S.ColumnInfoItem>• {el1}</S.ColumnInfoItem>
                        )) : ''
                ))} 
          </S.ColumnInfoText>
        </S.middleTextBlock>

        <S.nextMiddleTextBlock>
        {Object.keys(data).map((el,i) => (
                            data[el]._id == param.id ? data[el].descr: ''
                    ))} 
        </S.nextMiddleTextBlock>

        <FooterDesc/>

      </S.Container>
    </S.BodyflexDesc>
  );
}
