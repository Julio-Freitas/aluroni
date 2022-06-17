import { fireEvent, render, screen } from '@testing-library/react';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Prato from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: jest.fn(),
}));

describe('testing component Prato', () => {
  const params = {
    id: 1,
  };
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue(params);
  });

  test('Should be one id', () => {
    render(
      <Suspense fallback="Carregando">
        <Prato />
      </Suspense>
    );

    const prato = screen.getByTestId(params.id);
    const button = screen.getByRole('button', {
      hidden: true,
    });

    expect(prato).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('When click in button voltar', () => {
    render(
      <Suspense fallback="Carregando">
        <Prato />
      </Suspense>
    );
    const button = screen.getByRole('button', {
      hidden: true,
    });

    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
