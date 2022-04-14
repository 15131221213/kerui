package com.it.chaoshi.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.it.chaoshi.pojo.User;
import com.it.chaoshi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("user")
public class Usercontroller {
    @Autowired
    private UserService userService;
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
        return "index";
    }
    @RequestMapping("toadd")
    public String toAdd(){
        return "add";
    }
    @RequestMapping("add")
    public String addUser(User user){
        userService.addUser(user);
        return "redirect:getList";
    }
    @RequestMapping("updetaUser")
    public String updetaUser(User user){
        userService.updetaUser(user);
        return "redirect:getList";
    }
    @RequestMapping("deleteUser")
    public String deleteUser(int id){
        System.out.println("老马plus");
        userService.deleteUser(id);
        return "redirect:getList";
    }
}
