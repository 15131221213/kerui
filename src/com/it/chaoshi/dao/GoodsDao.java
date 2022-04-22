package com.it.chaoshi.dao;

import com.it.chaoshi.pojo.Goods;
import com.it.chaoshi.pojo.User;

import java.util.List;

public interface GoodsDao {
    public List<Goods> getGoods(int leve3ID);

    void addGoods(Goods goods);

    void deleteGoods(int id);

    void updetaGoods(Goods goods);
    public Goods getGood(Integer leve3ID);
}
