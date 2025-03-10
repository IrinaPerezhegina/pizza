import {
  Container,
  Filters,
  ProductCard,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" className="font-extrabold" size="lg" />
      </Container>

      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/*Фильтрация  */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров   */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard id={34} imageUrl="ccc" name="ccc" price={200} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
// 2:00:12
