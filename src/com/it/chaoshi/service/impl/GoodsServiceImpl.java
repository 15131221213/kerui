package com.it.chaoshi.service.impl;

import com.it.chaoshi.dao.GoodsDao;
import com.it.chaoshi.pojo.Goods;
import com.it.chaoshi.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GoodsServiceImpl {
    @Autowired
    private GoodsDao goodsDao;

    public void addGoods(Goods goods) {
        goodsDao.addGoods(goods);
    }

    public void deletGoods(int id) {
        goodsDao.deleteGoods(id);
    }

    public void updetaGoods(Goods goods) {
        goodsDao.updetaGoods(goods);
    }

    public Goods getGood(Integer leveID) {
        Goods good = goodsDao.getGood(leveID);
        return good ;
    }
}
