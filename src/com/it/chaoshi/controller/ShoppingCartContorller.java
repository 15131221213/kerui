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
import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping("shopping")
public class ShoppingCartContorller {
    @Autowired
    private OrderServiceImpl orderService;
    @Autowired
    private HttpSession session;
    @RequestMapping("getItems")
    public String getItemList(Model model){
        User loguser = (User) session.getAttribute("loguser");
        ShoppingCart cart = orderService.getCart(loguser);
        List<ShoppingItems> items = cart.getItems();
        int sum = 0;
        for(ShoppingItems item:items){
            sum+=item.getQuantity();
        }
        loguser.setCart(cart);
        model.addAttribute("Item",items);
        session.setAttribute("loguser",loguser);
        session.setAttribute("cartsize",sum);
       return "shoppingcar" ;
    }
    @RequestMapping("addItems")
    public String addShoppingCart(ShoppingItems items){
        User loguser = (User) session.getAttribute("loguser");
        ShoppingCart cart = orderService.getCart(loguser);
        items.setOrderId(cart.getId());
        orderService.addItem(items);
        return "redirect:getItems";
    }
    @RequestMapping("delItems")
    public String delItem(@RequestParam("ItemId") Integer id){
        orderService.delItem(id);
        return "redirect:getItems";
    }
    @RequestMapping("clearCart")
    public String clearCart(){
        return "";
    }
    @RequestMapping("jiesuan")
    public String jiesuan(){
        User loguser = (User) session.getAttribute("loguser");
        ShoppingCart cart = orderService.getCart(loguser);
        cart.setIstijiao(true);
        orderService.update(cart);
     return "redirect:ordersuessList";
    }
    @RequestMapping("ordersuessList")
    public String osList(Model model){
        User loguser = (User) session.getAttribute("loguser");
        List<ShoppingCart> ordersuess = orderService.ordersuess(loguser);
        model.addAttribute("ordersuess",ordersuess);
        return "ordersuess";
    }

}
