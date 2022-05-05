package com.it.chaoshi.pojo;

import java.util.List;

public class ShoppingCart {
    private int id;
    private int userId;
    private String loginName;
    private List<ShoppingItems> Items;
    private float cost;//总价
    private boolean getOrderSuss;

    public boolean isGetOrderSuss() {
        return getOrderSuss;
    }

    public void setGetOrderSuss(boolean getOrderSuss) {
        this.getOrderSuss = getOrderSuss;
    }

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
        setCost();
        return cost;
    }

    public void setCost() {
        float sum=0;
        if (Items != null){
            for (ShoppingItems s :Items){
                sum += s.getQuantity()*s.getGoods().getPrice();
            }
        }
        this.cost = sum;
    }
}
