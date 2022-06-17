import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cardapio from '.';

describe('testing component Cardapio', () => {
  test('The page should be render', ()=> {
    const { container } = render(
      <BrowserRouter>
        <Cardapio />
      </BrowserRouter>
    );
    const title = screen.getAllByRole('heading')[0];
    expect(title.textContent).toEqual('Cardápio');
    expect(container).toMatchSnapshot();
  });
});
