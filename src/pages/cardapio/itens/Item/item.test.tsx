import { fireEvent, render, screen } from '@testing-library/react';
import { Prato } from 'types/Prato';

import Item from '.';

const mockItem: Prato = {
  category: {
    id: 1,
    label: '',
  },
  description: '',
  id: 1,
  photo: '',
  price: 20,
  serving: 1,
  size: 400,
  title: 'Title test',
};
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('testing component <Item />', () => {
  test('When called this component sould be render', () => {
    render(<Item {...mockItem} />);
    const title = screen.queryByTestId('title');
    const description = screen.queryByTestId('description');
    const img = screen.queryByTestId('img');
    const price = screen.queryByTestId('price');
    const serving = screen.queryByTestId('serving');
    const size = screen.queryByTestId('size');
    const category = screen.queryByTestId('category');

    expect(title).toHaveTextContent(mockItem.title);
    expect(description).toHaveTextContent(mockItem.description);
    expect(img).toHaveTextContent(mockItem.photo);
    expect(serving).toHaveTextContent(`Serve ${mockItem.serving}`);
    expect(price).toHaveTextContent(`R$ ${mockItem.price}`);
    expect(size).toHaveTextContent(`${mockItem.size} g`);
    expect(category).toHaveTextContent(mockItem.category.label);
  });

  test('When click in the Item should navigate to plate', () => {
    render(<Item {...mockItem} />);
    const item = screen.getByTestId(`item-${mockItem.id}`);

    fireEvent.click(item);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(`/prato/${mockItem.id}`);
  });
});
