import { Sunmary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable';

import { Container } from './styles'



export function Dashboard() {
  return (
    <Container>
      <Sunmary />
      <TransactionsTable />
    </Container>
  );
}
