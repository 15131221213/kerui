package com.it.chaoshi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("shopping")
public class ShoppingCartContorller {
    @RequestMapping("add")
    public String addShoppingCart(){
        return "shoppingcar";
    }
}
