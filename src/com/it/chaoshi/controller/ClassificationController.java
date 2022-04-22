package com.it.chaoshi.controller;

import com.it.chaoshi.dao.GoodsDao;
import com.it.chaoshi.pojo.Classification;
import com.it.chaoshi.pojo.Goods;
import com.it.chaoshi.service.ClassificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("index")
public class ClassificationController {
    @Autowired
    private ClassificationService classificationService;
    @Autowired
    private GoodsDao goodsDao;
    @RequestMapping("select")
    public String getCategoryTree(Model model){
        List<Classification> categoryOne = classificationService.getCategoryOne();
        List<Classification> lists = classificationService.getCategoryTree();
        for (Classification list : lists) {
            for (Classification l2 : list.getChinder()) {
                for (Classification l3 : l2.getChinder()) {
                    List<Goods> goods = goodsDao.getGoods(l3.getId());
                    model.addAttribute("glist",goods);
                }
            }
        }
        model.addAttribute("clist",lists);
//        for (Classification c:lists){
//            System.out.println(c);
//        }
        return "home1";
    }
}
