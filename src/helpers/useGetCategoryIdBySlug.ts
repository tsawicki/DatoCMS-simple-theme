import { useQuery } from "graphql-hooks";

export function useGetCategoryIdBySlug(categorySlug: string) {
  const CATEGORIES_QUERY = `query CategoriesQuery {
    allCategories {
      id
      slug
    }
  }
  `;
  const { data } = useQuery(CATEGORIES_QUERY);

  if (data) {
    const category = data.allCategories.find(
      (category: any) => category.slug === categorySlug
    );
    if (category) return category.id;
  }
}
