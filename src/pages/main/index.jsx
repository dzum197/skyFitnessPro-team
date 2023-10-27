import * as S from './styles'
import mainImg from '../../img/editYourBody.png'
import { Header } from '../../components/header'
import card1 from '../../img/cards/card1.png'
import card2 from '../../img/cards/card2.png'
import card3 from '../../img/cards/card3.png'
import card4 from '../../img/cards/card4.png'
import card5 from '../../img/cards/card5.png'
export function Main() {
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
                    <S.card src={card3}></S.card>
                    <S.card src={card4}></S.card>
                    <S.card src={card5}></S.card>
                </S.cardsBlock>
                    <S.toTop>Наверх ↑</S.toTop>
            </S.Container>
        </S.MainPage>
    )
}