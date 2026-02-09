/**
 * Ejemplo de test para componentes
 * 
 * Para ejecutar tests:
 * npm install --save-dev @testing-library/react @testing-library/jest-dom jest @types/jest
 * npm run test
 */

import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    // Ajusta según tus componentes
    // const heading = screen.getByRole("heading", { level: 1 });
    // expect(heading).toBeInTheDocument();
  });
});
