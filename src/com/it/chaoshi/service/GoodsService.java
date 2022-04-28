package com.it.chaoshi.service;

import com.it.chaoshi.pojo.Goods;

import java.util.ArrayList;

public interface GoodsService {
    public void addGoods();
    public void deletGoods(int id);
    public void updetaGoods(Goods goods);
    public Goods getGood(Integer leveID);
    public ArrayList<Goods> getGoodsList();
    public Goods getGoodByid();
}
