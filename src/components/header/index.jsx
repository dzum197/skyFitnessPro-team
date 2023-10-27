import * as S from './styles'
import Logo from '../../img/logo.png'
export function Header() {
    return(
        <S.Header>
            <S.Logo src={Logo}></S.Logo>
            <S.Button>Войти</S.Button>
        </S.Header>
    )
} 