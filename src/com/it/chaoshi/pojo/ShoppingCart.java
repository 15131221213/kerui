package com.it.chaoshi.pojo;

import java.util.List;

public class ShoppingCart {
    private int id;
    private int userId;
    private String loginName;
    private List<ShoppingItems> Items;
    private float cost;//总价

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public List<ShoppingItems> getItems() {
        return Items;
    }

    public void setItems(List<ShoppingItems> items) {
        Items = items;
    }

    public float getCost() {
        return cost;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }
}
