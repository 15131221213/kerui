package com.it.chaoshi.pojo;

public class ShoppingCart {
    private ShoppingItems shoppingItems;
    private Double total;//总价

    public ShoppingItems getShoppingItems() {
        return shoppingItems;
    }

    public void setShoppingItems(ShoppingItems shoppingItems) {
        this.shoppingItems = shoppingItems;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }
}
