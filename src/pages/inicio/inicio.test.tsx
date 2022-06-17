import { fireEvent, render, screen } from '@testing-library/react';
import recomendados from 'data/cardapio.json';

import Inicio from '.';
import { useListCardapio } from 'hooks/useListCardapio';

jest.mock('hooks/useListCardapio', () => {
  return {
    useListCardapio: jest.fn(),
  };
});

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigation,
  };
});



describe('testing component <Inicio />', () => {
  beforeEach(() => {
    (useListCardapio as jest.Mock).mockReturnValue(recomendados.splice(0, 3));
  });

  test('Should be title', () => {
    render(<Inicio />);
    const title = screen.getByRole('heading');
    const ul = screen.getByRole('list');

    expect(ul).toBeInTheDocument();
    expect(title.textContent).toEqual('Recomendações da cozinha');
  });

  test('Shoul be render recommended dishes ', () => {
    render(<Inicio />);
    const itens = screen.getAllByRole('listitem');
    expect(itens).toHaveLength(3);
  });

  test('when click in list\'sbutton should called the hook useNavigte once ', () => {
    render(<Inicio />);
    const button = screen.queryAllByRole('button')[0];
    fireEvent.click(button);
    expect(mockNavigation).toHaveBeenCalledTimes(1);
  });
});

