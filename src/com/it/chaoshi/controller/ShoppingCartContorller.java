package com.it.chaoshi.controller;

import com.it.chaoshi.pojo.ShoppingCart;
import com.it.chaoshi.pojo.ShoppingItems;
import com.it.chaoshi.pojo.User;
import com.it.chaoshi.service.OrderService;
import com.it.chaoshi.service.impl.OrderServiceImpl;
import com.mysql.cj.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("shopping")
public class ShoppingCartContorller {
    @Autowired
    private OrderServiceImpl orderService;
    @Autowired
    private HttpSession session;
    @RequestMapping("getItems")
    public String getItemList(){
        User loguser = (User) session.getAttribute("loguser");
        ShoppingCart cart = orderService.getCart(loguser);
        loguser.setCart(cart);
        session.setAttribute("loguser",loguser);
       return "shoppingcar" ;
    }
    @RequestMapping("addItems")
    public String addShoppingCart(ShoppingItems items){
        User loguser = (User) session.getAttribute("loguser");
        ShoppingCart cart = orderService.getCart(loguser);
        items.setOrderId(cart.getId());
        orderService.addItem(items);
        return "forward:getItems";
    }
    @RequestMapping("delItems")
    public String delItem(int id){
        return "";
    }
    @RequestMapping("clearCart")
    public String clearCart(){
        return "";
    }

}
