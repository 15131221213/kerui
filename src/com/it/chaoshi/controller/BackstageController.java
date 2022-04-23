package com.it.chaoshi.controller;

import com.it.chaoshi.service.BackstageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("backstage")
public class BackstageController {
    @Autowired
    private BackstageService backstageService;
    @RequestMapping("select")
    public String selectGoods(){
        return "houtai";
    }
}
