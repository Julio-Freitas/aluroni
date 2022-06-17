import { fireEvent, render, screen } from '@testing-library/react';
import { optOrdernador } from './ordernador';
import Ordernador from '.';

let ordernador = '';
const setOrdernador = jest.fn();

describe('testing componente orderador', () => {
  test('Should be render the options', () => {
    render(
      <Ordernador ordernador={ordernador} setOrdernador={setOrdernador} />
    );

    optOrdernador.forEach((opt) => {
      const option = screen.queryAllByText(opt.nome)[0];
      expect(option).toBeInTheDocument();
    });
  });

  test('The component should be closed', () => {
    render(
      <Ordernador ordernador={ordernador} setOrdernador={setOrdernador} />
    );
    const container = screen.getByTestId('container-options');
    expect(container.classList).not.toContain('ordenador__options--ativo');
  });

  test('The component should be open when click in button ', () => {
    render(
      <Ordernador ordernador={ordernador} setOrdernador={setOrdernador} />
    );
    const button = screen.getByRole('button');
    const container = screen.getByTestId('container-options');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(container.classList).toContain('ordenador__options--ativo');
  });

  test('When click any otions', () => {
    const { rerender } = render(
      <Ordernador
        ordernador={optOrdernador[1].nome}
        setOrdernador={setOrdernador}
      />
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option = screen.getByText(optOrdernador[1].nome);
    setOrdernador.mockImplementationOnce((value) => {
      ordernador = value;
    });

    fireEvent.click(option);

    expect(setOrdernador).toHaveBeenCalledTimes(1);
    expect(setOrdernador).toHaveBeenCalledWith(optOrdernador[1].value);
    rerender(
      <Ordernador ordernador={ordernador} setOrdernador={setOrdernador} />
    );

    const text = screen.getByTestId('nomeOrdernador');
    expect(ordernador).toEqual(optOrdernador[1].value);
    expect(text).toHaveTextContent(optOrdernador[1].nome);
  });
});
