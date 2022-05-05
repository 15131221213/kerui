package com.it.chaoshi.dao;

import com.it.chaoshi.pojo.ShoppingItems;

import java.util.List;

public interface ItemDao {
    List<ShoppingItems> getList(int orderId);
    void addItem(ShoppingItems items);
    ShoppingItems getItem(ShoppingItems items);
    void update(ShoppingItems items);
}
