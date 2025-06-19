import { useRouter } from "next/navigation";
import qs from "qs";
import React, { useRef } from "react";
import { Filters } from "./use-filters";

export const useQueryFilters = (filters: Filters) => {
  const isMounted = useRef(false);
  const router = useRouter();
  React.useEffect(() => {
    if (isMounted) {
      const params = {
        ...filters.prices,
        pizzaTypes: Array.from(filters.pizzaTypes),
        ingredients: Array.from(filters.selectedIngredients),
        sizes: Array.from(filters.sizes),
      };

      const query = qs.stringify(params, { arrayFormat: "comma" });
      router.push(`?${query}`, {
        scroll: false,
      });
    }

    isMounted.current = true;
  }, [filters]);
};
