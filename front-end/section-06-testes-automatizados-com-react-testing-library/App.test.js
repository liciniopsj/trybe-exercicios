import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it('verifys if Loading is in the screen', () => {
  render(<App />);
  const verifyLoading = screen.getByText(/carregando/i);
  expect(verifyLoading).toBeInTheDocument();
});
it('verifys if Minecraft is in the screen', async () => {
  render(<App />);
  const verifysMinecraft = await screen.findAllByText(/minecraft/i);
  expect(verifysMinecraft[0]).toBeInTheDocument()
})
it('verifys if Release Year and Sales is in the screen', async () => {
  render(<App />)
  const detailsButton = await screen.findAllByText('Ver detalhes')
  userEvent.click(detailsButton[1])
  const verifysRelease = await screen.findByText(/release year/i);
  const verifysSales = await screen.findByText(/sales/i);
  expect(verifysRelease).toBeInTheDocument()
  expect(verifysSales).toBeInTheDocument()
})
