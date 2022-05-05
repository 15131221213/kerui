package com.it.chaoshi.dao;

import com.it.chaoshi.pojo.ShoppingCart;
import com.it.chaoshi.pojo.ShoppingItems;

import java.util.List;

public interface OrderDao {
    ShoppingCart getOrder(int userid);

    void addCart(ShoppingCart c);


}
