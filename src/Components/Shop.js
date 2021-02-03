import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import EachProduct from "./EachProduct";
function Shop({ props: AddItemToCart, products: newest, setPage: setPage }) {
    return (
        <section id="shop" className="menu section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Products</h2>
                    <div className="shopList">
                        <p>Check Our latest Products</p>
                        <div
                            className="rest cursor"
                            onClick={() => {
                                setPage("store");
                            }}
                        >
                            <p>Veiw all Products</p>
                            <span>
                                <BiRightArrowAlt size="1.25rem" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
                    <ProductsList products={newest} AddToCart={AddItemToCart} />
                </div>
            </div>
        </section>
    );
}
function ProductsList({ products: newest, AddToCart: AddItemToCart }) {
    const ProductsJSX = newest.map(
        ({ quantity, id, description, name, imgSrc, category, price }) => {
            return (
                <EachProduct
                    key={id}
                    props={{
                        quantity,
                        id,
                        description,
                        name,
                        imgSrc,
                        category,
                        price,
                        AddItemToCart,
                    }}
                />
            );
        }
    );

    return ProductsJSX;
}

export default Shop;
