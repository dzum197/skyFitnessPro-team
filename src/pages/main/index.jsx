import * as S from './styles'
import mainImg from '../../img/editYourBody.png'
import { Header } from '../../components/header'
import card1 from '../../img/cards/card1.png'
import card2 from '../../img/cards/card2.png'
import card3 from '../../img/cards/card3.png'
import card4 from '../../img/cards/card4.png'
import card5 from '../../img/cards/card5.png'
import { Link } from 'react-router-dom'
import { useContext,useEffect,useState } from 'react'
import { Context } from '../../index'
import firebase from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
export  function Main() {
    const [data, setData] = useState([]);
    const firebaseApp = useContext('BaseContext');
     const database = getDatabase(firebaseApp);
    let imgs = [card1, card2, card3, card4, card5]
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
    return(
        <S.MainPage>
            <S.Container>
                <Header></Header>
                <S.upperBlock>
                    <S.textBlock>
                        <S.info>Онлайн-тренировки для занятий домаs</S.info>
                        <S.title>Начните заниматься спортом и улучшите качество жизни</S.title>
                    </S.textBlock>
                    <S.mainImg src={mainImg}></S.mainImg>
                </S.upperBlock>
                <S.cardsBlock>
                    {Object.keys(data).map((el,i) => (
                        <S.card key={el}>
                            <Link to={'/course/' + data[el]._id}>
                                <S.cardImg src={imgs[i]}></S.cardImg>
                                <S.cardText>{data[el].name}</S.cardText>
                            </Link>
                        </S.card>
                    ))}
                </S.cardsBlock>
                    <S.toTop>Наверх ↑</S.toTop>
            </S.Container>
        </S.MainPage>
    )
}