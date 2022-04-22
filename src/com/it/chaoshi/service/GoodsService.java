package com.it.chaoshi.service;

import com.it.chaoshi.pojo.Goods;

public interface GoodsService {
    public void addGoods();
    public void deletGoods(int id);
    public void updetaGoods(Goods goods);
    public Goods getGood(Integer leveID);
}
