package com.it.chaoshi.text;

import com.it.chaoshi.controller.Usercontroller;
import com.it.chaoshi.pojo.User;
import com.it.chaoshi.service.UserService;
import com.it.chaoshi.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.Random;

public class text {
    public static void main(String[] args) {
//        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("spring/applicationContext..xml");
//        Usercontroller bean = context.getBean(Usercontroller.class);
//        User user = bean.getUser(2);
//        System.out.println(user);
        System.out.println("1111123232333333");
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("spring/applicationContext..xml");
        UserServiceImpl bean = context.getBean(UserServiceImpl.class);
        Random random = new Random();
        int i1 = random.nextInt(100);
        for (int i=0;i<100;i++){
            User user = new User();
            user.setUsername("测试"+i);
            user.setPassword(i+""+i1);
            user.setGender(1);
            bean.addUser(user);
        }
    }

}
