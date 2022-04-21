package com.it.chaoshi.controller;

import com.it.chaoshi.pojo.Classification;
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
    @RequestMapping("select")
    public String getCategoryTree(Model model){
        List<Classification> categoryOne = classificationService.getCategoryOne();
        List<Classification> lists = classificationService.getCategoryTree();
        model.addAttribute("clist",lists);
//        for (Classification c:lists){
//            System.out.println(c);
//        }

        return "home";
    }
}
