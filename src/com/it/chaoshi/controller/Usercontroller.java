package com.it.chaoshi.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.code.kaptcha.Producer;
import com.it.chaoshi.pojo.ShoppingItems;
import com.it.chaoshi.pojo.User;
import com.it.chaoshi.service.OrderService;
import com.it.chaoshi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.transform.Source;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("user")
public class Usercontroller {
    @Autowired
    private UserService userService;
    @Autowired
    private OrderService orderService;



    @RequestMapping("toUpdate")
    public String getUser(int id,Model model){
        User user = userService.getUser(id);
        model.addAttribute("user",user);
        return "updeta";
    }
    @RequestMapping("getList")
    public String getList(Model model, @RequestParam(value = "pageNum",defaultValue = "1") int pageNum,
    @RequestParam(value = "pageSize",defaultValue = "10")int pageSize){
        PageHelper.startPage(pageNum, pageSize);
        List<User> list = userService.getList();
        PageInfo page = new PageInfo(list);
//        NextPage  PrePage   NavigatepageNums
        model.addAttribute("pg",page);
        return "home1";
    }
    @RequestMapping("toadd")
    public String toAdd(){
        return "add";
    }
    @RequestMapping("add")
    public String addUser(@RequestParam String admin,User user){
        if (admin.equals("123456")){
            user.setIsadmin(true);
        }
        System.out.println();
        userService.addUser(user);
        return "home1";
    }
    @RequestMapping("updetaUser")
    public String updetaUser(User user){
        userService.updetaUser(user);
        return "getList";
    }
    @RequestMapping("deleteUser")
    public String deleteUser(int id){
        userService.deleteUser(id);
        return "redirect:getList";
    }
    @RequestMapping("login")
    public String login(User user,HttpSession session){
        User login = userService.login(user);

        if (user.equals(login)&&login.isIsadmin()==false){
            session.setAttribute("loguser",login);
            List<ShoppingItems>items = orderService.getCart(login).getItems();
            int sum = 0;
            for(ShoppingItems item:items){
                sum+=item.getQuantity();
            }
            session.setAttribute("cartsize",sum);
            return "index";
        }else if(user.equals(login)&&login.isIsadmin()==true){
            session.setAttribute("loguser",login);
            List<ShoppingItems>items = orderService.getCart(login).getItems();
            int sum = 0;
            for(ShoppingItems item:items){
                sum+=item.getQuantity();
            }
            session.setAttribute("cartsize",sum);
            return "houtai";
        }
        else {
            return "";
        }

    }
    @RequestMapping("logout")
    public String logout(HttpSession session) throws Exception {
        // session 过期
        session.removeAttribute("user");
        session.invalidate();
        return "index";
    }

}
