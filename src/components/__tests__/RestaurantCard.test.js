import { render, screen } from "@testing-library/react";
import RestaurantCard, { withDiscountLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Discount Label", () => {
//   render(withDiscountLabel(<RestaurantCard resData={MOCK_DATA} />));
//   const label = screen.getByText("Discount");
//   except(label).toBeInTheDocument();
});
