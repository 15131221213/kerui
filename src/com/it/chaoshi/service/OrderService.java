package com.it.chaoshi.service;

import com.it.chaoshi.pojo.ShoppingCart;
import com.it.chaoshi.pojo.ShoppingItems;
import com.it.chaoshi.pojo.User;

import java.util.List;

public interface OrderService {
    List<ShoppingCart> ordersuess(User user);
    ShoppingCart getCart(User user);

    void addCart(ShoppingCart c);

    void addItem(ShoppingItems items);


    void update(ShoppingCart cart);

    void delItem(int id);
}
