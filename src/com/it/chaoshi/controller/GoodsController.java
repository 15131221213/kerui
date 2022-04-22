package com.it.chaoshi.controller;

import com.it.chaoshi.pojo.Goods;
import com.it.chaoshi.service.impl.GoodsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("Goods")
public class GoodsController {
    @Autowired
    private GoodsServiceImpl goodsService;
    public String addGoods(Goods goods){
        goodsService.addGoods(goods);
        return "";
    }
    public String deleteGoods(int id){
        goodsService.deletGoods(id);
        return "";
    }
    public String updetaGoods(Goods goods){
        goodsService.updetaGoods(goods);
        return "";
    }
    @RequestMapping("getGoods")
    public String getGoods(@RequestParam("id") Integer leveID, Model model){
        Goods goods = goodsService.getGood(leveID);
        System.out.println(leveID);
        return "details";
    }
}
