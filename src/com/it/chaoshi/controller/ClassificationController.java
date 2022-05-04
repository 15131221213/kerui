package com.it.chaoshi.controller;

import com.it.chaoshi.dao.GoodsDao;
import com.it.chaoshi.pojo.Classification;
import com.it.chaoshi.pojo.Goods;
import com.it.chaoshi.pojo.User;
import com.it.chaoshi.service.ClassificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping("index")
public class ClassificationController {
    @Autowired
    private ClassificationService classificationService;
    @Autowired
    private GoodsDao goodsDao;
    @RequestMapping("select")

    public String getCategoryTree( Model model){

        List<Classification> lists = classificationService.getCategoryTree();
                for (Classification l1 : lists) {
                    List<Goods> goods = goodsDao.getGoods(l1.getId());
                    l1.setGoodsList(goods);
                }
        model.addAttribute("clist",lists);


//        for (Classification c:lists){
//            System.out.println(c);
//        }

        return "home1";
    }
}
