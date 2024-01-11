
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeardersProps {
  onOpenNewTransactionModal: () => void;
}


export function Header({ onOpenNewTransactionModal }: HeardersProps) {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}