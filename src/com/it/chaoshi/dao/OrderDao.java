package com.it.chaoshi.dao;

import com.it.chaoshi.pojo.ShoppingCart;
import com.it.chaoshi.pojo.ShoppingItems;

import java.util.List;

public interface OrderDao {
    ShoppingCart getOrder(int userid);
    List<ShoppingCart> getOrderSuss(int userid);
    void addCart(ShoppingCart c);


    void update(ShoppingCart cart);
}
