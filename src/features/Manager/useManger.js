import { useSaleContracts } from "../Contracts/useSaleContracts";

function useManger() {
  const { isLoading: salesLoading, saleContracts } = useSaleContracts();
  const { isLoading: rentsLoading, rentContracts } = useSaleContracts();

  const isLoading = salesLoading || rentsLoading;

  const totalEstatesSold = saleContracts.length;
  const totalEstatesRented = rentContracts.length;
  const salesProfit = saleContracts.reduce(
    (prev, cur) => prev + cur.commisionFee,
    0
  );
  const rentsProfit = rentContracts.reduce(
    (prev, cur) => prev + cur.commisionFee,
    0
  );
  return {
    isLoading,
    totalEstatesSold,
    totalEstatesRented,
    salesProfit,
    rentsProfit,
  };
}

export default useManger;
