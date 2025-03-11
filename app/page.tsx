import {
  Container,
  Filters,
  ProductsGroupList,
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
        <div className="flex gap-[70px]">
          {/*Фильтрация  */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров   */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                key={1}
                listClassName=""
                categoryId={1}
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ef9a30c3246adebecb726548cbede9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ef9a30c3246adebecb726548cbede9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ef9a30c3246adebecb726548cbede9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ef9a30c3246adebecb726548cbede9.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                key={2}
                listClassName=""
                categoryId={2}
                title="Напитки"
                items={[
                  {
                    id: 6,
                    name: "Напиток",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d61ab1f976991362a5a42a2613e.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "Напиток",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d61ab1f976991362a5a42a2613e.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: "Напиток",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d61ab1f976991362a5a42a2613e.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: "Напиток",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d61ab1f976991362a5a42a2613e.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
