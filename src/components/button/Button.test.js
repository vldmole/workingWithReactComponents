import { render, screen, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom/extend-expect';
import Button from './Button'

test('Component Button is present', () =>
{
   render(<Button />);
   expect(screen.getByRole('button')).toBeInTheDocument;
   cleanup();
})

test('Component Button have class default class "btn"', () =>
{
   const { container } = render(<Button />);
   expect(container.getElementsByClassName('btn').length).toBe(1);
   cleanup();
})

test('Component Button have label="label"', () =>
{
   render(<Button label="label"/>);
   expect(screen.getByRole('button')).toHaveTextContent('label');
   cleanup();
})
