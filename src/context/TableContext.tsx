import axios from "axios";
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import useDebounce from "./useDebounce";

export interface TableRow {
  Image: string;
  SKU: string;
  Name: string;
  Title: string;
  Description: string;
  Brand: string;
  CostPrice: string;
  Quantity: number;
  Size: string;
}

interface TableContextProps {
  data: TableRow[];
  loading: boolean;
  error: string | null;
  handleSetSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

interface Props {
  children?: ReactNode;
}

export const TableContext = createContext<TableContextProps | undefined>(
  undefined
);

const endpoint = "http://3.88.1.181:8000/products/public/catalog";

export const TableProvider = ({ children }: Props) => {
  const [data, setData] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);

  const truncateData = useCallback((value: string) => {
    if (value.length <= 50) return value;

    return `${value.slice(0, 50)}...`;
  }, []);

  const handleFetch = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(endpoint, {
        params: {
          supplier: "FragranceX",
          search: debouncedSearch || undefined,
        },
      });

      const data = response.data || [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedData: TableRow[] = data.map((item: any) => {
        return {
          Image: item.Image_1,
          SKU: item.SKU,
          Name: item.Name,
          Title: truncateData(item.Title),
          Description: truncateData(item.Description),
          Brand: item.Brand,
          CostPrice: item["Cost Price"],
          Quantity: item.Quantity,
          Size: item.size,
        };
      });

      setData(formattedData);
      setLoading(false);

      // eslint-disable-next-line no-empty
    } catch (error) {
      setError("Error Loading data");
      setLoading(false);
    }
  }, [debouncedSearch, truncateData]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  const handleSetSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  const value: TableContextProps = useMemo(
    () => ({
      data,
      error,
      loading,
      handleSetSearch,
      search,
    }),
    [data, error, handleSetSearch, loading, search]
  );

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTableContext = (): TableContextProps => {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};
