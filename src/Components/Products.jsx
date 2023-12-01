import Button from "./Button"
import Form from "./Form";
import MenuItems from "./MenuItems";
import PostItem from "./PostItem";


const Products = () => {
  return (
    <>
    <Form />
    <Button />
    <MenuItems/>
    <PostItem categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
    <PostItem categories="Эстетический уход" subcategory="Скрабы" brand="Academie" items="Гоммаж с кремом и витамином У, 50мл" cashback="10%"/>
    <PostItem categories="Эстетический уход" subcategory="Тонизация" brand="Academie" items="Нормализующий лосьон, 200мл" cashback="10%"/>
    <PostItem categories="Эстетический уход" subcategory="Кремы и гели" brand="Academie" items="Восстанавливающий уход с кальцием, 50мл" cashback="15%"/>
    <PostItem categories="Эстетический уход" subcategory="Кислотные пилинги" brand="Frolyis Pro" items="Ночной пилинг-концентрат “Soin peeling Nuit defruits”, 6мл" cashback="15%"/>
    <PostItem categories="Эстетический уход" subcategory="Средства для душа" brand="Kosmoteros Personnel" items="Активный специальный гель для душа с маслом макадамии, 200мл"cashback="10%"/>
    <PostItem categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
    <PostItem categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
    <PostItem categories="Эстетический уход" subcategory="Очищение" brand="Academie" items="Гоммаж с кремом и витамином У, 50мл" cashback="20%"/>
    <PostItem categories="Эстетический уход" subcategory="Очищение" brand="Academie" items="-" cashback="20%"/>
    <PostItem categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
    <PostItem categories="Эстетический уход" subcategory="Очищение" brand="Academie" items="Гоммаж с кремом и витамином У, 50мл" cashback="20%"/>
    </>
  )
}

export default Products;